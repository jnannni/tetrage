import { useEffect, useRef } from "react";
import { startGame } from "../game/index";

const GameCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      startGame(canvasRef.current);
    }
  }, []);

  return <canvas ref={canvasRef} id="canvas"></canvas>;
};

export default GameCanvas;
