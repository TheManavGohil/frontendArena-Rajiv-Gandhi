import React, { Suspense, useState, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import styled from 'styled-components';
import * as THREE from 'three';

// Dialogue box for the info, positioned near the marker
const InfoBox = ({ info, position }) => (
  <InfoBoxContainer style={{ left: `${position[0]}px`, top: `${position[1]}px` }}>
    <div className="box-content">
      <h3>{info.title}</h3>
      <p>{info.description}</p>
    </div>
  </InfoBoxContainer>
);

// Styled components for the info box
const InfoBoxContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 15px;
  border-radius: 8px;
  max-width: 300px;
  z-index: 10;
  pointer-events: none; /* Make sure it doesn't block any 3D interactions */
  
  .box-content {
    background-color: #333;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }
  
  h3 {
    font-size: 1.1rem;
    margin: 0;
  }
  
  p {
    font-size: 0.9rem;
  }
`;

const ExhibitWalkthrough = () => {
  const { scene } = useGLTF('/models/scene.gltf'); // Load the 3D model
  const cameraRef = useRef();
  const [info, setInfo] = useState(null); // State to hold information for the overlay
  const [screenPosition, setScreenPosition] = useState([0, 0]); // Store the screen position for the info box

  // Info for the markers
  const infoData = {
    "marker1": {
      title: "Part 1",
      description: "This is the description for painting 1."
    },
    "marker2": {
      title: "Part 2",
      description: "This is the description for painting 2."
    }
  };

  const initialPosition = [0, 2, 10]; // Initial camera position
  const initialLookAt = [0, 0, 0];  // Camera focus point

  // Handle marker click events
  const handleClick = (marker, position) => {
    setInfo({
      ...infoData[marker],
      position: position,
    });
  };

  // Convert 3D world coordinates to 2D screen coordinates
  const toScreenPosition = (position, camera, size) => {
    const vector = new THREE.Vector3(position[0], position[1], position[2]);
    vector.project(camera); // Project to 2D space

    const x = (vector.x * 0.5 + 0.5) * size.width; // Convert to screen coordinates (x)
    const y = (-(vector.y * 0.5 + 0.5)) * size.height; // Convert to screen coordinates (y)

    return [x, y];
  };

  // Function to create a marker for click interaction
  const createMarker = (position, markerName) => (
    <mesh position={position} onClick={() => handleClick(markerName, position)}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="blue" emissive="cyan" emissiveIntensity={0.5} />
    </mesh>
  );

  return (
    <div className="exhibit-container">
      <h2>Explore the Art Exhibit</h2>

      {/* Canvas for the 3D Scene */}
      <Canvas camera={{ position: initialPosition, fov: 60 }} ref={cameraRef}>
        <Suspense fallback={<div>Loading...</div>}>
          <primitive object={scene} scale={1.8} />
          <ambientLight intensity={1.25} />
        <pointLight position={[10, 10, 10]} intensity={1} />
          {/* Add clickable markers to the model */}
          {createMarker([10, 4, 2], 'marker1')}  {/* Example marker1 at position (1,1,0) */}
          {createMarker([-2, 4, 2], 'marker2')} {/* Example marker2 at position (-1,0,2) */}
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

      {/* Render the info box on top of the Canvas, using screen coordinates */}
      {info && (
        <InfoBox
          info={info}
          position={screenPosition} // Position based on screen coordinates
        />
      )}
    </div>
  );
};

export default ExhibitWalkthrough;
