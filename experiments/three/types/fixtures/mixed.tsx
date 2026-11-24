/** @jsxImportSource three-jsx-mixed */
// DOM and three elements in one file, with the merged namespace.
export const view = <div class="stage">
  <canvas width={800} height={360} />
  <label data-id="A">Label A</label>
</div>;

export const scene = <mesh position={[0, 1, 0]}>
  <boxGeometry args={[1, 1, 1]} />
  <meshBasicMaterial color="#ffffff" />
</mesh>;

// Both still check their own props.
// @ts-expect-error
export const badDom = <canvas width={{}} />;
// @ts-expect-error
export const badThree = <mesh position={[1, 2]} />;

// What one namespace cannot express: which renderer owns which tag. A DOM
// element inside a mesh type-checks, though it fails at runtime.
export const wrongNesting = <mesh><div /></mesh>;
