// Solid calls this once when it creates the keyed slot for A or B.
export function mountLabel(slot, label, overlay) {
  overlay.append(label);
  slot.label = label;
}
