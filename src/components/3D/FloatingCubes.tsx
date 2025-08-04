import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const CodeCube = ({ position, scale, rotationSpeed }: { 
  position: [number, number, number];
  scale: number;
  rotationSpeed: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Group>(null);
  
  const codeSnippets = [
    'function hack() {',
    'const matrix = [',
    'if (cyber) {',
    'console.log("01")',
    'return digital',
    '} else {'
  ];
  
  const snippet = useMemo(() => codeSnippets[Math.floor(Math.random() * codeSnippets.length)], []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed * 0.7;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.01;
    }
    if (textRef.current) {
      textRef.current.rotation.y = state.camera.rotation.y;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#00ff00"
          emissive="#00ff00"
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
          wireframe
        />
      </mesh>
      <group ref={textRef} position={[0, 0, scale * 0.6]}>
        <Text
          fontSize={0.2}
          color="#00ff00"
          anchorX="center"
          anchorY="middle"
          font="/fonts/courier-new.woff"
        >
          {snippet}
        </Text>
      </group>
    </group>
  );
};

export const FloatingCubes = () => {
  const cubes = useMemo(() => {
    const cubeArray = [];
    for (let i = 0; i < 12; i++) {
      cubeArray.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10
        ] as [number, number, number],
        scale: 0.5 + Math.random() * 0.8,
        rotationSpeed: 0.005 + Math.random() * 0.01
      });
    }
    return cubeArray;
  }, []);

  return (
    <>
      {cubes.map((cube, index) => (
        <CodeCube
          key={index}
          position={cube.position}
          scale={cube.scale}
          rotationSpeed={cube.rotationSpeed}
        />
      ))}
    </>
  );
};