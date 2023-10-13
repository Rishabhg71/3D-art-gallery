import * as THREE from "three";

let sound;
let bufferLoaded = false;

// setup audio for the scene
export const setupAudio = (camera) => {
  const listener = new THREE.AudioListener();
  camera.add(listener);

  sound = new THREE.Audio(listener);

  const audioLoader = new THREE.AudioLoader();
  audioLoader.load("sounds/tiersen.mp3", function (buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    bufferLoaded = true;
  });
};

// play audio
export const startAudio = () => {
  if (sound && bufferLoaded) {
    sound.play();
  }
};

// pause audio
export const stopAudio = () => {
  if (sound) {
    sound.pause();
  }
};
