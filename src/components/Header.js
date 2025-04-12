import { LOGO_URL } from '../utils/constants';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {

    
    const [BtnNameReact,setBtnNameReact] = useState("Login");
    console.log("Header render");
    const OnlineStatus = useOnlineStatus();

    useEffect(()=>{
        console.log("useEffect called")
    },[BtnNameReact])


    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {OnlineStatus ?"🟢":"🔴"}
                    </li>
                    <li>
                    <Link to="">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About Us</Link></li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to ="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className='login' onClick={()=>{BtnNameReact==="Login"? setBtnNameReact("Logout"):setBtnNameReact("Login");

                    }}>
                        {BtnNameReact}
                        </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;