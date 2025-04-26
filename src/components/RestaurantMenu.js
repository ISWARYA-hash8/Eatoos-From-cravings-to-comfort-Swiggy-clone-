import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";

import { useParams } from 'react-router-dom';

import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

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
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const itemCards = infor?.itemCards || [];
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(categories);
    return resInfo === null ? (
    <Shimmer />
) : ( 
        <div className="text-center" >
            <h1 className="font-bold my-10 text-2xl">{name|| "Loading ..."}</h1>
            <h2 className="font-bold text-lg">{cuisines}</h2>
            <h3>{costForTwoMessage}</h3>
            <h2>{avgRating} </h2>

            
            <h2>Menu</h2>
            {/* <ul >
                {itemCards.map(item =>
                (<li key ={item.card.info.id}>  
                    {item.card.info.name}  =  {"RS."}{item.card.info.price / 100 || {}}  </li>))
                }
                
                
            </ul> */}
            {categories.map((category) =><RestaurantCategory data={category?.card?.card}/>)}
        </div>
    );
};

export default RestaurantMenu;