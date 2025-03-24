import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const ExhibitWalkthrough = () => {
  const { scene } = useGLTF('/models/scene.gltf'); // Ensure the path to your model is correct

  const cameraRef = useRef();

  // Set initial camera position on load
  const initialPosition = [0, 2, 10]; // Move the camera further away from the model
  const initialLookAt = [0, 0, 0];  // Where the camera should look at

  return (
    <div className="exhibit-container">
      <h2>Explore the Art Exhibit</h2>
      <Canvas camera={{ position: initialPosition, fov: 60 }} ref={cameraRef}>
        {/* Lighting setup */}
        <ambientLight intensity={1.25} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Suspense for loading the GLTF model */}
        <Suspense fallback={<div>Loading...</div>}>
          <primitive object={scene} scale={1.8} /> {/* Adjust model scale if necessary */}
        </Suspense>

        {/* OrbitControls to allow navigation */}
        <OrbitControls 
          maxDistance={20}   // Set a larger max zoom distance
          minDistance={5}    // Set a reasonable minimum zoom distance
          enableZoom={true}  // Enable zoom
          enablePan={true}   // Enable panning
          target={initialLookAt} // Set the target the camera should look at
        />
      </Canvas>
    </div>
  );
};

export default ExhibitWalkthrough;
