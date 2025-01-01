import React, { useRef } from "react";
import "./hello.css"
import { FaSearch } from "react-icons/fa";


const Search = () => {
  
  return (
    <div class="search-containerr">
    <div class="search-box">
    <div class="search-container">
    <span class="search-icon"><FaSearch/></span>
    <input type="text" class="search-input" placeholder="Search..."/>
  </div>
    </div>
  </div>
  );
};

export default Search;
