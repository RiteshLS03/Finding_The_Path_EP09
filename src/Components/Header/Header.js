import React, { useState, useEffect } from "react";
import { logo, vector } from "../../Images/index"; /* Images for UI */
import "./Header.css";
import {ShimmarUI} from "../Index";
import { SwiggyAPI_URL } from "../config.js";
import {Link} from "react-router-dom";
import Body from "../Body/Body";


function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((allRestaurants) =>
    allRestaurants?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}


function Header () {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [searchText, setSearchText] = useState(""); //useState is a function that return an array. First Element is state varible and second element is function that how we want to change the state
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  console.log(filteredRestaurants);
  const [isLoggedIn,setIsLoggedIn] = useState("true");

  useEffect(()=>{
    getResturants();
  },[])

  async function  getResturants(){

    try {
      const response = await fetch(SwiggyAPI_URL);
      const json = await response.json();

      async function checkJsonData(jsondata){
        for(i=0;i < jsondata?.data?.cards.length; i++){

          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          if(checkData !== undefined){
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);

    } catch (error) {
      console.log(error)
    }
  } 

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
              setSearchText(e.target.value);
            }}
          />
          <button 
            onClick={() => {
              // need to filter the data
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
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

      {/* { 
      
      (allRestaurants.length === 0) ? <ShimmarUI/> : <Body filteredRestaurants={filteredRestaurants}/>

       } */}

       <Body filteredRestaurants={filteredRestaurants} allRestaurants={allRestaurants} />
      
  </> );
}

export default Header;




