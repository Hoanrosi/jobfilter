import React, { useEffect, useState } from "react";
import "../InputForm/InputForm.scss";
import "../InputForm/selection.scss";

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
    console.log(e.target.name);
    console.log(e.target.value);
    setDetail((pre) => ({ ...pre, [name]: value }));
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
    <div className="wrapper" style={{ height: "100vh" }}>
      <div className="inputForm">
        <div className=" heading">Hiển thị thông tin khóa học</div>

        <div className="information-form">
          <div className="title-info">
            <div className="title">
              <label className="lable-title">id</label>
              <input
                className="text-input"
                name="id"
                value={detail?.id}
                onChange={handleChange}
              />
            </div>
            <div className="title">
              <label className="lable-title">company</label>
              <input
                className="text-input"
                name="company"
                value={detail?.company}
                onChange={handleChange}
              />
            </div>
            <div className="title">
              <label className="lable-title">logo</label>
              <input
                className="text-input"
                name="logo"
                value={detail?.logo}
                onChange={handleChange}
              />
            </div>
            <div className="title">
              <label className="lable-title"> new </label>
              <input
                className="text-input"
                value={detail?.new}
                name="new"
                onChange={handleChange}
              />
            </div>
            <div className="title">
              <label className="lable-title">featured</label>
              <input
                className="text-input"
                value={detail?.featured}
                name="featured"
                onChange={handleChange}
              />
            </div>
            <div className="title">
              <label className="lable-title">position</label>
              <input
                className="text-input"
                value={detail?.position}
                name="position"
                onChange={handleChange}
              />
            </div>
            <div className="title">
              <label className="lable-title">role</label>
              <input
                className="text-input"
                value={detail?.role}
                name="role"
                onChange={handleChange}
              />
            </div>
            <div className="title">
              <label className="lable-title">level</label>
              <input
                className="text-input"
                value={detail?.level}
                name="level"
                onChange={handleChange}
              />
            </div>
            <div className="title">
              <label className="lable-title">postedAt</label>
              <input
                className="text-input"
                value={detail?.postedAt}
                name="postedAt"
                onChange={handleChange}
              />
            </div>
            <div className="title">
              <label className="lable-title">contract</label>
              <input
                className="text-input"
                value={detail?.contract}
                name="contract"
                onChange={handleChange}
              />
            </div>
            <div className="title">
              <label className="lable-title">location</label>
              <input
                className="text-input"
                value={detail?.location}
                name="location"
                onChange={handleChange}
              />
            </div>
            <div className="title">
              <label className="lable-title">languages</label>
              <input
                className="text-input"
                value={detail?.languages}
                name="languages"
                onChange={handleChange}
              />
            </div>
            <div className="title">
              <label className="lable-title">tools</label>
              <input
                className="text-input"
                value={detail?.tools}
                name="tools"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="btn">
            <button className="btn-submit" onClick={handleBack}>
              Back
            </button>
            <button className="btn-save" onClick={handleActionSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderDetail;
