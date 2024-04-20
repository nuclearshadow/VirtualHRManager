/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public\models\6623fec98be5a696276d9d37.glb -o src\Components\Avatar.js -r public --keepnames 
*/

import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'

export function Avatar({animation, ...props}) {
  const { nodes, materials } = useGLTF('/models/6623fec98be5a696276d9d37.glb');
  const group = useRef();

  // const { animations: idleAnimation } = useFBX('/animations/Idle.fbx');
  // const { animations: talkingAnimation } = useFBX('/animations/Talking.fbx');

  // idleAnimation[0].name = "Idle";
  // talkingAnimation[0].name = "Talking";

  // const { actions } = useAnimations([idleAnimation[0], talkingAnimation[0]], group);

  // useEffect(() => {
  //   actions[animation].reset().fadeIn(0.5).play();
  // }, [animation])
  
  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} 
      morphTargetDictionary={nodes.Wolf3D_Hair.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Hair.morphTargetInfluences}
      />
      <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} 
      morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}
      />
      <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} 
      morphTargetDictionary={nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences}
      />
      <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} 
      morphTargetDictionary={nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences}
      />
      <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} 
      morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
      />
      <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} 
      morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
      morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} 
      morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
      morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} 
      morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} 
      morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh name="Wolf3D_Beard" geometry={nodes.Wolf3D_Beard.geometry} material={materials.Wolf3D_Beard} skeleton={nodes.Wolf3D_Beard.skeleton} 
      morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
      />
    </group>
  )
}

useGLTF.preload('/models/6623fec98be5a696276d9d37.glb')
