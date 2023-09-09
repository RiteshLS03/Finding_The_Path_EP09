import React, { useState } from "react";
import { logo, vector } from "../../Images/index"; /* Images for UI */
import "./Header.css";
import {Link} from "react-router-dom";


function Header () {
  const [isLoggedIn,setIsLoggedIn] = useState("true");
  const [searchText, setSearchText] = useState(""); //useState is a function that return an array. First Element is state varible and second element is function that how we want to change the state
  return (
    <>
      {/* LOGO */}
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        {/* SEARCHBAR  */}
        <div className="search-nav">
          <input
            type="text"
            id="searchbar"
            placeholder="Search, Order, Enjoy!"
            value={searchText}
            onChange={(e) => {
            var searchingData =  setSearchText(e.target.value);
            }}
          />
          <button 
            onClick={() => {
              // need to filter the data
              // const data = filterData(searchText, allRestaurants);
              // setFilteredRestaurants(data);
              <Body searchText={searchText} allRestaurants={searchingData} />
            }}
          >
            Search
          </button>
          {/* NAVBAR */}
        </div>
        <li className="nav-items">
          <ul><Link to="/">Home</Link> </ul>
          <ul>Food</ul>
          <ul><Link to="/about">About</Link></ul>
          <ul>
            <a href="">
              <img src={vector} alt="cart" />
            </a>
          </ul>
          <ul>{
            isLoggedIn ? 
            <button onClick={()=>setIsLoggedIn(false)}>Logout</button> 
            : <button onClick={()=>setIsLoggedIn(true)}>Login</button> 
            }</ul>    
        </li>
      </div>
  </> );
}

export default Header;




