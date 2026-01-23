import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork = () => {
    const pointCount = 500;
    const lineCount = 300;

    // Generate random points in a long tunnel
    const points = useMemo(() => {
        const p = new Float32Array(pointCount * 3);
        const colors = new Float32Array(pointCount * 3);
        const color1 = new THREE.Color('#8b5cf6'); // Violet
        const color2 = new THREE.Color('#a78bfa'); // Light Violet

        for (let i = 0; i < pointCount; i++) {
            p[i * 3] = (Math.random() - 0.5) * 30;     // x
            p[i * 3 + 1] = (Math.random() - 0.5) * 30; // y
            p[i * 3 + 2] = (Math.random() - 0.5) * 60; // z - spread out depth

            // Mix colors
            const mixedColor = i % 2 === 0 ? color1 : color2;
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }
        return { positions: p, colors };
    }, []);

    const pointsRef = useRef();

    useFrame((state) => {
        // Infinite scroll logic:
        // Move points towards camera based on scroll or time
        // Just rely on camera movement for scroll feeling

        // Gentle rotation
        if (pointsRef.current) {
            pointsRef.current.rotation.z += 0.0005;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={pointCount}
                    array={points.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={pointCount}
                    array={points.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
};

const Connections = () => {
    // A separate set of glowing lines for the network effect
    const count = 40;
    const lines = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: new THREE.Vector3(
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 40
                ),
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02,
                    0
                )
            });
        }
        return temp;
    }, []);

    const geometry = useMemo(() => new THREE.BufferGeometry(), []);
    const lineMaterial = useMemo(() => new THREE.LineBasicMaterial({
        color: '#7c3aed',
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending
    }), []);

    const ref = useRef();

    useFrame((state) => {
        // Update line positions
        if (!ref.current) return;

        // Animate nodes
        lines.forEach(node => {
            node.position.add(node.velocity);
            // Bounce/Wrap
            if (Math.abs(node.position.x) > 10) node.velocity.x *= -1;
            if (Math.abs(node.position.y) > 10) node.velocity.y *= -1;
        });

        // Rebuild geometry for connections
        const positions = [];
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dist = lines[i].position.distanceTo(lines[j].position);
                if (dist < 8) { // Connection distance
                    positions.push(
                        lines[i].position.x, lines[i].position.y, lines[i].position.z,
                        lines[j].position.x, lines[j].position.y, lines[j].position.z
                    );
                }
            }
        }

        ref.current.geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3)
        );
    });

    return (
        <lineSegments ref={ref} material={lineMaterial}>
            <bufferGeometry />
        </lineSegments>
    );
}

const ScrollRig = () => {
    useFrame((state) => {
        // Scroll based camera movement
        // Map window.scrollY to camera.position.z
        const scrollY = window.scrollY;
        // Move camera forward (negative Z) as we scroll down
        const targetZ = -scrollY * 0.02; // Adjust speed factor

        state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 20 + targetZ, 0.1);

        // Also subtle parallax based on mouse
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.mouse.x * 2, 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.mouse.y * 2, 0.05);
    });
    return null;
}

const Background3D = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 20], fov: 60 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
            <fog attach="fog" args={['#050505', 10, 60]} />
            <ambientLight intensity={0.5} />

            <ParticleNetwork />
            <Connections />
            <ScrollRig />
        </Canvas>
    );
};

export default Background3D;
