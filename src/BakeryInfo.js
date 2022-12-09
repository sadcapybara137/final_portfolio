import React from 'react'
import "./Personas.css"
import Navbar from "../Components/Navbar";
import {Link} from 'react-router-dom'

const StyleTransfer = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className={"page_container"}>
                <div className={"padding_block"}></div>
                <h2> Sad Capybara's Bakery </h2>
                <h3> Introduction </h3>
                <center>
                    <p> To showcase my skills in building an interactive website and React, I created a basic bakery website
                        that allows users to view a list of items, sort the items according to different filters, and add and
                        remove items from a cart.
                    </p>
                </center>
                <h2> Overview </h2>
                <h3> Items </h3>
                <center>
                <p> To display items on the bakery page, I created a BakeryItem component which stores the name of an item,
                    the item's price, whether the item is gluten free or vegan, and an image of the item.</p>
                <img src={"images/Development/item.png"} style={{width:'20%'}}/>
                <h3> Filters </h3>
                </center>
                <center>
                    <p> The website has filters for gluten free and vegan items and allows users to sort the items by
                    price. To accomplish this, I created a function that uses the filters displayed on the page to decide whether
                    or not to display an item. For example, if the gluten free option is checked, and the program encounters an item
                    which isn't gluten free, that item won't be displayed. To handle sorting, I created a method which sorts the list
                    of items based on price -- since the items are displayed in the order they're listed, sorting the list sorts
                    the way they're displayed on the screen. </p>
                    <img src={"images/Development/filters.png"} style={{width:'30%'}}/>
                </center>
                <h3> Cart </h3>
                <center>
                    <p> The shopping cart on the page is stored internally as a list of items with fields for the item name,
                        the price of the item, and the quantity stored in the cart. When a user clicks the "add to cart" button
                        under an item, the item is added to the cart list. Additionally, to display the cart on the screen, the
                        contents of the cart are looped through and the item, price and quantity are displayed in the cart section.
                        The total is displayed underneath by looping through the cart contents and adding the price x quantity for each
                        item.
                    </p>
                    <img src={"images/Development/cart.png"} style={{width:'30%'}}/>
                </center>
                <h2> Deployed Website </h2>
                <p> The deployed website is available at this  <Link to={"../bakery"}>link</Link>. This project
                was my second time using react, and I learned a lot through working with it. Prior to this, I didn't
                feel very confident using react hooks, whereas after creating a website which uses them for updating
                the page, I feel like I understand how they actually work. In the future, I would like to use React in some
                of my other work to interface my backend applications with a frontend webpage to make them more accessible
                than a terminal interface. </p> <br/> <br/>
            </div>
        </div>
    );
}

export default StyleTransfer;