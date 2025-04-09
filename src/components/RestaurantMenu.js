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

 const {name,cuisine,cloudinaryImageId,costForTwoMessage} = resInfo?. cards[2]?.card?.card;
 
    return resInfo === null ? (
    <Shimmer />
) : ( 
        <div className="menu" >
            <h1>{name|| "Loading ..."}</h1>
            <h2>{cuisine}</h2>
            <h3>{cloudinaryImageId}</h3>
            <h2>Menu</h2>
            <ul>
                <li>Biriyani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;