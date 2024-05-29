import React from "react";

export default function Welcome() {

    const center = {
        display: "flex",
        flexDirection : "column",
        alignItems: 'center', 
    }


const welcome = {
padding: "30px",
fontSize: "2rem"

};

const welcome_message = {
    backgroundColor: "#e9edf0",
    padding : "20px",
    textAlign: "center",
    marginLeft: "70px",
    marginRight: "70px",
    fontSize: "1.2rem"

};



    return (
        <div style={center}>

            <div style={ welcome }>
                <h4> Welcome to Christ Manor Church International</h4>
            </div>
            <div style={ welcome_message }>
                <p> Come and join us at one of our Sunday services. Experience the presence of God in our times of worship and be inspired as we teach from the Bible. Services last for 1 hour and 30 minutes and there is tea and coffee served afterwards. You will be made very welcome.</p>
            </div>

        </div>
    );
}