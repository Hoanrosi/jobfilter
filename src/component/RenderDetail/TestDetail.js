
import React , {useState}from "react";
import JobForm from "../../JobForm/JobForm";
import "./testDetail.scss"

function TestDetail(
    {
  dataDetail,
  handleBack,
  handleSave,
  listData,
  setListData = () => {},
    }
) {

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
        <div>
            <JobForm 
                heading ="Hiển thị thông tin khóa học"
                value ={detail}
                handleChange ={handleChange}

            />
            <div className="btn">
            <button className="btn-submit" onClick={handleBack}>
              Back
            </button>
            <button className="btn-save" onClick={handleActionSave}>
              Save
            </button>
          </div>
        </div>
      )

}

export default TestDetail;
