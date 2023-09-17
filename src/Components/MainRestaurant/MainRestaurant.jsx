import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK, MAIN_Restaurnat_API_URL } from "../config";
import { AiFillStar } from "react-icons/ai";
import {AiOutlineClockCircle  } from "react-icons/ai"
import {HiOutlineCurrencyRupee} from "react-icons/hi"

import "./MainRestaurant.css";

const MainRestaurant = () => {
  const [restaurant, setRestaurant] = useState({});

  const params = useParams();
  const { id } = params;
  console.log(params);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(MAIN_Restaurnat_API_URL + id);
    const json = await data.json();
    setRestaurant(json);
    console.log(restaurant);
    console.log(json);
  }

async function listOfRes(){
  
  const listOfRestaurants =  await restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  console.log(listOfRestaurants);
  return listOfRestaurants
}
listOfRes()
  // if(!listOfRestaurants) return null

  return(
    <>
    {/* Information of the restaurant */}
    <div className="main_restaurant_restaurant-header">
      <div className="info_left">
        <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h2>
        <h5>
          {restaurant?.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
        </h5>
        <h5>
          {restaurant?.data?.cards[0]?.card?.card?.info?.areaName},{" "}
          {
            restaurant?.data?.cards[0]?.card?.card?.info?.sla
              ?.lastMileTravelString
          }
        </h5>
      </div>
      <div className="info_right">
        {/* <img src={IMG_CDN_LINK+ restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="" /> */}
        <div className="info_right-box">
          <h4>
            <AiFillStar />{" "}
            {restaurant?.data?.cards[0]?.card?.card?.info?.avgRatingString}
          </h4>
          <h6>
            {restaurant?.data?.cards[0]?.card?.card?.info?.totalRatingsString}
          </h6>
        </div>
      </div>
    </div>
    {/* Price and Timing */}
    <div className="main_restaurant_restaurant-body">
      <div className="main_restaurant_restaurant-body_upper">
        <h3><AiOutlineClockCircle />{restaurant?.data?.cards[0]?.card?.card?.info?.sla?.slaString}</h3>
        <h3><HiOutlineCurrencyRupee/>{restaurant?.data?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
      </div>
    </div>
    <div className="vmain_restaurant_restaurant-lists">

    </div>
    {/*  */}
    
    </>
  );
};

export default MainRestaurant;
