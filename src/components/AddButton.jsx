import React from "react";
import "./AddButton.scss";

function AddButton() {
  return (
    <div className="addbtn">
      <button onClick={() => console.log("Added!")}>+</button>
    </div>
  );
}

export default AddButton;
