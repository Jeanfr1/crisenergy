"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField({ count = 2000 }) {
  const points = useRef<THREE.Points>(null!);

  // Generate random points in a sphere
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 1.5;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    return positions;
  }, [count]);

  // Animation for the particles
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.2;

    if (points.current) {
      // Rotate the entire point cloud
      points.current.rotation.x = Math.sin(time / 4) * 0.3;
      points.current.rotation.y = Math.sin(time / 2) * 0.2;

      // Animate individual points
      const positions = points.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];

        // Apply a wave effect
        positions[i3] = x + Math.sin(y / 2 + time) * 0.01;
        positions[i3 + 1] = y + Math.sin(x / 2 + time) * 0.01;
        positions[i3 + 2] = z + Math.cos(x / 2 + time) * 0.01;
      }

      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={points} positions={particlesPosition} stride={3}>
      <PointMaterial
        transparent
        color="#39FF14"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function EnergyOrb() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.2;
      mesh.current.rotation.z = time * 0.1;
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshBasicMaterial
        color="#39FF14"
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
}

function EnergyCore() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.scale.x = 0.8 + Math.sin(time * 2) * 0.1;
      mesh.current.scale.y = 0.8 + Math.sin(time * 2) * 0.1;
      mesh.current.scale.z = 0.8 + Math.sin(time * 2) * 0.1;
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshBasicMaterial
        color="#39FF14"
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

export default function EnergyFlow() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <EnergyOrb />
        <EnergyCore />
        <ParticleField />
      </Canvas>
    </div>
  );
}
