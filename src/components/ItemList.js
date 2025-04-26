import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) =>{
    console.log(items);
return (
    <div>
        {items.map((item) =>(
            <div key={item.card.info.id}
            className="p-2 m-2 border border-black text-left flex ">
                <div>
                    <img src={CDN_URL} className="w-20 h-20  border"/>
                    <div className="py-4 "> 
                    <span >
                        {item.card.info.name}
                    </span>
                    <span>-Rs.{item.card.info.price /100}</span>
                </div>
                {/* <p>{item.card.info.category}</p> */}
                </div>
            </div>
        ))}
    </div>
    )
}
export default ItemList;