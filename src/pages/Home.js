import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className={"document"}>
            <div className={"left_column"}>
                <center>
                    <div className={"top_column"}>
                        <div className={"logo_wrapper"}>
                            <div className={"logo_s"}> S </div>
                            <p className={"center_text"}> SAD CAPYBARA </p>
                        </div>
                        <div className={"information_block"}>
                            <p className={"info_header"}> ABOUT ME </p>
                            <p className={"info_par_100"}> My name is Sad Capybara and I am a junior at Brown University. In my portfolio, I am showcasing my design skills by critiquing existing designs,
                            as in the "Bagel Gourmet Redesign" and "Personas - Stop and Shop Self Checkout" as well as creating designs of my own, as in "Style Transfer" and "Interactive Bakery Website".</p>
                        </div>
                    </div>
                </center>
            </div>
            <div className={"right_column"}>
                <div className="grid">
                    <div className="grid_row">
                        <div className="grid_item">
                            <Link to={"bagel"}>
                                <img className={"grid_img"} src="images/Home/bagel_gourmet_img.jpg"/>
                            </Link>
                            <p className={"info_subheader"}> Critique | Visual Design | Interface Design </p>
                            <p className={"info_header"}> BAGEL GOURMET REDESIGN </p>
                        </div>
                        <div className="grid_item">
                            <Link to={"development"}>
                                <img className={"grid_img"} src="images/Home/sad-capybaras-bakery-logo.png"/>
                            </Link>
                            <p className={"info_subheader"}> React | Visual Design </p>
                            <p className={"info_header"}> INTERACTIVE BAKERY WEBSITE </p>
                        </div>
                    </div>
                    <div className="grid_row">
                        <div className="grid_item">
                            <Link to={"personas"}>
                                <img className={"grid_img"} src="images/Home/stop-and-shop-logo.png"/>
                            </Link>
                            <p className={"info_subheader"}> Critique | Interface Design </p>
                            <p className={"info_header"}> PERSONAS - STOP AND SHOP SELF CHECKOUT </p>
                        </div>
                        <div className="grid_item">
                            <Link to={"style_transfer"}>
                                <img className={"grid_img"} src="images/Home/bananas_3.png"/>
                            </Link>
                            <p className={"info_subheader"}> Functional Programming | Visual Design </p>
                            <p className={"info_header"}> STYLE TRANSFER </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;