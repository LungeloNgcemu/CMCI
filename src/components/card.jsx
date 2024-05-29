import React from "react";

export default function Card({ image, message }) {

    const styleImage = {
        height: "300px",
        width: "300px",
        objectFit: "cover"
    }

    const container = {
        width: "300px",
        height: "500px",
        borderRadius: "20px"

    }

    return (
        <div style={ container }>
            <img style={ styleImage } src={ image } />
            <p style={ { padding: "20px" } }>{ message }</p>
        </div>

    );
}


