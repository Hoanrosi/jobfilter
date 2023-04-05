import React from "react";
import "./section.scss";

function Section(props) {
  console.log("props.value :>> ", props.value);
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
          <label className={`toggle ${props.value ? "active" : ""}`}>
            {console.log("props.value", props.value, typeof props.value)}
            <input
              type="checkbox"
              checked={props.value}
              onChange={(e) => {
                props.onChange(e);
                console.log("abc");
              }}
              name={props.fileName}
            />
            <span className="slider"></span>
          </label>
        )}
      </div>
    </div>
  );
}

export default Section;
