import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
     const [ resInfo , setResInfo ] = useState(null);


 useEffect( () =>{
         fetchMenu();
 },[]);
 const fetchMenu = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.5034192&lng=77.24443480000001&restaurantId=941047&catalog_qa=undefined&submitAction=ENTER");
    const json= await data.json();
    console.log(json);
    setResInfo(json.data);
 };
 const info = resInfo?.cards?.[2]?.card?.card?.info || {};
 const { name, cuisines, costForTwoMessage ,avgRating} = info;
 
 //const {name,cuisines,costForTwoMessage} = resInfo?. cards[2]?.card?.card?.info;
 const infor = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {} ;
 const {itemCards} =  infor;
 console.log(itemCards);
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