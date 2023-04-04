import React, { useState } from "react";
import Header from "./header/header";
import Container from "./container/container";
import ListItems from "../listCourse/listItems";
import InputForm from "../InputForm/InputForm";
import FilterJob from "../filterJob/FilterJob";
import data from "../data.json";
function Layout({children,...props}) {
  return (
    <div className="container">
    <Header />
    <div>{children}</div>
   </div>);
}

export default Layout;
