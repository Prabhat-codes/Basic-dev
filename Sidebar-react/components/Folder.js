import { useState } from "react";
import useTraverseTree from "../hooks/use-traverse-tree";

function Folder({
  explorer,
  handleInsertNode,
  handleDeleteNode,
  handleEditNode,
}) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const handleNew = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };
  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div
          className="folder"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <span>📁 {explorer.name}</span>
          <div className="buttons">
            <button onClick={(e) => handleNew(e, true)}>New 📁</button>
            <button onClick={(e) => handleNew(e, false)}>New 📄</button>
          </div>
        </div>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                className="inputContainer__input"
                autoFocus
                onKeyDown={(e) => onAddFolder(e)}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorer.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}
                handleEditNode={handleEditNode}
                explorer={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
}
export default Folder;
