import React, {useState} from "react";
import "./img.css";


const Imagine = (props) => {
    const {user} = props;
    return(
        <span role="img" aria-label='go!'>
        <img src={user.hdurl} alt="img of the day"/>
        </span>
    )
}

export default Imagine;