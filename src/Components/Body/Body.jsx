import { useEffect,useState } from "react";
import { RestaurantCard , ShimmarUI} from "../Index";
import { SwiggyAPI_URL } from "../config.js";
import "./Body.css"


function Body () {

  function filterData(searchText,allRestaurants){
    const filterData = allRestaurants.filter((allRestaurants)=>
    allRestaurants?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
    return filterData
  }
  
  const [allRestaurants , setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); //useState is a function that return an array. First Element is state varible and second element is function that how we want to change the state


  useEffect(()=>{
    getResturants()
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
  // if(!allRestaurants) return null;
  const allRestaurantslength = allRestaurants.length

  return(
  (
      <div className="container">
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
        </div>

        {/* CARDS */}
      <div className="cards">
        {  
     (allRestaurantslength === 0) ? <ShimmarUI /> : filteredRestaurants?.map((restaurant) => 
         {
           return (
              (
              <div className="body-rest">
              <RestaurantCard restaurant={...restaurant} key={restaurant?.info?.id} />
              </div>
           ) 
           )
          })}
      </div>
    </div> 
    ))
  }

  export default Body;