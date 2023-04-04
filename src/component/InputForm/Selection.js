import React, { useState } from "react";
import data from "../data.json";
import "./selection.scss";

function Selection(props) {
  const onChange = (e) => {
    props.onChange(e, props.fieldName);
  };

  return (
    <div className="title-info">
      <div className="title">
        <label className="lable-title">{props.title}</label>
        {props.inputType === "text" ? (
          <input
            type="text"
            className="text-input"
            value={props.value}
            onChange={onChange}
          />
        ) : (
          <label className="toggle">
            <input 
            type="checkbox" 
            value={props.value} 
            onChange={onChange} />
            <span className="slider"></span>
          </label>
        )}
      </div>
    </div>
  );
}

export default Selection;
