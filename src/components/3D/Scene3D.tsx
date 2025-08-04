import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { FloatingCubes } from './FloatingCubes';
import { MatrixParticles } from './MatrixParticles';
import { OrbitControls, Environment } from '@react-three/drei';

interface Scene3DProps {
  className?: string;
}

export const Scene3D = ({ className = "" }: Scene3DProps) => {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ff00" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b00ff" />
          
          <FloatingCubes />
          <MatrixParticles />
          
          <Environment preset="night" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};