import React from 'react'
import './Development.css';
import BakeryItem from "./components/BakeryItem"
import {cloneElement, useState} from "react";

const Development = () => {
    const bakeryData = [
        { name: "Bread", gf: false, vegan: true, price: 3.79, image: "/images/Development/bread.jpg"},
        { name: "Macaron", gf: true, vegan: false, price: 1.99, image: "/images/Development/macaron.jpg"},
        { name: "Blueberry Muffin", gf: true, vegan: true, price: 2.69, image: "/images/Development/blueberry_muffin.jpg"},
        { name: "Pizza Roll-ups", gf: false, vegan: false, price: 5.99, image: "/images/Development/pizza_rolls.jpg"},
        { name: "Chocolate Chip Muffin", gf: true, vegan: false, price: 1.79, image: "/images/Development/cupcake.jpg"},
        { name: "Holiday Cookie", gf: true, vegan: true, price: 1.99, image: "/images/Development/holiday_cookie.jpg"},
        { name: "Chocolate Tart", gf: false, vegan: false, price: 5.79, image: "/images/Development/chocolate_tart.jpg"},
        { name: "Strawberry Creampuff", gf: true, vegan: false, price: 3.99, image: "/images/Development/strawberry_creampuff.jpg"},
        { name: "Lava Cake", gf: false, vegan: true, price: 3.39, image: "/images/Development/lava_cake.jpg"},
        { name: "Powdered Donuts", gf: false, vegan: false, price: 3.19, image: "/images/Development/powdered_donuts.jpg"},
        { name: "Chocolate Croissant", gf: true, vegan: true, price: 2.49, image: "/images/Development/chocolate_croissant.jpg"},
        { name: "Cheesecake", gf: true, vegan: false, price: 4.49, image: "/images/Development/cheesecake.jpg"}
    ];
    const [cart, setCart] = useState([]);
    const sortedData = sortData(bakeryData);
    const [vegan, setVegan] = useState(false);
    const [gf, setGf] = useState(false);
    const [sort, setSort] = useState(false);

    function cartTotal() {
        var total = 0.00;
        for(let i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].quantity;
        }
        return total;
    }

    function updateCart(name, price) {
        var updatedCart = structuredClone(cart);
        let flag = false;
        for(let i = 0; i < cart.length; i++) {
            if (cart[i].name === name) {
                updatedCart[i].quantity = updatedCart[i].quantity + 1;
                flag = true;
            }
        }
        if (!flag) {
            updatedCart.push({name: name, price: price, quantity: 1})
        }
        return updatedCart
    }

    function removeCart(name) {
        var updatedCart = structuredClone(cart);
        for(let i = 0; i < cart.length; i++) {
            if (cart[i].name === name) {
                updatedCart[i].quantity = updatedCart[i].quantity - 1;
                if (updatedCart[i].quantity === 0) {
                    updatedCart.splice(i,1)
                }
            }
        }
        return updatedCart
    }

    function sortData(bakeryData) {
        var sortedData = structuredClone(bakeryData);
        sortedData.sort(function(a,b) {
            return a.price - b.price;
        })
        return sortedData;
    }

    function showData(sort, bakeryData, sortedData, gf, vegan) {
        console.log(sort);
        if (sort) {
            return sortedData.map((item, index) => (
                showItem(item, gf, vegan)
            ))
        } else {
            return bakeryData.map((item, index) => (
                showItem(item, gf, vegan)
            ))
        }
    }

    function showItem(item, gf, vegan) {
        let flag = false;
        if (gf && vegan && item.gf && item.vegan) {
            flag = true;
        }
        else if (gf && !vegan && item.gf) {
            flag = true;
        }
        else if (vegan && !gf && item.vegan) {
            flag = true;
        }
        else if (!gf && !vegan) {
            flag = true;
        }
        if (flag) {
            return (
                <div className= "product_box">
                    <BakeryItem image={item.image} price={item.price} name={item.name} gf={item.gf} vegan={item.vegan}/>
                    <button onClick={() => setCart(updateCart(item.name, item.price))}> Add 1 to cart! </button>
                    <button onClick={() => setCart(removeCart(item.name))}> Remove 1 from cart! </button>
                </div>
            )
        }
    }

    return (
        <div className="App">
            <div className="top_banner_bakery">
                <p className="logo_bakery"> Sad Capybara's Bakery </p>
            </div>
            <div className="filter_item_cont">
                <div className="filters_cart">
                    <div className="filters">
                        <h2> Filters: </h2>
                        <div className="filter">
                            <label> Gluten Free </label>
                            <input type={"checkbox"} onClick={() => setGf(!gf)}/>
                        </div>
                        <div className="filter">
                            <label> Vegan </label>
                            <input type={"checkbox"} onClick={() => setVegan(!vegan)}/>
                        </div>
                        <h2> Sorting: </h2>
                        <div className="filter">
                            <label> Price (low to high) </label>
                            <input type={"checkbox"} onClick={() => setSort(!sort)}/>
                        </div>
                    </div>
                    <div className="cart">
                        <h2>Cart</h2>
                        {cart.map((item, index) => (
                            <p className={"cart_text"}> {item.name} ${item.price} | Quantity: {item.quantity}</p>
                        ))}
                        Total: ${Math.round(cartTotal()*100) / 100}
                        <div>
                            <button onClick={() => setCart([])}> Clear Cart</button>
                        </div>
                    </div>
                </div>
                <div className="items_block">
                    {showData(sort, bakeryData, sortedData, gf, vegan)}
                </div>
            </div>
        </div>
    );
}

export default Development;