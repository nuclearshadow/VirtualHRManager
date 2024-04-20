import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Avatar } from './Avatar';
import { Environment } from '@react-three/drei';

function AvatarDisplay() {
    return (
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
            <color attach="background" args={["#ececec"]} />
            <Avatar />
            <Environment preset="sunset" />
        </Canvas>
    );
}

export default AvatarDisplay;
