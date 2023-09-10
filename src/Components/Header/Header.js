import React, { useState } from "react";
import { logo, vector } from "../../Images/index"; /* Images for UI */
import "./Header.css";
import {Link} from "react-router-dom";
import { Body } from "../Index";


function Header () {
  const [isLoggedIn,setIsLoggedIn] = useState("true");
  return (
    <>
      {/* LOGO */}
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        {/* SEARCHBAR  */}
        {/* <div className="search-nav">
          <input
            type="text"
            id="searchbar"
            placeholder="Search, Order, Enjoy!"
            value={searchText}
            onChange={(e) => {
             setSearchText(e.target.value);
             <Body searchText={searchText} /> //passing the data to body comp
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
        </div> */}
        {/* NAVBAR */}
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




