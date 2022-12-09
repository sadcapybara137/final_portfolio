import React from 'react'
import "./Personas.css"
import Navbar from "../Components/Navbar";

const StyleTransfer = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className={"page_container"}>
            <div className={"padding_block"}></div>
            <h2> Style Transfer </h2>
            <h3> Introduction </h3>
            <center>
                <p> Have you ever wondered what the Starry Night would look like if it was painted by Monet? Or
                    what your cat would look like as an Andy Warhol painting? Style Transfer is a project which aims
                    to transfer the style from one image to the style of another. This project was a group final project for
                    my Computer Vision class at Brown which was completed in the Fall of 2021.
                </p>
                <img src={"images/StyleTransfer/before_after.png"}/>
            </center>
            <h2> Overview </h2>
            <center>
                <p> In the problem expressed above, the goal of the project is to transfer the style of on image to the style
                of another. However, we don't want to simply transfer the style -- I could completely replace my input image with
                the style image and call it a day. Instead, we transfer the style from the style image while preserving the content
                from the input image. Along with this comes the issue of quantifying what is meant by "style" and what is meant
                by "content".</p>
            </center>
                <h3> CNNs </h3>
            <center>
                <p> To solve the problem given above, we exploit the way CNNs (convolution neural networks) work. CNNs are a class
                of deep learning models which use convolution to learn information from a given input. For simplification, in the
                case of images, a CNN can be thought of learning a series of filters to accomplish a certain task. For example,
                    the CNN model VGG16 is trained on a variety of images to output the category a given input image belongs to. In the case
                of VGG16 and similar CNNs used for classification, one helpful trait of these algorithms for our use case is how
                classifiers manipulate their input data at different stages in the algorithm.
                </p>
                <p> For models like VGG16, when an image is passed through the network, the image is passed through various layers / filters
                before receiving an output. At the "higher" layers in the network -- those which come first -- the model extracts
                high level information from the image. This includes attributes like shapes and the placement of objects. On the other hand,
                at the "lower" layers in the network, the model captures more detailed information from the input image. This includes texture and
                local details. This relationship makes VGG16 an excellent candidate for quantifying content and style in an image -- to do so,
                pass an image through the network, and allow data from the higher layers to represent content and data from the lower layers to
                    represent style.
                </p>
            </center>
                <h3> Our Approach </h3>
            <center>
                <p> Given the method of quantifying content and style above, we created a model which optimizes a content, style pair
                of images to produce a "style transferred" image.</p>
            </center>
            <h2> Results </h2>
            <p> We found the method worked fairly well for our goal of style transfer. In the results below, I will be providing example output images and the effect of changing different parameters
            in the algorithm. </p>
            <h3> Effect of Weighing Content </h3>
            <img className={"img_70"} src={"./images/StyleTransfer/bananas_comp.png"}/>
            <p> I tested the algorithm on the stock bananas image above and a portrait of Marilyn Monroe by Andy Warhol. In the first
            test, the weight of the content was adjusted and the algorithm was run on the same pair of images.</p>
            <div className={"img_row"}>
                <div className={"img_3"}>
                    <img src={"./images/StyleTransfer/bananas_1.png"}/>
                    <p className={"caption_text"}> Content Weight: 256 |  Style Weight: 120</p>
                </div>
                <div className={"img_3"}>
                    <img className={"caption_text"} src={"./images/StyleTransfer/bananas_2.png"}/>
                    <p className={"caption_text"}> Content Weight: 1,024 |  Style Weight: 120</p>
                </div>
                <div className={"img_3"}>
                    <img className={"caption_text"} src={"./images/Home/bananas_3.png"}/>
                    <p className={"caption_text"}> Content Weight: 16,384 |  Style Weight: 120</p>
                </div>
            </div>
            <p> The content weight changes how much the algorithm prioritizes preserving the content
            of the content image. As seen above, when the content weight is relatively small, the output image
            looks less like a bunch of bananas, whereas when the weight is increased, the output looks more
            like bananas.</p>
            <h3> Effect of Weighing Style </h3>
            <img className={"img_70"} src={"./images/StyleTransfer/tomatoes_comp.png"}/>
            <p> I did a similar test, this time changing the style weight and running the model on the pair of images above.</p>
            <div className={"img_row"}>
                <div className={"img_3"}>
                    <img src={"./images/StyleTransfer/tomatoes_2.png"}/>
                    <p className={"caption_text"}> Content Weight: 1,024 |  Style Weight: 1</p>
                </div>
                <div className={"img_3"}>
                    <img className={"caption_text"} src={"./images/StyleTransfer/tomatoes_1.png"}/>
                    <p className={"caption_text"}> Content Weight: 1,024 |  Style Weight: 120</p>
                </div>
                <div className={"img_3"}>
                    <img className={"caption_text"} src={"./images/StyleTransfer/tomatoes_3.png"}/>
                    <p className={"caption_text"}> Content Weight: 1,024 |  Style Weight: 4,096</p>
                </div>
            </div>
            <p> As the style weight is decreased, the image looks more like the original content image, whereas as the style
            weight is increased, the image looks more like the style image.</p>
            <h2> Conclusion </h2>
            <p> Overall, the style transfer algorithm appears to be successful. The parameters of the algorithm can be
            changed by a user to customize the results of style transfer to the user's needs. The program for creating style transferred
            images can be used as a fun tool or as a practical tool for artists trying to imagine a work done in a new style.</p>
            <br/>
            <p>
                I found this project to be personally valuable because it combined my passions for math, programming, and art.
                One thing I love about this program is you never really know what to expect with the output, but the output
                often leaves you like "huh, I guess that is how Van Gogh would paint my cat".
            </p> <br/> <br/>
        </div>
        </div>
    );
}

export default StyleTransfer;