import React from 'react';
import { Engine, Scene, FreeCamera } from 'react-babylonjs';
import { Vector3 } from '@babylonjs/core'

const BabylonScene = () => {
  const onSceneReady = (scene) => {
    // Create a camera and position it
    const camera = new FreeCamera('camera', new Vector3(0, 0, -10), scene);

    // Set the target of the camera
    camera.setTarget(Vector3.Zero());

    // Attach the camera to the canvas
    camera.attachControl(scene.getEngine().getRenderingCanvas(), true);
  };

  const onRender = (scene) => {
    // Animation and rendering logic goes here
  };

  return (
    <Engine antialias adaptToDeviceRatio canvasId="sample-canvas">
      <Scene onSceneReady={onSceneReady} onRender={onRender} />
    </Engine>
  );
};

export default BabylonScene;
