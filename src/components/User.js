import { useEffect, useState } from "react";
const User = ({name}) =>{
    
    
    return  (<div className="user">
         
        <h2 className="text-pretty"> Name : {name} </h2>
        <h3 className="font-serif">Location : Tirupur</h3>
        <h4 className="font-serif stroke-indigo-500">contact:iswarya83p@gmail.com</h4>
        </div>
    );

}
export default User;