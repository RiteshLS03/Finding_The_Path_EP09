import React, { useEffect , useState} from "react";
import {  useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../config";

const MainRestaurant = () => {

  const [restaurant , setRestaurant] = useState({});

  const params  = useParams();
  const {id} = params;
  console.log(params);

  useEffect(()=>{
    getRestaurantInfo();
  },[])

  async function getRestaurantInfo(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?&lat=19.8644542&lng=75.3557927&menuId=569928")
    const json = await data.json();
    // setRestaurant(json?.data)
    // console.log(restaurant);
    console.log(json);
  }

  return (
    <div>
        <h1>Name:{id}</h1>
        <img src={IMG_CDN_LINK+ restaurant?.cloudinaryImageId} alt="img" />
        <h2>discription</h2>
    </div>
  );
};

export default MainRestaurant;
