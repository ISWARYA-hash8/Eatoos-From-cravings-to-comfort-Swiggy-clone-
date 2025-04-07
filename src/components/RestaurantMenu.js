import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
     const [ resInfo , setResInfo ] = useState([]);


 useEffect( () =>{
         fetchMenu();
 },[]);
 const fetchMenu = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.5034192&lng=77.24443480000001&restaurantId=941047&catalog_qa=undefined&submitAction=ENTER");
    const json= await data.json();
    console.log(json);
    setResInfo(json?.data?.cards[2]?.card?.card?.info?.name);
 };

 //const {name,cuisine,cloudinaryImageId,costForTwoMessage} = json?.data?.cards[2]?.card?.card?.info;
 
    return resInfo === null ? (<Shimmer />) : ( 
        <div className="menu" >
            <h1>{resInfo}</h1>
            <h2></h2>
            <h3></h3>
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