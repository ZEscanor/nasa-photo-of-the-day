import React, {useState} from "react";
import "./header.css";


const Header = (props) => {
  const {user} = props;
  console.log("headerprop",user);
  console.log(user.title)
 return(
    <div className="header">
    <p>{user.title}, {user.date}</p>
   </div>
 )
}

export default Header;