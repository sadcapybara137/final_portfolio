import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className={"nav_container"}>
            <li className={"inline_li"}>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <p className={"nav_text"}>
                        Home
                    </p>
                </Link>
            </li>
            <li className={"inline_li"}>
                <Link to={"../bagel"} style={{ textDecoration: 'none' }}>
                    <p className={"nav_text"}>
                        Bagel Gourmet Redesign
                    </p>
                </Link>
            </li >
            <li className={"inline_li"}>
                <Link to={"../development"} style={{ textDecoration: 'none' }}>
                    <p className={"nav_text"}>
                        Interactive Bakery Website
                    </p>
                </Link>
            </li>
            <li className={"inline_li"}>
                <Link to={"../personas"} style={{ textDecoration: 'none' }}>
                    <p className={"nav_text"}>
                        Personas
                    </p>
                </Link>
            </li>
            <li className={"inline_li"}>
                <Link to={"../style_transfer"} style={{ textDecoration: 'none' }}>
                    <p className={"nav_text"}>
                        Style Transfer
                    </p>
                </Link>
            </li>
        </div>
    )
}

export default Navbar;