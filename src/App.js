import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./component/Layout/layout";
import ListItems from "./component/listCourse/listItems";
import InputForm from "./component/InputForm/InputForm";
import RenderDetail from "./component/RenderDetail/RenderDetail";
import data from "../src/component/data.json";
import { PAGE_TYPE } from "./variables/common";

function App() {
  const [listData, setListData] = useState(data);
  const [dataDetail, setDataDetail] = useState(null);
  const [pageType, setPageType] = useState(PAGE_TYPE.LIST);

  const handleCreate = () => {
    setPageType("create");
  };

  const handleBack = () => {
    setDataDetail(null);
    setPageType("listItem"); // Quay lại trang danh sách
  };

  const handleSave = () => {
    setDataDetail(null);
    setPageType("listItem"); // Quay lại trang danh sách
  };

  let content;
  switch (pageType) {
    case PAGE_TYPE.LIST:
      content = (
        <Layout>
          <ListItems
            listData={listData}
            handleCreate={handleCreate}
            setListData={setListData}
            setDataDetail={setDataDetail}
            setPageType={setPageType}
          />
        </Layout>
      );
      break;
    case "detail":
      content = (
        <Layout>
          <RenderDetail
            dataDetail={dataDetail}
            handleBack={handleBack}
            handleSave={handleSave}
            listData={listData}
            setListData={setListData}
          />
        </Layout>
      );
      break;
    case "create":
      content = (
        <Layout>
          <InputForm setListData={setListData} handleSave={handleSave} />
        </Layout>
      );
      break;
    default:
      content = null;
  }

  return <div className="App">{content}</div>;
}

export default App;
