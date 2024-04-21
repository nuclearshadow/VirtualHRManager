import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Avatar } from './Avatar';
import { Environment, OrbitControls } from '@react-three/drei';

function AvatarDisplay({ isTalking }) {
    return (
        <Canvas shadows camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 0] }} style={{ height: '100%' }} fallback={null}>
            {/* <color attach="background" args={["#ececec"]} /> */}
            <Avatar isTalking={isTalking} position={[0, -1.7, -.5]} />
            <Environment preset="sunset" />
        </Canvas>
    );
}

export default AvatarDisplay;
