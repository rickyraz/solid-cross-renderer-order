// Every line under @ts-expect-error must be an error. If the types accept one
// of them, tsc fails with "Unused '@ts-expect-error' directive".
import { Vector3 } from "three";

export const cases = [
  // A tag the runtime catalogue does not have.
  // @ts-expect-error
  <sphereGeometry />,

  // A DOM element in a three file: one JSX namespace per file.
  // @ts-expect-error
  <div />,

  // Vector3.set needs three numbers.
  // @ts-expect-error
  <mesh position={[1, 2]} />,

  // A single number: set(1) would leave y and z undefined.
  // @ts-expect-error
  <mesh position={1} />,

  // An instance: the renderer would call position.set(vector).
  // @ts-expect-error
  <mesh position={new Vector3(1, 2, 3)} />,

  // Wrong value types.
  // @ts-expect-error
  <mesh visible="yes" />,
  // @ts-expect-error
  <meshBasicMaterial color={{ r: 1 }} />,
  // @ts-expect-error
  <meshBasicMaterial opacity="0.5" />,

  // Constructor arguments are checked against the constructor.
  // @ts-expect-error
  <boxGeometry args={["1", 2, 3]} />,
  // @ts-expect-error
  <boxGeometry args={[1, 2, 3, 1, 1, 1, 9]} />,

  // Materials are not Object3D, so they take no pointer events.
  // @ts-expect-error
  <meshBasicMaterial onClick={() => {}} />,

  // Unknown props.
  // @ts-expect-error
  <mesh colour="red" />,

  // The ref receives a node whose object is a Mesh, not a Material.
  // @ts-expect-error
  <mesh ref={node => { node.object.wireframe; }} />,

  // Handlers get a three event, not a DOM event.
  // @ts-expect-error
  <mesh onClick={event => event.currentTarget} />,
];
