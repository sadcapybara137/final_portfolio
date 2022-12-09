import React from 'react'
import "./Personas.css"
import Navbar from "../Components/Navbar";

const Personas = () => {
    return (
        <div>
            <Navbar></Navbar>
        <div className={"page_container"}>
        <h1> Stop and Shop Self-Checkout </h1>
    <h2> Introduction </h2>
    <center>
        <p>
            Grocery store self-checkout systems have become an increasingly popular
            alternative to checking out with a cashier. In this project, I aim to
            investigate user satisfaction with using a self-checkout interface
            at the northeastern US grocery store chain Stop & Shop. More specifically,
            I would like to answer the following questions:
        </p>
        <ul>
            <li> Why do shoppers prefer self-checkout?</li>
            <li> Where are users having difficulties using self-checkout, if any?</li>
            <li> How do users feel about using self-checkout?</li>
        </ul>
    </center>

    <h2> The Interface </h2>
    <p>
        The Stop and Shop self-checkout interface features multiple components, including
        the scanner, the main screen, and the card reader.
    </p>
    <div className="img_row">
        <div className="img_column">
            <img src="https://i.postimg.cc/zfL4rntz/stop-and-shop-ui.png"
    alt="Stop and Shop self-checkout screen diagram"/>
            <p>
                The main interface Stop and Shop customers interact with is the screen in front
                of the scanner. The screen displays the items which were scanned and allows
                the user to checkout. There are various other options users can select
                like entering their phone number for rewards and searching produce by
                PLU.
            </p>
        </div>
        <div className="img_column">
            <img
                src=" https://media.gettyimages.com/photos/selfscan-checkout-and-pay-system-at-a-local-grocery-store-picture-id579056361?s=612x612"/>
            <p> Stop and Shop self-checkout station with
                card reader and scanner. Credit: GettyImages</p>
        </div>
    </div>

    <h1> User Observations and Interviews </h1>
    <p>
        I observered people using self-checkout at my local Stop and Shop and found
        the following observations noteworthy:
    </p>
    <ul>
        <li> Most people using self-checkout only had a few items in their cart, no one had
            a full shopping cart.
        </li>
        <li>
            Many people ran into issues with the security measures of the self-checkout system.
            Namely, if they didn't place items in the bagging area correctly it would require
            overrides from a worker.
        </li>
        <li>
            People who were using self-checkout typcially appeared to be younger.
        </li>
        <li>
            Some people would rotate items several times around the scanner looking for
            barcodes.
        </li>
        <li>
            Weighing produce requires using the screen navigation and sometimes resulted
            in needed assistance. Some users would put items on the scale before
            initiating the weighing screen.
        </li>
        <li>
            Some people would forget to scan items places in the lower basket of the cart.
        </li>
    </ul>
    <p>
        I interviewed three users of Stop and Shop's self-checkout interface and asked the
        following questions:
    </p>
    <ul>
        <li> Do you enjoy grocery shopping?</li>
        <li> Have you used self-checkout in the past? If so,
            how often?
        </li>
        <li> Why do you use self-checkout?</li>
        <li> Do you have any difficulties using self-checkout?
            <ul>
                <li> If so, why?</li>
            </ul></li>
        <li> Is using self checkout faster than a cashier?
            <ul>
                <li> If so, why?</li>
                <li> If not, why?</li>
            </ul></li>
    </ul>
    <p>
        From the interviews, I learned that shoppers generally feel neutral
        about going to the grocery store and have used self-checkout in the past.
        Some people use self-checkout in particular if the lines for a cashier are
        too long, the convenience of less human interaction, and having control
        of how groceries are bagged. Interviewees' often had issues with self-checkout
        because the system is easily set off by security measures. For example, there
        are spots on both sides of the interface to put groceries, but if you
        scan an item and place it to the left, the interface calls for assistance.
        Interviewees generally believed self-checkout is faster, with one
        interviewee specifying that self-checkout is faster for smaller trips.
    </p>
    <p>
        From my interviews and observations, I made the following personas:
    </p>
    <div className="img_row">
        <div className="img_column">
            <img src="https://i.postimg.cc/1XK07jc4/dave.png"/>
            <p> Dave is a middle-aged 9-to-5 worker with a wife and kids. He
                tries to help out around the house by doing grocery shopping after work.
                Dave doesn't always pay attention to what he is doing, yet is generally
                confident. Dave struggles with using the interface because he
                places items outside the bagging area, causing the system to ask for
                assistence. Additionally, he doesn't realize that he has to scan his
                Stop and Shop card for sale items. This persona represents my interviewees
                because most expressed frustration with needing assistance during self-checkout.
                While observing users, I noticed some did not use their card at the machine.
            </p>
        </div>
        <div className="img_column">
            <img src="https://i.postimg.cc/x18Fzv4Z/phil.png"/>
            <p> Phil is a college student who ocassionally goes to the grocery store
                for things he can't get on his meal plan. He is introverted and shopping
                easily makes him feel stressed. His difficulty with using the interface
                is finding barcodes and getting them to scan properly. This persona relates
                to my experience of watching users rotate items many times to scan them.
            </p>
        </div>
    </div>

    <h2> Storyboarding </h2>
    <p> To give the persona additional context, I created a storyboard covering
        the "Dave" persona, illustrating his difficulties using the grocery store
        self-checkout: </p>
    <img src="https://i.postimg.cc/7YgR4PTB/unknown-story-highres.png" alt="Storyboard of a customer's experience at self-checkout"/>
    <h2> Key Takeaways </h2>
            <p> In this project, I explored the public's view of an interface I interact with regularly
            to gain insight and learn about different perspectives of using the interface I could not have learned
            otherwise. For example, I generally believe that going to a cashier to checkout is faster, especially for larger
            shopping trips, however, most interviewees at the self-checkout station believe self-checkout is faster. In my future work
            with user interface design in a professional setting, I plan on using a similar interview process with users
            for valuable information about interfaces I may otherwise be blind to. </p> <br/><br/>
    </div>
        </div>
    );
}

export default Personas;