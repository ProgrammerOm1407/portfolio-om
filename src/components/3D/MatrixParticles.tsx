import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const MatrixParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const { positions, velocities, characters } = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);
    const characters = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Spread particles across a wide area
      positions[i * 3] = (Math.random() - 0.5) * 40; // x
      positions[i * 3 + 1] = Math.random() * 30 - 15; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
      
      velocities[i] = Math.random() * 0.02 + 0.01;
      characters[i] = Math.random();
    }
    
    return { positions, velocities, characters };
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length / 3; i++) {
        // Make particles fall down like rain
        positions[i * 3 + 1] -= velocities[i];
        
        // Reset particles when they fall below the screen
        if (positions[i * 3 + 1] < -15) {
          positions[i * 3 + 1] = 15;
          positions[i * 3] = (Math.random() - 0.5) * 40;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ff00"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};