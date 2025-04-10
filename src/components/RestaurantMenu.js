import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";

import { useParams } from 'react-router-dom';

import { MENU_API } from "../utils/constants";
const RestaurantMenu = () =>{
     const [ resInfo , setResInfo ] = useState(null);
      
      const {resId} = useParams();
      console.log(resId);


 useEffect( () =>{
         fetchMenu();
 },[resId]);
 const fetchMenu = async () =>{
    const data = await fetch(
       MENU_API+resId
    );
    const json= await data.json();
    console.log(json);
    setResInfo(json.data);
 };
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
        <div className="menu" >
            <h1>{name|| "Loading ..."}</h1>
            <h2>{cuisines}</h2>
            <h3>{costForTwoMessage}</h3>
            <h2>{avgRating} </h2>

            <h3></h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item =>
                (<li key ={item.card.info.id}>  
                    {item.card.info.name}  =  {"RS."}{item.card.info.price / 100 || {}}  </li>))
                }
                
                
            </ul>
        </div>
    );
};

export default RestaurantMenu;