"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from 'three';

function ClayForm(props: any) {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!mesh.current) return;
        const t = state.clock.getElapsedTime();
        // Slow, heavy rotation mimicking a physical object
        mesh.current.rotation.y = Math.sin(t / 8) / 4;
        mesh.current.rotation.x = Math.cos(t / 12) / 8;
    });

    return (
        <group {...props}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
                <mesh ref={mesh} receiveShadow castShadow>
                    {/* Abstract Torus Knot - Organic, sculpted look */}
                    <torusKnotGeometry args={[1, 0.35, 128, 32, 2, 3]} />

                    {/* Clay / Plaster Material */}
                    <meshStandardMaterial
                        color="#E6E2D8" // Sand/Bone color
                        roughness={0.9} // Very matte, like unpolished clay
                        metalness={0.0}
                        displacementScale={0.2}
                    />
                </mesh>
            </Float>
            <ContactShadows
                position={[0, -2, 0]}
                opacity={0.4}
                scale={15}
                blur={2.5}
                far={4.5}
                color="#6B5B4E" // Brownish shadow for warmth
            />
        </group>
    );
}

export default function Sculpture() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none grayscale-[0.2]">
            <Canvas shadows camera={{ position: [0, 0, 6], fov: 35 }}>
                {/* Soft "Museum" Lighting */}
                <ambientLight intensity={0.8} color="#FFEEDD" />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                    color="#FFFAF0"
                />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#C5B498" />

                {/* Environment for subtle reflections, even on matte objects */}
                <Environment preset="city" />

                <Suspense fallback={null}>
                    <ClayForm />
                </Suspense>
            </Canvas>
        </div>
    );
}
