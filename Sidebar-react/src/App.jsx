import { useState } from "react";
import "./styles.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import { insertNode, deleteNode, editNode } from "./hooks/use-traverse-tree";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const handleInsertNode = (folderId, name, isFolder) =>
    setExplorerData((tree) => insertNode(tree, folderId, name, isFolder));
  const handleDeleteNode = (nodeId) => setExplorerData((tree) => deleteNode(tree, nodeId));
  const handleEditNode = (nodeId, name) => setExplorerData((tree) => editNode(tree, nodeId, name));

  return (
    <div className="App">
      <a className="home" href="../index.html">&larr; All apps</a>
      <h1>Sidebar</h1>
      <p>A file explorer like the one in VS Code. Changes last until you refresh the page.</p>
      <Folder
        explorer={explorerData}
        isRoot
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleEditNode={handleEditNode}
      />
    </div>
  );
}
