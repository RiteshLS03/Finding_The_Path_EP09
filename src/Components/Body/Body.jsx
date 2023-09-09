import { useEffect,useState } from "react";
import { RestaurantCard , ShimmarUI} from "../Index";
import { SwiggyAPI_URL } from "../config.js";
import "./Body.css"

function Body () {
  const [allRestaurants , setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  return (allRestaurants.length === 0) ? <ShimmarUI /> :  (
      <div className="body-rest">
      {filteredRestaurants?.map((restaurant) => {
        return   <RestaurantCard restaurant={...restaurant} key={restaurant?.info?.id} /*key={restaurant.data.data.id}*/ /> 
      })}
    </div> 
    )
  }

  export default Body;