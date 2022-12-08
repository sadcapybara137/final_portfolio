import React from 'react'
import './BagelGourmet.css';

const BagelGourmet = () => {
    return (
        <div className="background">
        <div className="container">
            <div className="top_banner">
                <div className="text_block">
                    <h1 className="name"> Bagel Gourmet </h1>
                    <h2 className="quote"> "The best bagels in Rhode Island!" </h2>
                </div>
                <div className="buttons">
                    <button> HOME</button>
                    <button> MENU</button>
                    <button> LOCATION</button>
                    <button> CONTACT</button>
                    <button> ORDER ONLINE!</button>
                </div>
                <select className="dropdown">
                    <option> HOME</option>
                    <option> MENU</option>
                    <option> LOCATION</option>
                    <option> CONTACT</option>
                    <option> ORDER ONLINE!</option>
                </select>
            </div>
            <div className="image_banner">
                <img src="/images/BagelGourmet/vicky-ng-lIQRPsA43tw-unsplash.jpg" className="bagel_img" alt="An image of three bagels,
                webpage banner."/>
                <h3 className="bagel_top"> 222 Richmond St, Providence RI, 02905 </h3>
                <h3 className="bagel_bottom"> (401)-454-8800 </h3>
            </div>
            <div className="hours_banner">
                <p className="green_text"> Open! </p>
                <p className="yellow_text"> Mon - Sun Hours: | In Store: 7:00 AM - 3:00 PM | Delivery: 7:00 AM - 2:00
                    PM </p>
            </div>
            <div className="info_row">
                <div className="info_par">
                    <h1 className="info_h"> Welcome to Bagel Gourmet Cafe! </h1> <br/>
                    <p className="info_p"> Bagel Gourmet has been serving great food and bagels for over 15 years! And
                        now we are happy to introduce our new location right next to the Medical Alpert Brown
                        school. <br/><br/>
                        We love to see our customers joyful face when they are enjoying our bagels! <br/><br/>
                        It's our reason why we keep in the old school way procedure that begins every day at 2:30am.
                        We water boil the bagels and then bake them. Our dough is made fresh daily so we never use
                        bagels from a day before. Its a guarantee :)
                    </p>
                </div>
                <div className="img_column">
                    <div className="hours_box">
                        <p className="green_text"> Open! </p> <br/>
                        <p className="yellow_text"> Mon - Sun Hours: <br/> In Store: 7:00 AM - 3:00PM <br/> Delivery: 7:00
                            AM - 2:00 PM</p>
                    </div>
                    <img className="img_row" src="/images/BagelGourmet/building.jpg" alt="Picture of bagel's being placed in an oven"/>
                    <img className="opt_img" src="/images/BagelGourmet/55732162.jpg" alt="Picture of bagel's being placed in an oven"/>
                </div>
            </div>
            <div className="img_box">
                <img className="img_cell" src="/images/BagelGourmet/55732099.jpg" alt="Picture of bagels in an oven"/>
                <img className="img_cell" src="/images/BagelGourmet/55732121.jpg" alt="Picture of several bins of bagels"/>
                <img className="no_phone_img" src="/images/BagelGourmet/55732162.jpg"
                     alt="Picture of bagel's being placed in an oven"/>
            </div>
            <div className="img_box2">
                <img className="img_cell" src="/images/BagelGourmet/55732162.jpg" alt="Picture of bagel's being placed in an oven"/>
                <img className="img_cell" src="/images/BagelGourmet/building.jpg" alt="Picture of Bagel Gourmet's building"/>
            </div>
        </div>
        </div>
    );
}

export default BagelGourmet;