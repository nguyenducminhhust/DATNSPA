import React, { useContext } from "react";
import { Cart2 } from "../../GlobalState";
import "./Filter.css"
export default function Filters() { 
  const state = useContext(Cart2);
  const [categories] = state.categoriesAPI.categories;

  const [category, setCategory] = state.productsAPI.category;
  const [sort, setSort] = state.productsAPI.sort;
  const [search, setSearch] = state.productsAPI.search;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };

  return (
    <div className="filter_menu">
      <div className="filterservice">
        <h3>Tìm Kiếm Dịch Vụ: </h3>
        <select name="category" value={category} onChange={handleCategory}>
          <option value="">Tất Cả Dịch Vụ</option>
          {categories.map((category) => (
            <option value={"category=" + category.name} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
            <div className="searchservice">
      <input
        type="text"
        value={search}
        placeholder="Nhập Thông Tin Tìm Kiếm Tại Đây!"
        className="searchinput"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
          </div>
      {/* <div className="row_id">
        <span>Sort By: </span>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Newest</option>
          <option value="sort=oldest">Oldest</option>
          <option value="sort=-sold">Best sales</option>
          <option value="sort=-price">Price: Hight-Low</option>
          <option value="sort=price">Price: Low-Hight</option>
        </select>
      </div> */}
    </div>
  );
}
