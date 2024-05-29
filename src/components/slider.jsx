import React from "react";
import { Carousel } from "antd";

const imageStyle = {
    height: "80vh",
    width: "100%",
   overFlow: "clip"
}



export default function Slider() {
    return (


        <Carousel autoplay style={ { height: "80vh"} } >
            <div >
                <img src="https://th.bing.com/th/id/R.79ef53be106d394776d189b6cd2c0eea?rik=1nFq2GBbPrp0UQ&pid=ImgRaw&r=0" style={ imageStyle } />
            </div>
            <div>
                <img src="https://th.bing.com/th/id/R.79ef53be106d394776d189b6cd2c0eea?rik=1nFq2GBbPrp0UQ&pid=ImgRaw&r=0" style={ imageStyle } />
            </div>
            <div>
                <img src="https://th.bing.com/th/id/R.79ef53be106d394776d189b6cd2c0eea?rik=1nFq2GBbPrp0UQ&pid=ImgRaw&r=0" style={ imageStyle } />
            </div>
            <div>
                <img src="https://th.bing.com/th/id/R.79ef53be106d394776d189b6cd2c0eea?rik=1nFq2GBbPrp0UQ&pid=ImgRaw&r=0" style={ imageStyle } />
            </div>
        </Carousel>

    );
}