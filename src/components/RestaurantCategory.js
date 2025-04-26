import ItemList from "./ItemList";

const RestaurantCategory = ({data}) =>{
    console.log( data);
    return (
    <div>
        <div className="w-8/12 mx-auto border border-collapse shadow-slate-500 my-4 bg-gray-50 shadow-lg p-4 " >
            <div className="flex justify-between">
                <span className=" font-serif text-lg font-semibold">{
               data?.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            
        </div>
        <div>
            <ItemList  items = {data.itemCards}/>
        </div>

    </div>
    );
}
export default RestaurantCategory;