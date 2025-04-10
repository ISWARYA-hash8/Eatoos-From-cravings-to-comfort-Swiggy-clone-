import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants,setfilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");


  useEffect(()=>{
    console.log("UseEffect called");
    fetchData();
  }, []);
  console.log("body rendered");
  const fetchData = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.5034192&lng=77.24443480000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const restaurantsData = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    
    setListOfRestaurants(restaurantsData);
    setfilteredRestaurant(restaurantsData);
    
    console.log(setListOfRestaurants);
  };
  
  if (!listOfRestaurants || listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
   
  return (   
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter">
        <div className='search'>
          <input type="text" className='search-box' value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }} />
          <button onClick={() =>{
            //filtert the restaurant
            console.log("SearchText");

           const filteredRestaurants = listOfRestaurants.filter((res) =>{
              res.data.name.toLowerCase().includes(searchText.toLowerCase())

            });
            setListOfRestaurants(filteredRestaurants);


          }}>search</button>
        </div>
        
        <button
          className="filter-btn"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );

            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurants.map((restaurant) => (
          <Link
          key={restaurant?.info?.id}
          to={`/restaurants/${restaurant?.info?.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <RestaurantCard resData={restaurant} />
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;