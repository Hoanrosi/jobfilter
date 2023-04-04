import React, { useState } from "react";
import "./InputForm.scss";
import Selection from "./Selection";

function InputForm({ handleSubmit, setListData }) {
  const [inputForm, setInputForm] = useState({
    id: "",
    company: "",
    logo: "",
    new: false,
    featured: false,
    position: "",
    role: "",
    level: "",
    postedAt: "",
    contract: "",
    location: "",
    languages: "",
    tools: "",
  });
  const handleChange = (e, fieldName) => {
    if (fieldName != "new" && fieldName != "featured") {
      setInputForm({
        ...inputForm,
        [fieldName]: e.target.value,
      });
    } else {
      setInputForm({
        ...inputForm,
        [fieldName]: !inputForm[fieldName],
      });
    }
  };

  const handelEventSubmit = () => {
    setListData((prev) => [
      {
        ...inputForm,
        role: [inputForm.role],
        level: [inputForm.level],
        languages: [inputForm.languages], // vì cái này đang là mảng
        tools: [inputForm.tools],
      },
      ...prev
     
    ]);
    handleSubmit();
  };

  return (
    <div className="wrapper" style={{ height: "100vh" }}>
      <div className="inputForm">
        <div className=" heading">Vui lòng nhập thông tin khóa học</div>

        <div className="information-form">
          <Selection
            title="id"
            inputType="text"
            value={inputForm.id}
            onChange={handleChange}
            fieldName="id"
          />
          <Selection
            title="company"
            inputType="text"
            value={inputForm.company}
            onChange={handleChange}
            fieldName="company"
          />
          <Selection
            title="logo"
            inputType="text"
            value={inputForm.logo}
            onChange={handleChange}
            fieldName="logo"
          />
          <Selection
            title="new"
            inputType="checkbox"
            className="toggle"
            value={inputForm.new}
            onChange={handleChange}
            fieldName="new"
          />
          <Selection
            title="featured"
            inputType="checkbox"
            className="toggle"
            value={inputForm.featured}
            onChange={handleChange}
            fieldName="featured"
          />
          <Selection
            title="position"
            inputType="text"
            value={inputForm.position}
            onChange={handleChange}
            fieldName="position"
          />
          <Selection
            title="role"
            inputType="text"
            value={inputForm.role}
            onChange={handleChange}
            fieldName="role"
          />
          <Selection
            title="level"
            inputType="text"
            value={inputForm.level}
            onChange={handleChange}
            fieldName="level"
          />
          <Selection
            title="postedAt"
            inputType="text"
            value={inputForm.postedAt}
            onChange={handleChange}
            fieldName="postedAt"
          />
          <Selection
            title="contract"
            inputType="text"
            value={inputForm.contract}
            onChange={handleChange}
            fieldName="contract"
          />
          <Selection
            title="location"
            inputType="text"
            value={inputForm.location}
            onChange={handleChange}
            fieldName="location"
          />
          <Selection
            title="languages"
            inputType="text"
            value={inputForm.languages}
            onChange={handleChange}
            fieldName="languages"
          />
          <Selection
            title="tools"
            inputType="text"
            value={inputForm.tools}
            onChange={handleChange}
            fieldName="tools"
          />
        </div>
        <button className="btn-submit" onClick={handelEventSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default InputForm;
