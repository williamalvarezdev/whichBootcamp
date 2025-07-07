import { useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Ball } from "./Ball";
import gsap from "gsap";

function ResponsiveCameraWrapper({ children }) {
  const { viewport, camera } = useThree();

  useEffect(() => {
    camera.position.z = viewport.width < 6 ? 5.5 : viewport.width < 10 ? 4.5 : 3.5;
  }, [viewport.width, camera]);

  return children;
}

export function DialogBox({ updateDialog, selectedBootcamp }) {
  const [isShaking, setIsShaking] = useState(false);
  const [respuesta, setRespuesta] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (loading) return;

    setIsShaking(true);
    setLoading(true);

    gsap.delayedCall(2, () => {
      setIsShaking(false);
      const randomRespuesta = "This is your Bootcamp!";
      setRespuesta(randomRespuesta);
      if (updateDialog) updateDialog(randomRespuesta);
      setLoading(false);
    });
  };

  return (
    <div className="dialog-container" style={{ textAlign: "center" }}>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ResponsiveCameraWrapper>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls enableZoom={false}/>
          <Ball isShaking={isShaking} />
        </ResponsiveCameraWrapper>
      </Canvas>

      <button onClick={handleAsk} disabled={loading} style={{ marginTop: "1rem" }}>
        {loading ? "Let me check with my mates..." : "Ask a question. I am ready!"}
      </button>

      {respuesta && <p style={{ marginTop: "1rem" }}>{respuesta}</p>}
    </div>
  );
}