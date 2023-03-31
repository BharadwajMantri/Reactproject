// import
// function with <html>
// exports

import React,{useState} from 'react';
import './NavbarFunctional.css';

function  NavBarfunction(){
    let [title, setTitle] = useState("Click to Change me");
    let [message, setmessage]=useState("*");
    // const internalcss={color:'red'} internal css //style={{color:"red"}}-inline css; style={internalcss}
    return (
        <div>
        <nav>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Contact</li>
            <li>Login/SignUp</li>
        </ul>
    </nav>
    &nbsp;
    <h1 onClick={()=>setTitle('Hi..!! Good Morning',setmessage('You Look great today, Keep Smiling'))}>{title},{message} </h1>
        {/* <h1 onClick={()=>{setage(30)}}>{age} </h1> */}
        </div>

    
)}

export default NavBarfunction;