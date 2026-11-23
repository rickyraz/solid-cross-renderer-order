import { mountLabel } from "./mount-only.js";

export function mountAndMoveLabel(slot, label, overlay) {
  mountLabel(slot, label, overlay);

  // After a slot moves, place its label before the next label in the same overlay.
  slot.afterInsert = followingSlots => {
    const nextSlot = followingSlots.find(node => node.label?.parentNode === overlay);
    overlay.insertBefore(label, nextSlot?.label ?? null);
  };
}
