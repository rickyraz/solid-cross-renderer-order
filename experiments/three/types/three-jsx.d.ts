import type { Element as SolidElement } from "solid-js";
import type { Intersection, Object3D, Vector3 } from "three";

// JSX props derived from three.js classes, matching what three-renderer.js
// actually does with each prop:
// - A property whose current value has a set() method (Vector3, Euler,
//   Color, ...) is set with set(...value) for an array, or set(value) for a
//   single value. So the prop takes set()'s arguments, as a tuple or, when
//   set() takes one argument, that argument alone. Not an instance: the
//   renderer would call position.set(vector), which is wrong.
// - Any other property is assigned as is.
// - `args` are the constructor's parameters. `attach` names the parent
//   property. `ref` receives the renderer's node; `.object` is the instance.
// - Object3D elements take pointer event handlers (three-events.js).

type Fn = (...args: any[]) => any;
export type Constructor = abstract new (...args: any[]) => any;

/** The node the renderer hands to Solid and to refs. */
export interface RendererNode<T = unknown> {
  readonly tag: string;
  readonly object: T;
  readonly parent: RendererNode | undefined;
  readonly children: RendererNode[];
}

/** The event object three-events.js passes to handlers. */
export interface ThreeEvent<E extends Event = PointerEvent> {
  type: string;
  nativeEvent: E;
  pointerId: number;
  object: Object3D | undefined;
  eventObject: Object3D;
  point: Vector3 | undefined;
  distance: number | undefined;
  intersections: Intersection[];
  stopPropagation(): void;
  setPointerCapture(): void;
  releasePointerCapture(): void;
}

export interface EventHandlers {
  onClick?: (event: ThreeEvent<MouseEvent>) => void;
  onPointerDown?: (event: ThreeEvent) => void;
  onPointerUp?: (event: ThreeEvent) => void;
  onPointerMove?: (event: ThreeEvent) => void;
  onPointerOver?: (event: ThreeEvent) => void;
  onPointerOut?: (event: ThreeEvent) => void;
}

type SetArgs<V> = V extends { set: (...args: infer A) => any } ? A : never;
type SingleArg<A> = A extends [infer One] ? One : never;
/** What the renderer accepts for a property whose value has set(). */
export type Settable<V> = SetArgs<V> | SingleArg<SetArgs<V>>;
type PropValue<V> = V extends { set: Fn } ? (V extends { isTexture: true } ? V : Settable<V>) : V;

type DataKeys<T> = { [K in keyof T]-?: T[K] extends Fn ? never : K }[keyof T] & string;
type Reserved = "children" | "parent";

export type ElementProps<C extends Constructor, Child, I = InstanceType<C>> =
  { [K in Exclude<DataKeys<I>, Reserved>]?: PropValue<I[K]> } & {
    args?: ConstructorParameters<C>;
    attach?: string;
    ref?: (node: RendererNode<I>) => void;
    children?: Child;
  } & (I extends Object3D ? EventHandlers : {});

/** One intrinsic element per constructor in a catalogue object. */
export type IntrinsicsOf<Catalogue, Child> = {
  [Tag in keyof Catalogue as Catalogue[Tag] extends Constructor ? Tag : never]:
    Catalogue[Tag] extends Constructor ? ElementProps<Catalogue[Tag], Child> : never;
};

export type ThreeElement = SolidElement | RendererNode | ThreeArrayElement;
export interface ThreeArrayElement extends Array<ThreeElement> {}
