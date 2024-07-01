import React from "react";
import './Loginform.css';
import { FaUser, FaKey } from "react-icons/fa";

const Loginform = () => {
    const backgroundStyle = {
        position: 'absolute',
        width: '1083px',
        height: '982px',
        left: '640.67px',
        top: '32px',
        background: 'url(${UAlogo.png})',
        filter: 'blur(2px)',
        transform: 'rotate(8deg)',
        zIndex: '-1'
    };

    return (
        <div className="wrapper">
            <form action="">
                <h1>LOGO HERE</h1>
                <h1>LOG IN</h1>
                <div className="input-group">
                <span className="icon"><FaUser /></span>
                <input type="email" placeholder=" Email" />
                </div>
                <div className="input-group">
                    <span className="icon"><FaKey /></span>
                    <input type="password" placeholder="Password" />
                </div>
                <button type="submit"><h3>LOG IN</h3></button>
                <a href="#" className="create-account">Create an Account</a>
            </form>
        </div>
    );
};

export default Loginform;


