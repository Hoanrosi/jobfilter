import React, { useEffect, useState } from "react";
import "./listItems.scss";
import Item from "./item";
import FilterJob from "./filterJob";

function ListItems({
  listData,
  setListData,
  setDataDetail,
  handleCreate,
  setPageType,
}) {
  const [filters, setFilters] = useState([]);
  const [listDataFilter, setListDataFilter] = useState([]);
  const filteredList = [];
  const handleEvent = (e) => {
    e.preventDefault();
    handleCreate();
  };
  //  ====================== HanleTagClick =======================
  const handleTagClick = (item) => {
    console.log("ajsajhsgahs", item);
    setFilters((prev) => [...prev, item]);
  };
  // ======================= handleDelete ==========================

  const handleDelete = (index) => {
    const newFilters = [...filters];
    newFilters.splice(index, 1);
    setFilters(newFilters);
  };

  //===================== handleDeleteAll ==============================

  const handleDeleteAll = () => {
    setFilters([]);
  };
  //========================= render filterJob========================

  useEffect(() => {
    console.log("listData", listData);
    if (filters.length > 0) {
      const lisDataNew = listData.filter((itemData) => {
        return filters.every((value) => {
          return (
            itemData.role === value ||
            itemData.level === value ||
            itemData.languages.includes(value) ||
            itemData.tools.includes(value)
          );
        });
      });
      console.log(lisDataNew);
      setListDataFilter(lisDataNew);
    } else {
      setListDataFilter(listData);
    }
  }, [filters]);

  // ======================== handleDetail =====================

  const handleDetail = (itemData) => {
    setDataDetail(itemData);
    setPageType("detail");

    console.log("setDataDetail:>>>>", setDataDetail);
  };

  return (
    <div className="wrapper">
      <div className="filterBar">
        <ul>
          {filters.length > 0 &&
            filters.map((filter, index) => (
              <li>
                <FilterJob
                  filter={filter}
                  index={index}
                  handleDelete={handleDelete}
                />
              </li>
            ))}

          <span className="clear-all" onClick={handleDeleteAll}>
            {" "}
            Clear{" "}
          </span>
        </ul>
      </div>

      <div className="list-item">
        <button className="btn-create" onClick={handleEvent}>
          Create
        </button>
        {listDataFilter.map((itemData, index) => {
          return (
            <Item
              itemData={itemData}
              key={itemData.id}
              handleTagClick={handleTagClick}
              handleDetail={handleDetail}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListItems;
