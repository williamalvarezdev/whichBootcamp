import { useRef, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export function Ball({ isShaking }) {
  const ballRef = useRef();
  const { viewport } = useThree();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const responsiveScale = Math.min(Math.max(viewport.width / 10, 0.4), 1);
    setScale(responsiveScale);
  }, [viewport.width]);  


  useFrame(() => {
    if (ballRef.current) {
      if (isShaking) {
        ballRef.current.rotation.x += 0.05;
        ballRef.current.rotation.y += 0.1;
      } else {
        ballRef.current.rotation.y += 0.005;
      }
    }
  });

  //BLACK BALL
  return (
    <group ref={ballRef} scale={scale}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="black" />
      </mesh>

      <mesh position={[0, 0, 0.99]}>
        <circleGeometry args={[0.4, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

      <Text
        font="/fonts/PressStart2P-Regular.ttf"
        fontSize={0.2}
        position={[0, 0, 1.01]}
        rotation={[0, 0, 0]}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        8
      </Text>
    </group>
  );
}
