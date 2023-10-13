import * as THREE from "three";

export function createWalls(scene, textureLoader) {
  let wallGroup = new THREE.Group();
  scene.add(wallGroup);

  const colorTexture = textureLoader.load(
    "Leather035D/Leather035D_2K-PNG_Color.png"
  );
  const normalTexture = textureLoader.load(
    "Leather035D/Leather035D_2K-PNG_Roughness.png"
  );
  const roughnessTexture = textureLoader.load(
    "Leather035D/Leather035D_2K-PNG_Roughness.png"
  );

  normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;

  const wallMaterial = new THREE.MeshStandardMaterial({
    map: colorTexture,

    roughnessMap: roughnessTexture,
    side: THREE.DoubleSide,
  });

  const frontWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001),
    wallMaterial
  );

  frontWall.position.z = -20;

  const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001),
    wallMaterial
  );

  leftWall.rotation.y = Math.PI / 2;
  leftWall.position.x = -20;

  const rightWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001),
    wallMaterial
  );

  rightWall.position.x = 20;
  rightWall.rotation.y = Math.PI / 2;

  // Back Wall
  const backWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001),
    wallMaterial
  );
  backWall.position.z = 20;

  wallGroup.add(frontWall, backWall, leftWall, rightWall);

  return wallGroup;
}
