import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./component/Layout/layout";
import ListItems from "./component/listCourse/listItems";
import InputForm from "./component/InputForm/InputForm";
import RenderDetail from "./component/RenderDetail/RenderDetail";
import data from "../src/component/data.json";
function App() {
  const [isCreated, setIsCreated] = useState(false);
  const [listData, setListData] = useState(data);
  const [dataDetail, setDataDetail] = useState(null);
  const [detail, setDetail] = useState(null);
  const [pageType, setPageType] = useState("listItem");
  const handleCreate = () => {
    setIsCreated(true);
    setPageType("create");
  };

  const handleSubmit = () => {
    setIsCreated(false);
    setPageType("edit");
  };
  //====================== handleBack ================
  const handleBack = () => {
    setIsCreated(false);
    setDataDetail(null);
  };

  // ======================= handleSave =============
  const handleSave = () => {
    setIsCreated(false);
    setDataDetail(null);
  };

  //============= Render PageType =================

  return (
    <div className="App">
      {!isCreated && !dataDetail ? (
        <Layout>
          <ListItems
            listData={listData}
            handleCreate={handleCreate}
            setListData={setListData}
            setDataDetail={setDataDetail}
          />
        </Layout>
      ) : dataDetail ? (
        <Layout>
          <RenderDetail
            dataDetail={dataDetail}
            handleBack={handleBack}
            handleSave={handleSave}
            listData={listData}
            setListData={setListData}
          />
        </Layout>
      ) : (
        <Layout>
          <InputForm handleSubmit={handleSubmit} setListData={setListData} />
        </Layout>
      )}
    </div>
  );
}

export default App;
