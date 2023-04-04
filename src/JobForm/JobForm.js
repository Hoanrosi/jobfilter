import React, { useState } from "react";
import "./jobForm.scss";
import Section from "./Section";

function JobForm(props) {
  return (
    <div className="wrapper" style={{ height: "100vh" }}>
      <div className="inputForm">
        <div className="heading">{props.heading}</div>
        <div className="information-form">
          <Section
            title="id"
            inputType="text"
            value={props.value.id}
            // onChange = {props.handleChange}
            onChange={(e) => props.handleChange(e, "id")}
            fileName="id"
          />
          <Section
            title="company"
            inputType="text"
            value={props.value.company}
            // onChange = {props.handleChange}
            onChange={(e) => props.handleChange(e, "company")}
            fileName="company"
          />
          <Section
            title="logo"
            inputType="text"
            value={props.value.logo}
            // onChange = {props.handleChange}
            onChange={(e) => props.handleChange(e, "logo")}
            fileName="logo"
          />
          <Section
            title="new"
            inputType="checkbox"
            value={props.value.new}
            // onChange = {props.handleChange}
            onChange={(e) => props.handleChange(e, "new")}
            fileName="new"
          />
          <Section
            title="featured"
            inputType="checkbox"
            value={props.value.featured}
            // onChange = {props.handleChange}
            onChange={(e) => props.handleChange(e, "featured")}
            fileName="featured"
          />
          <Section
            title="position"
            inputType="text"
            value={props.value.position}
            // onChange = {props.handleChange}
            onChange={(e) => props.handleChange(e, "position")}
            fileName="position"
          />
          <Section
            title="role"
            inputType="text"
            value={props.value.role}
            // onChange = {props.handleChange}
            onChange={(e) => props.handleChange(e, "role")}
            fileName="role"
          />
          <Section
            title="level"
            inputType="text"
            value={props.value.level}
            // onChange = {props.handleChange}
            onChange={(e) => props.handleChange(e, "level")}
            fileName="level"
          />
          <Section
            title="postedAt"
            inputType="text"
            value={props.value.postedAt}
            // onChange = {props.handleChange}
            onChange={(e) => props.handleChange(e, "postedAt")}
            fileName="postedAt"
          />
          <Section
            title="contract"
            inputType="text"
            value={props.value.contract}
            // onChange = {props.handleChange}
            onChange={(e) => props.handleChange(e, "contract")}
            fileName="contract"
          />
          <Section
            title="location"
            inputType="text"
            value={props.value.location}
            // onChange = {props.handleChange}
            onChange={(e) => props.handleChange(e, "location")}
            fileName="location"
          />
          <Section
            title="languages"
            inputType="text"
            value={props.value.languages}
            // onChange = {props.handleChange}
            onChange={(e) => props.handleChange(e, "languages")}
            fileName="languages"
          />

          <Section
            title="tools"
            inputType="text"
            value={props.value.tools}
            // onChange = {props.handleChange}
            onChange={(e) => props.handleChange(e, "tools")}
            fileName="tools"
          />
        </div>
      </div>
    </div>
  );
}

export default JobForm;
