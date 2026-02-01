"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera, Stars, Sparkles, Cloud, Instance, Instances, AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cityscape() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const lightRef = useRef<THREE.Group>(null);
  
  // Procedural Building Data
  const count = 200;
  const tempObject = new THREE.Object3D();
  const data = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      x: THREE.MathUtils.randFloatSpread(100), // Wide spread
      z: THREE.MathUtils.randFloat(-20, -60), // Far depth
      y: THREE.MathUtils.randFloat(0, 20), // Height variety
      scale: THREE.MathUtils.randFloat(1, 3), // Width variety
      height: THREE.MathUtils.randFloat(5, 25),
    }))
  }, []);

  useFrame((state) => {
     // Subtle camera movement simulation or light pulse
     if (lightRef.current) {
         lightRef.current.rotation.y += 0.001;
     }
  });
  
  // Set instances
  useMemo(() => {
      // We will perform this in useLayoutEffect or just once during render phase if we were cautious, 
      // but for simple random generation this is fine.
  }, []);
  
  // Update instances on mount
  useEffect(() => {
      if (!meshRef.current) return;
      
      data.forEach((d, i) => {
          tempObject.position.set(d.x, d.height / 2 - 10, d.z); // Offset y to be "grounded" below camera view
          tempObject.scale.set(d.scale, d.height, d.scale);
          tempObject.updateMatrix();
          meshRef.current!.setMatrixAt(i, tempObject.matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
  }, [data]);

  return (
    <group>
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <boxGeometry />
            <meshStandardMaterial color="#020617" roughness={0.1} metalness={0.9} />
        </instancedMesh>
        
        {/* Neon Windows / Lights scattered */}
        <group ref={lightRef}>
            {data.map((d, i) => (
                <mesh key={i} position={[d.x, d.height + Math.random() * 5 - 10, d.z]} rotation={[0,0,0]}>
                    <planeGeometry args={[0.5, 0.5]} />
                    <meshBasicMaterial color={Math.random() > 0.5 ? "#00f3ff" : "#a855f7"} />
                </mesh>
            )).slice(0, 50)} {/* Only 50 lights to save perf */}
        </group>
    </group>
  );
}

function MovingLights() {
    const light1 = useRef<THREE.PointLight>(null);
    const light2 = useRef<THREE.PointLight>(null);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        if (light1.current) {
            light1.current.position.x = Math.sin(t * 0.2) * 20;
            light1.current.position.z = Math.cos(t * 0.2) * 20 - 30;
        }
        if (light2.current) {
            light2.current.position.x = Math.cos(t * 0.3) * 20;
            light2.current.position.z = Math.sin(t * 0.3) * 20 - 30;
        }
    });

    return (
        <>
            <pointLight ref={light1} intensity={10} color="#00f3ff" distance={50} decay={2} />
            <pointLight ref={light2} intensity={10} color="#a855f7" distance={50} decay={2} />
        </>
    );
}

export function MainScene() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas dpr={[1, 2]} gl={{ antialias: false, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
                
                <color attach="background" args={['#020617']} />
                
                {/* Environment & Lighting for better visibility */}
                <fog attach="fog" args={['#020617', 10, 60]} /> {/* Cleaned up fog range */}
                <ambientLight intensity={0.3} color="#1e293b" /> {/* Base visibility */}
                <directionalLight position={[10, 10, 5]} intensity={1} color="#38bdf8" /> {/* Rim light (Cyan) */}
                <directionalLight position={[-10, 10, 5]} intensity={0.5} color="#a855f7" /> {/* Rim light (Violet) */}

                <Stars radius={200} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />
                
                {/* Distant City */}
                <Cityscape />
                
                {/* Atmospheric Lights */}
                <MovingLights />
                
                {/* Floor Reflection substitute */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, -20]}>
                    <planeGeometry args={[200, 200]} />
                    <meshStandardMaterial color="#0b1221" roughness={0.1} metalness={0.8} />
                </mesh>

                {/* Overhead clouds/smog */}
                <Cloud opacity={0.3} speed={0.2} segments={20} color="#1e1b4b" position={[0, 10, -20]} bounds={[20, 5, 5]} />
                
                <Sparkles count={100} scale={20} size={2} speed={0.4} opacity={0.2} color="#ffffff" />
            </Canvas>
        </div>
    );
}
