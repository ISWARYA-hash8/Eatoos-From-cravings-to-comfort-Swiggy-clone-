import { LOGO_URL } from '../utils/constants';
import { useState , useEffect } from 'react';
const Header = () => {

    
    const [BtnNameReact,setBtnNameReact] = useState("Login");
    console.log("Header render");

    useEffect(()=>{
        console.log("useEffect called")
    },[BtnNameReact]);


    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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