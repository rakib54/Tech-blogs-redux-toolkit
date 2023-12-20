import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByDefault,
  filterBySaved,
  filterByNewest,
  filterByMostLiked,
} from "../../features/filter/filterBlogSlice";

export default function Sidebar() {
  const [selectValue, setSelectValue] = useState("default");

  const dispatch = useDispatch();

  const handleCheckedValue = (value) => {
    dispatch(filterBySaved(value));
  };

  const handleSelect = (e) => {
    setSelectValue(e.target.value);
    // if (selectValue === "default") {
    //   dispatch(filterByDefault());
    // }
    // if (selectValue === "newest") {
    //   dispatch(filterByNewest());
    // }
    // if (selectValue === "most_liked") {
    //   dispatch(filterByMostLiked());
    // }
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            value={selectValue}
            onChange={(e) => handleSelect(e)}
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
          >
            <option value="default">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                defaultChecked
                className="radio"
                onChange={() => handleCheckedValue(false)}
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                className="radio"
                onChange={() => handleCheckedValue(true)}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
