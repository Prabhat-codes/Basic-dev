import { useState } from "react";
import "./styles.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode, deleteNode, editNode } = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  const handleDeleteNode = (folderId, item, isFolder) => {
    const finalTree = deleteNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  const handleEditNode = (folderId, item, isFolder) => {
    const finalTree = editNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  return (
    <div className="App">
      <Folder
        explorer={explorerData}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleEditNode={handleEditNode}
      />
    </div>
  );
}
