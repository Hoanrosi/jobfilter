import React, { useState } from "react";
import "./jobForm.scss";
import Section from "./Section";

function JobForm(props) {
  const { backBtn, saveBtn } = props;
  console.log("props :>> ", props);
  return (
    <div className="wrapper" style={{ height: "100vh" }}>
      <div className="inputForm">
        <div className="heading">{props.heading}</div>
        <div className="information-form">
          <Section
            title="id"
            inputType="text"
            value={props.value.id}
            onChange={(e) => props.handleChange(e, "id")}
            fileName="id"
          />
          <Section
            title="company"
            inputType="text"
            value={props.value.company}
            onChange={(e) => props.handleChange(e, "company")}
            fileName="company"
          />
          <Section
            title="logo"
            inputType="text"
            value={props.value.logo}
            onChange={(e) => props.handleChange(e, "logo")}
            fileName="logo"
          />
          <Section
            title="new"
            inputType="checkbox"
            value={props.value.new}
            onChange={(e) => props.handleChange(e, "new")}
            fileName="new"
          />
          <Section
            title="featured"
            inputType="checkbox"
            value={props.value.featured}
            onChange={(e) => props.handleChange(e, "featured")}
            fileName="featured"
          />
          <Section
            title="position"
            inputType="text"
            value={props.value.position}
            onChange={(e) => props.handleChange(e, "position")}
            fileName="position"
          />
          <Section
            title="role"
            inputType="text"
            value={props.value.role}
            onChange={(e) => props.handleChange(e, "role")}
            fileName="role"
          />
          <Section
            title="level"
            inputType="text"
            value={props.value.level}
            onChange={(e) => props.handleChange(e, "level")}
            fileName="level"
          />
          <Section
            title="postedAt"
            inputType="text"
            value={props.value.postedAt}
            onChange={(e) => props.handleChange(e, "postedAt")}
            fileName="postedAt"
          />
          <Section
            title="contract"
            inputType="text"
            value={props.value.contract}
            onChange={(e) => props.handleChange(e, "contract")}
            fileName="contract"
          />
          <Section
            title="location"
            inputType="text"
            value={props.value.location}
            onChange={(e) => props.handleChange(e, "location")}
            fileName="location"
          />
          <Section
            title="languages"
            inputType="text"
            value={props.value.languages}
            onChange={(e) => props.handleChange(e, "languages")}
            fileName="languages"
          />

          <Section
            title="tools"
            inputType="text"
            value={props.value.tools}
            onChange={(e) => props.handleChange(e, "tools")}
            fileName="tools"
          />
        </div>
        <div className="btn">
          {backBtn && (
            <button className="btn-submit" onClick={props.handleBack}>
              {backBtn}
            </button>
          )}
          {saveBtn && (
            <button className="btn-save" onClick={props.handelEventSubmit}>
              {saveBtn}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobForm;
