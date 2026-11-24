import { BoxGeometry, DataTexture, Group, Mesh, MeshBasicMaterial, Scene } from "three";

// The three.js classes the renderer can create, by JSX tag. The renderer reads
// this object at runtime, and types/jsx-runtime.d.ts reads its type, so a tag
// exists in the types exactly when it exists at runtime.
export const catalogue = {
  scene: Scene,
  group: Group,
  mesh: Mesh,
  boxGeometry: BoxGeometry,
  meshBasicMaterial: MeshBasicMaterial,
  dataTexture: DataTexture
};
