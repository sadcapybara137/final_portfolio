import React from 'react'
import './Personas.css'
import Navbar from "../Components/Navbar";
import {Link} from "react-router-dom";

const BagelGourmetWrit = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className={"page_container"}>
            <h1> Bagel Gourmet Cafe Webpage </h1>
            <h2> Introduction </h2>
            <p>
                Bagel Gourmet is a popular restaurant chain local to Providence which serves
                breakfast sandwiches. I have gone there often myself, and consequently
                experienced viewing their webpage. The webpage features
                information about one of their restaurants, including its location, menu, and a
                contact page. While exploring their webpage deeper, I found some "secret" options
                in their menu. For example, clicking "menu" in the top bar brings you to the menu page,
                which on the sidebar has a "shopping cart" option for placing online orders. I would
                have not known this option existed otherwise. <b> I decided I will try to redesign their
                main webpage because some of its features are hidden and the layout can be improved,
                also because I like sandwiches. </b>
            </p>
            <div className="img_caption">
                <img src="/images/BagelGourmet/bagel_gourmet_page.png" alt="A picture of Bagel Gourmet's website."/>
                <p> A picture of Bagel Gourmet's <a href="http://bagelgourmetcafe.com/"> website </a>. </p>
            </div>
            <h2> Webpage Problems </h2>
            <p> I will start by creating a list of the issues I have with Bagel Gourmet's website
                so I can address them in my redesign. </p>
            <ul>
                <li> <p className={"info_header"}> Efficiency </p>
                    <ul className="list_sub">
                        <li> The "photos" page, linked in the top menu has only four photos which could
                            be integrated into the main page. By doing so, users don't have to use the navigation
                            menu to look at pictures.
                        </li>
                        <li> One user goal for viewing the website may be finding restaurant hours. The
                            restaurant hours are listed on a small sidebar and have a lot of words directly above
                            them. Putting the hours in a spot which is easily viewable and not cluttered would
                            improve efficiency.
                        </li>
                        <li> The main navigation bar on the top of the webpage is not easily noticeable
                            on the screen. It is not centered and the text in it is small. Users may lose
                            time looking for the menu as a result.
                        </li>
                    </ul>
                </li>
                <li>  <p className={"info_header"}> Learnability </p>
                    <ul className="list_sub">
                        <li> While navigating between pages, the navigation bar changes position,
                            requiring users to learn two different layouts.
                        </li>
                        <li> Some of the text in their description is underlined but isn't a link,
                            which goes against current conventions. Users would have to learn that the
                            underlined text for this specific page isn't always a link.
                        </li>
                    </ul>
                </li>
                <li> <p className={"info_header"}> Memorability </p>
                    <ul className="list_sub">
                        <li> Not all website functions are listed on the main page. This requires users
                            to navigate between different pages and the order of their navigation.
                        </li>
                    </ul>
                </li>
                <li>  <p className={"info_header"}> Accessibility </p>
                    <ul className="list_sub">
                        <li> I uploaded the website to WebAIM Wave to look at its accessibility. WebAIM
                            Wave has issues loading the page visually.
                        </li>
                        <li> A fairly obvious accessibility issue with the page was a lack of alt text on images.
                            Alt text is what a screen reader reads to a user when they encounter a media element. Due to
                            this, blind users would not know what images they are viewing on the page.
                        </li>
                        <li> Some low-contrast errors I was able to ignore. For example, the line "THE BEST
                            BAGELS IN RHODE ISLAND!!" is split between multiple span elements. Since they are
                            close to each other, and the text is the same color, there is a contrast error. However,
                            it makes sense for this single line of text to be the same color.
                        </li>
                        <li> One low-contrast error I agreed with was with the navigation bar on the bottom
                            of the page. Parts of the text in the bar blends in with the background while viewed
                            in grayscale:
                        </li>
                        <img src="/images/BagelGourmet/bagel_gourmet_contrast.png" alt="A picture of the Bagel Gourmet website featuring
                        text in greyscale and a similar gray background with low constrast." />
                    </ul>
                </li>
                <li className="list_header"> Other Miscellaneous Issues</li>
                <ul className="list_sub">
                    <li> The main page has overlapping images, there are delivery hours featured on
                        the page, but not store hours. There is not a clear hierarchy of font colors and
                        sizes.
                    </li>
                </ul>
            </ul>
            <h2> Wireframes </h2>
            <p>
                Now that I have identified problems with Bagel Gourmet's website, I created 3 wireframes
                to address these issues -- one for laptops, one for tablets, and one for phones.
            </p>

            <div className="wireframes">
                <img src="/images/BagelGourmet/wireframe_laptop.png"
                     alt="Picture of annotated wireframe for laptop"/>
                    Wireframe for laptop webpage. <br/><br/>
                    <img src="/images/BagelGourmet/wireframe_tablet.png" alt="Picture of annotated wireframe for tablet"
                         />
                        Wireframe for tablet webpage. <br/><br/>
                        <img src="/images/BagelGourmet/wireframe_phone.png" alt="Picture of annotated wireframe for phone"
                             />
                            Wireframe for phone webpage. <br/><br/>
            </div>
            <h2> Style Guide </h2>
            <p>
                Given the designs I would like to create with my wireframe prototypes, I created a style guide to
                outline how I will create the different components of the webpage. While designing the style guide,
                I tried to keep the color scheme of the webpage as close to Bagel Gourmet's as possible.
            </p>
            <div className="wireframes">
                <img src="/images/BagelGourmet/style_guide.png" alt="An image of the style guide outlining core elements of the webpage."/>
            </div>
            <h2> High Fidelity Prototypes </h2>
            <p>
                After deciding how I wanted to style the new Bagel Gourmet website, I created prototypes of the
                page in Figma based off of my wireframes.
            </p>
            <div className="wireframes">
                <div className={"img_par"}>
                    <img src="/images/BagelGourmet/hifi_laptop.png"
                         alt="Picture of annotated high-fidelity prototype for laptop" />
                    <p> High-fidelity prototype for laptop webpage. </p> <br/><br/>
                </div>
                <div className={"img_par"}>
                    <img src="/images/BagelGourmet/hifi_tablet.png" alt="Picture of annotated high-fidelity prototype for tablet"/>
                    <p> High-fidelity prototype for tablet webpage. </p> <br/><br/>
                </div>
                <div className={"img_par"}>
                    <img src="/images/BagelGourmet/hifi_phone.png" alt="Picture of annotated high-fidelity prototype for phone"/>
                    <p> High-fidelity prototype for phone webpage. </p> <br/><br/>
                </div>
            </div>
            <h2> Responsive Webpage </h2>
            <p> The redesigned Bagel Gourmet homepage can be viewed <a href={"https://sadcapybara137.github.io/responsive_webpage/"}> here </a>.</p> <br/> <br/>
            <h2> Key Takeaways </h2>
            <p> In this project, I had my first experience with redesigning a website. This experience was valuable to me
            because I created a website which I could see deployed in a professional setting. Additionally, I gained
            an appreciation for the time that gets put into designing responsive websites -- it took me a while to figure out
            how to make the page work well for different layouts. In my future work with creating websites, I will use my lessons learned
            in the project in accessibility, like including alt tags and organization to take a step back from my work and consider
            how it can be improved.</p> <br/> <br/>
        </div>
        </div>
    );
}

export default BagelGourmetWrit;