import React from "react";
import "./Input.scss";

function Input({ query, triggerQuery, keyPress }) {
  return (
    <div className="search-form">
      <input
        className="input"
        type="text"
        value={query}
        onChange={(e) => triggerQuery(e.target.value)}
        onKeyPress={keyPress}
        placeholder="Search for..."
      />
    </div>
  );
}

export default Input;
