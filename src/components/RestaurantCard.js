import { CDN_URL } from '../utils/constants';
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
    const { resData } = props;
   console.log(resData);

   //const{loggedInUser} = useContext(UserContext);
    const {
        cloudinaryImageId ,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;
     

    return (
        <div
            className='m-4 p-4  w-[200px] rounded-lg bg-slate-200 hover:bg-slate-50 '
           
        >
            <img
                className="rounded-lg"
                src={CDN_URL + cloudinaryImageId}
                alt="Biryani"
            />
            

            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{sla?.slaString} </h4>
        </div>
    );
};

//to add discount label we will create a higher order component
 //input - RestaurantCard ==>> discountedresatuarant card

export const withDiscountLabel = (RestaurantCard) =>{
    return (props) =>{
        return (
            <div>
                <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>Promoted</label>
                <RestaurantCard{...props}/>
            </div>
        );
    };
};






export default RestaurantCard;