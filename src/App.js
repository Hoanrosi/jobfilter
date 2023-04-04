import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./component/Layout/layout";
import ListItems from "./component/listCourse/listItems";
import InputForm from "./component/InputForm/InputForm";
import RenderDetail from "./component/RenderDetail/RenderDetail";
import data from "../src/component/data.json";
import Test from "./component/InputForm/Test";
import TestDetail from "./component/RenderDetail/TestDetail";
function App() {
  const [isCreated, setIsCreated] = useState(false);
  const [listData, setListData] = useState(data);
  const [dataDetail, setDataDetail] = useState(null);
  const [detail, setDetail] = useState(null);
  const handleCreate = () => {
    setIsCreated(true);
  };

  const handleSubmit = () => {
    setIsCreated(false);
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
          <TestDetail
            dataDetail={dataDetail}
            handleBack={handleBack}
            handleSave={handleSave}
            listData={listData}
            setListData={setListData}
          />
        </Layout>
      ) : (
        <Layout>
          <Test handleSubmit={handleSubmit} setListData={setListData} />
        </Layout>
      )}
    </div>
  );
}

export default App;
