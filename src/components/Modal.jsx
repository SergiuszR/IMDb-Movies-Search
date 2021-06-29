import React from "react";
import "./Modal.scss";
import "./Hero.scss";

function Modal({ trigger, setTrigger, value, setValue }) {
  return trigger ? (
    <div className="modal">
      <input
        type="text"
        placeholder="My Name is..."
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter" && value.length >= 2) {
            setTrigger(false);
          }
        }}
        value={value}
      />
      {value.length >= 2 ? (
        <button onClick={() => setTrigger(false)} className="btn-cta">
          Enter
        </button>
      ) : (
        ""
      )}
    </div>
  ) : (
    ""
  );
}

export default Modal;
