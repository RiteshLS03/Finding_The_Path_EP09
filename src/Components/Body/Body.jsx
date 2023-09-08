import { RestaurantCard } from "../Index";
import "./Body.css"

function Body ({filteredRestaurants}) {
    return (
      <div className="body-rest">
      {filteredRestaurants?.map((restaurant) => {
        return   <RestaurantCard restaurant={...restaurant} key={restaurant?.info?.id} /*key={restaurant.data.data.id}*/ /> 
      })}
    </div> 
    )
  }

  export default Body;