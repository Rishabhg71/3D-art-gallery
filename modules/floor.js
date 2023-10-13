import * as THREE from "three";
import floortTexture from "../public/WoodFlooringAshSuperWhite001/WoodFlooringAshSuperWhite001_COL_2K.jpg";

export const setupFloor = (scene) => {
  const textureLoader = new THREE.TextureLoader();

  // Load the textures
  const colorTexture = textureLoader.load(
    "WoodFlooringAshSuperWhite001/WoodFlooringAshSuperWhite001_COL_2K.jpg"
  );
  const displacementTexture = textureLoader.load(
    "WoodFlooringAshSuperWhite001/WoodFlooringAshSuperWhite001_DISP_2K.jpg"
  );
  const normalTexture = textureLoader.load(
    "WoodFlooringAshSuperWhite001/WoodFlooringAshSuperWhite001_NRM_2K.png"
  );
  const roughnessTexture = textureLoader.load(
    "WoodFlooringAshSuperWhite001/WoodFlooringAshSuperWhite001_GLOSS_2K.jpg"
  );
  const aoTexture = textureLoader.load(
    "WoodFlooringAshSuperWhite001/WoodFlooringAshSuperWhite001_AO_2K.jpg"
  );

  // Set texture parameters
  colorTexture.wrapS = colorTexture.wrapT = THREE.RepeatWrapping;
  displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;
  normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;
  aoTexture.wrapS = aoTexture.wrapT = THREE.RepeatWrapping;

  const planeGeometry = new THREE.PlaneGeometry(45, 45);
  const planeMaterial = new THREE.MeshStandardMaterial({
    map: colorTexture,
    displacementMap: displacementTexture,
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    aoMap: aoTexture,
    displacementScale: 0.1,
    side: THREE.DoubleSide,
  });

  const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);

  floorPlane.rotation.x = Math.PI / 2;
  floorPlane.position.y = -Math.PI;

  scene.add(floorPlane);
};
