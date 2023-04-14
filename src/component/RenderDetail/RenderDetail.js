import React, { useState } from "react";
import JobForm from "../../JobForm/JobForm";

function RenderDetail({
  dataDetail,
  handleBack,
  handleSave,
  listData,
  setListData = () => {},
}) {
  const [detail, setDetail] = useState(dataDetail);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.name === "new" || e.target.name === "featured") {
      setDetail((pre) => ({ ...pre, [name]: !value }));
    } else {
      setDetail((pre) => ({ ...pre, [name]: value }));
    }
  };

  const handleActionSave = () => {
    // find item by id
    const itemIdx = listData.findIndex((item) => item.id === dataDetail.id);
    console.log("itemIdx", itemIdx);
    // update an item in array
    let cloneData = [...listData];
    cloneData[itemIdx] = detail;
    // set new data to list
    setListData(cloneData);
    handleSave();
  };

  return (
    <div>
      <JobForm
        heading="Hiển thị thông tin khóa học"
        value={detail}
        handleChange={handleChange}
        handelEventSubmit={handleActionSave}
        saveBtn="Save"
        backBtn ="Back"
        handleBack={handleBack}
      />
    </div>
  );
}

export default RenderDetail;
