import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) =>{
    const dispatch = useDispatch();


    const handleAddItems =  (item) =>{
        //dispatch an acton if iclick handle items

        dispatch(addItem(item));       // it willcreate an object payload inside an object and pass it as the second arguement 
    }

    
return (
    <div  >
        {items.map((item) =>(
            <div key={item.card.info.id}
            className="p-2 m-2 border border-gray-500 shadow-current border-b-2 text-left flex justify-between ">
                <div className="w-9/12  ">
                   
                    <div className="py-2"> 
                    <span >
                        {item.card.info.name}
                    </span>
                    <span>-Rs.{item.card.info.price /100}</span>
                </div>
                
                <p className="text-xs">A juicy, flame-grilled beef patty layered with melted cheddar cheese, fresh lettuce, ripe tomatoes, pickles, and a dollop of our signature sauce — all nestled in a soft, toasted bun.</p>
                </div>
                <div className="w-3/12 p-4">
                <div className="absolute"><button onClick = {()=>handleAddItems(item)} className="p-2  bg-white rounded-lg  border  border-slate-400 ">Add +</button></div>
                <img src={CDN_URL} className="w-full rounded-lg"/>
                     
                </div>
                

            </div>
        ))}
    </div>
    )
}
export default ItemList;