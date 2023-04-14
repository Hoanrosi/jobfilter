import React, { useState } from "react";
import JobForm from "../../JobForm/JobForm";

function InputForm({ handleSubmit, setListData, handleSave }) {
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
  // =============== handleEventSubmit ====================
  const handelEventSubmit = () => {
    setListData((prev) => [
      {
        ...inputForm,
        languages: [inputForm.languages], // vì cái này đang là mảng
        tools: [inputForm.tools],
      },
      ...prev,
    ]);
    // handleSubmit();
    handleSave();
  };

  return (
    <div className="test-form">
      <JobForm
        heading="Vui lòng nhập thông tin khóa học"
        value={inputForm}
        handleChange={handleChange}
        saveBtn="Save"
        handelEventSubmit={handelEventSubmit}
      />
    </div>
  );
}

export default InputForm;
