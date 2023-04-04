import React, { useState } from "react";
import "./item.scss";
import RenderDetail from "../RenderDetail/RenderDetail";

function Item(props) {
  const { itemData, handleTagClick, filteredList, handleDetail } = props;

  // const itemArray = [...itemData.languages, ...itemData.tools];
  const itemArray = [itemData.role,itemData.level,...itemData.languages, ...itemData.tools];
  

  return (
    <div
      className="item"
      onClick={() => {
        handleDetail(itemData);
      }}
    >
      <div className="item-left">
        <div className="logo">
          <img src={itemData.logo} />
        </div>
        <div className="information">
          <div className="info-heading">
            <div className="name-company">{itemData.company}</div>
            {itemData.new ? <div className="node-new">New!</div> : ""}
            {itemData.featured ? (
              <div className="node-feature">Featured</div>
            ) : (
              ""
            )}
          </div>
          <div className="position">{itemData.position}</div>
          <div className="description">
            <div className="desc-info">{itemData.postedAt}</div>
            <span className="stack"> . </span>
            <div className="desc-info">{itemData.contract}</div>
            <span className="stack"> . </span>
            <div className="desc-info">{itemData.location}</div>
          </div>
        </div>
      </div>
      <div className="item-right">
        {itemArray.map((item, index) => {
          return item ? (
            <div
              className="node-data"
              key={index}
              onClick={(e) => {
                // e.preventDefault();
                e.stopPropagation();
                props.handleTagClick(item);
              }}
            >
              {" "}
              {item}{" "}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default Item;
