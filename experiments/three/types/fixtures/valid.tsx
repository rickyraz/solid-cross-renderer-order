// Must type-check with no errors: typical scene code against the catalogue types.
import { createSignal, For, Loading, Show, type Component } from "solid-js";
import type { Mesh, Texture } from "three";
import type { RendererNode } from "../three-jsx.js";

const [x, setX] = createSignal(0);
const [color] = createSignal("#e4572e");
declare const texture: () => Texture;

// A component returning a three element fits Solid's Component type.
const Box: Component<{ id: string; x: number }> = props => {
  let node: RendererNode<Mesh> | undefined;
  return <mesh
    name={props.id}
    position={[props.x, 0, 0]}            // Vector3.set(x, y, z) as a tuple
    rotation={[0.5, 0.6, 0, "XYZ"]}       // Euler.set(x, y, z, order)
    scale={[0.5, 0.5, 0.5]}
    visible={true}
    renderOrder={2}
    userData={{ id: props.id }}
    ref={n => { node = n; n.object.geometry; }}  // n.object is a Mesh
    onClick={event => { event.stopPropagation(); event.nativeEvent.button; }}
    onPointerMove={event => { event.eventObject.rotation.y += 0.01; }}
  >
    <boxGeometry args={[1, 2, 3]} />
    <meshBasicMaterial color={color()} wireframe={false} opacity={0.5} transparent>
      <dataTexture args={[new Uint8Array(16), 2, 2]} needsUpdate={true} />
    </meshBasicMaterial>
  </mesh>;
};

export const scene = <scene>
  <group name="world" position={[0, x(), 0]} onClick={() => setX(1)}>
    <For each={["A", "B"]}>{id => <Box id={id} x={0} />}</For>
    <Show when={x() > 0}>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color={0xffffff} />                {/* Color.set(number) */}
      </mesh>
    </Show>
    <Loading fallback={<mesh name="loading" />}>
      <mesh>
        <meshBasicMaterial map={texture()} color={[1, 0.5, 0]} />  {/* Color.set(r, g, b) */}
      </mesh>
    </Loading>
    <meshBasicMaterial attach="material" />
  </group>
</scene>;
