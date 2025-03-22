import { useState } from "react";
import { LOGO_URL } from "../../utlis/constants";
const Header = () => {
  const [logIn,setLogIn] = useState('Logout');
  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} height="50"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="logInButton" onClick={()=>{
            setLogIn(logIn == 'Logout' ? 'Login' :  'Logout');
          }}>{logIn}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
