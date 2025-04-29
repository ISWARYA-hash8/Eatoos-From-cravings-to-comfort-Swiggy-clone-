import { useEffect, useState } from 'react';
import RestaurantCard,{withDiscountLabel} from './RestaurantCard';
import resList from '../utils/mockData';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants,setfilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");
  

  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);
console.log(listOfRestaurants)
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
  const OnlineStatus = useOnlineStatus();
  if(OnlineStatus === false) return <h1 className='nettag'>Please check your internet connection</h1>;
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
          <input
           type="text"
           data-testid = "searchInput"
           className='border border-solid border-black' value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }} />
          <button className='px-3 py-1 bg-green-100 m-4 border rounded-lg border-black' onClick={() =>{
            //filtert the restaurant
            console.log("SearchText");

           const filteredRestaurants = listOfRestaurants.filter((res) =>{
             return res.data  && res?.data?.name.toLowerCase().includes(searchText.toLowerCase())

            });
            setListOfRestaurants(filteredRestaurants);


          }}>search</button>
        </div>
        
        <div>
          <button
          className='px-4 py-2 bg-green-100 rounded-lg'
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
      </div>
      <div className="flex flex-wrap p-4 border shadow-sm border-black">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
   
        {filteredRestaurants.map((restaurant) => (
          <Link
          key={restaurant?.info?.id}
          to={`/restaurants/${restaurant?.info?.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          {/** if the restaurant have discount then add a discount lable to it */}
        {  restaurant.info.externalRatings.isOpen ? <RestaurantCardDiscount/> :<RestaurantCard resData={restaurant} /> }
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;