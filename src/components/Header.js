import { LOGO_URL } from '../utils/constants';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
//import Logo from '../asset/Logo.png';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {

    
    const [BtnNameReact,setBtnNameReact] = useState("Login");
    console.log("Header render");
    const OnlineStatus = useOnlineStatus();

    useEffect(()=>{
        console.log("useEffect called")
    },[BtnNameReact])


    return (
        <div className="flex justify-between bg-rose-100 shadow-sm mb-2 h-40 rounded-lg sm:bg-yellow-50 lg:bg-green-50 ">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="w-40 " />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4 '>
                    <li className='flex m-4 border border-black px-4 rounded-xl ' >
                        Online Status : {OnlineStatus ?"🟢":"🔴"}
                    </li>
                    <li className=' flex m-4 border border-black px-4 rounded-xl'>
                    <Link to="">Home</Link>
                    </li>
                    <li className='flex m-4 border border-black px-4 rounded-xl'> 
                    <Link to="/about">About Us</Link></li>
                    <li className='flex m-4 border border-black px-4 rounded-xl'>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className='flex m-4 border border-black px-4 rounded-xl'>
                        <Link to ="/grocery">Grocery</Link>
                    </li>
                    <li className='flex m-4 border border-black px-4 rounded-xl'>Cart</li>
                    <button className='flex m-4 border border-black px-4 rounded-xl' onClick={()=>{BtnNameReact==="Login"? setBtnNameReact("Logout"):setBtnNameReact("Login");

                    }}>
                        {BtnNameReact}
                        </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;