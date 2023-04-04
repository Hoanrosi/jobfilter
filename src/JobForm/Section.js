import React from "react";
import "./section.scss";

function Section(props) {
  console.log(props);
  return (
    <div className="title-info">
      <div className="title">
        <label className="lable-title">{props.title} </label>
        {props.inputType === "text" ? (
          <input
            type="text"
            className="text-input"
            name={props.fileName}
            value={props.value}
            onChange={props.onChange}
          />
        ) : (
          <lable className="toggle">
            <input
              type="checkbox"
              value={props.value}
              onChange={props.onChange}
              name={props.fileName}
            />
            <span className="slider"></span>
          </lable>
        )}
      </div>
    </div>
  );
}

export default Section;
