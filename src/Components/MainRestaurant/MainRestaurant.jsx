import React from "react";
import {  useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../config";

const MainRestaurant = () => {
  const params  = useParams();
  const {id} = params;
  console.log(params);

  return (
    <div>
        <h1>Name</h1>
        <img src={IMG_CDN_LINK+{id}} alt="" />
        <h2>discription</h2>
    </div>
  );
};

export default MainRestaurant;
