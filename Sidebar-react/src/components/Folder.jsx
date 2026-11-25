import { useState } from "react";

// A text box that saves on Enter or when you click away, and cancels on Escape.
function NameInput({ initialValue = "", label, onSave, onCancel }) {
  const [value, setValue] = useState(initialValue);
  const save = () => (value.trim() ? onSave(value.trim()) : onCancel());

  return (
    <input
      className="inputContainer__input"
      aria-label={label}
      autoFocus
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => {
        e.stopPropagation();
        if (e.key === "Enter") save();
        if (e.key === "Escape") onCancel();
      }}
      onBlur={save}
    />
  );
}

function Folder({ explorer, isRoot, handleInsertNode, handleDeleteNode, handleEditNode }) {
  const [expand, setExpand] = useState(Boolean(isRoot));
  const [newItem, setNewItem] = useState(null); // null, "folder" or "file"
  const [renaming, setRenaming] = useState(false);

  const icon = explorer.isFolder ? "📁" : "📄";

  const startNew = (e, type) => {
    e.stopPropagation();
    setExpand(true);
    setNewItem(type);
  };

  const label = renaming ? (
    <span className="name">
      {icon}{" "}
      <NameInput
        label={`Rename ${explorer.name}`}
        initialValue={explorer.name}
        onSave={(name) => {
          handleEditNode(explorer.id, name);
          setRenaming(false);
        }}
        onCancel={() => setRenaming(false)}
      />
    </span>
  ) : explorer.isFolder ? (
    <button className="name" aria-expanded={expand}>
      {icon} {explorer.name}
    </button>
  ) : (
    <span className="name">
      {icon} {explorer.name}
    </span>
  );

  const buttons = (
    <div className="buttons" onClick={(e) => e.stopPropagation()}>
      {explorer.isFolder && (
        <>
          <button title="New folder" aria-label={`New folder in ${explorer.name}`} onClick={(e) => startNew(e, "folder")}>
            +📁
          </button>
          <button title="New file" aria-label={`New file in ${explorer.name}`} onClick={(e) => startNew(e, "file")}>
            +📄
          </button>
        </>
      )}
      <button title="Rename" aria-label={`Rename ${explorer.name}`} onClick={() => setRenaming(true)}>
        ✏️
      </button>
      {!isRoot && (
        <button
          title="Delete"
          aria-label={`Delete ${explorer.name}`}
          onClick={() => {
            const question = explorer.isFolder
              ? `Delete the folder "${explorer.name}" and everything in it?`
              : `Delete "${explorer.name}"?`;
            if (window.confirm(question)) handleDeleteNode(explorer.id);
          }}
        >
          🗑️
        </button>
      )}
    </div>
  );

  if (!explorer.isFolder) {
    return (
      <div className="file">
        {label}
        {buttons}
      </div>
    );
  }

  return (
    <div>
      <div className="folder" onClick={() => setExpand(!expand)}>
        {label}
        {buttons}
      </div>
      <div className="children" hidden={!expand}>
        {newItem && (
          <div className="inputContainer">
            <span>{newItem === "folder" ? "📁" : "📄"}</span>
            <NameInput
              label={`Name of the new ${newItem}`}
              onSave={(name) => {
                handleInsertNode(explorer.id, name, newItem === "folder");
                setNewItem(null);
              }}
              onCancel={() => setNewItem(null)}
            />
          </div>
        )}
        {explorer.items.map((child) => (
          <Folder
            key={child.id}
            explorer={child}
            handleInsertNode={handleInsertNode}
            handleDeleteNode={handleDeleteNode}
            handleEditNode={handleEditNode}
          />
        ))}
      </div>
    </div>
  );
}

export default Folder;
