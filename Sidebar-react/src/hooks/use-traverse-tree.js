// Tree updates never change the old tree: they return a new copy, so React re-renders.

export function insertNode(tree, folderId, name, isFolder) {
  if (tree.id === folderId && tree.isFolder) {
    const node = { id: crypto.randomUUID(), name, isFolder, items: [] };
    return { ...tree, items: [node, ...tree.items] };
  }
  return {
    ...tree,
    items: tree.items.map((child) => insertNode(child, folderId, name, isFolder)),
  };
}

export function deleteNode(tree, nodeId) {
  return {
    ...tree,
    items: tree.items
      .filter((child) => child.id !== nodeId)
      .map((child) => deleteNode(child, nodeId)),
  };
}

export function editNode(tree, nodeId, name) {
  if (tree.id === nodeId) {
    return { ...tree, name };
  }
  return { ...tree, items: tree.items.map((child) => editNode(child, nodeId, name)) };
}
