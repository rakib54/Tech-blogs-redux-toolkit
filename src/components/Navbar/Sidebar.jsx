import { useDispatch, useSelector } from "react-redux";
import {
  filterByStatus,
  sortByStatus,
} from "../../features/filter/filterBlogSlice";

export default function Sidebar() {
  const { filterStatus } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const handleStatus = (value) => {
    dispatch(filterByStatus(value));
  };
  const handleSortStatus = (e) => {
    dispatch(sortByStatus(e.target.value));
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            onChange={(e) => handleSortStatus(e)}
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
                className="radio"
                onChange={() => handleStatus("All")}
                checked={filterStatus === "All"}
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                className="radio"
                onChange={() => handleStatus("saved")}
                checked={filterStatus === "saved"}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
