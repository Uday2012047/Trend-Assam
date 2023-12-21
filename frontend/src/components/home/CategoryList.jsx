import React, { useState } from "react";
import "./CategoryList.css";
import { Link } from "react-router-dom";

const category = ["GAMUSA", "JURA", "PAAT", "MUGA", "RIHA", "AHOM"];

const CategoryList = () => {
  const [cate, setCate] = useState("");

  return (
    <ul className="categoryList">
      {category.map((cate) => (
        <Link
          key={cate}
          to={`/products/${cate}`}
          className="category-link-product"
          onClick={() => setCate(category)}
        >
          <h4>{cate}</h4>
        </Link>
      ))}
    </ul>
  );
};

export default CategoryList;
