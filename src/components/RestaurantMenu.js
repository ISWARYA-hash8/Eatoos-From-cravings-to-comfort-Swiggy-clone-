import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";

import { useParams } from 'react-router-dom';

import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

//chunking
// code spilitting 
//dynamic bundling
const RestaurantMenu = () =>{
    
      
      const {resId} = useParams();
      const resInfo = useRestaurantMenu(resId);
 const info = resInfo?.cards[2]?.card?.card?.info || {};
 const { name, cuisines, costForTwoMessage ,avgRating} = info;
 
 //const {name,cuisines,costForTwoMessage} = resInfo?. cards[2]?.card?.card?.info;
 const infor = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
    (c) => c.card?.card?.itemCards
  )?.card?.card;
  
  const itemCards = infor?.itemCards || [];
  
    return resInfo === null ? (
    <Shimmer />
) : ( 
        <div className="m-4 p-4" >
            <h1>{name|| "Loading ..."}</h1>
            <h2>{cuisines}</h2>
            <h3>{costForTwoMessage}</h3>
            <h2>{avgRating} </h2>

            <h3></h3>
            <h2>Menu</h2>
            <ul >
                {itemCards.map(item =>
                (<li key ={item.card.info.id}>  
                    {item.card.info.name}  =  {"RS."}{item.card.info.price / 100 || {}}  </li>))
                }
                
                
            </ul>
        </div>
    );
};

export default RestaurantMenu;