import React from "react";
import Card from "./card";

export default function CardLine() {

    const line = {
        display : "flex",
        marginLeft: "70px",
        marginRight: "70px",
        paddingTop: "40px",
        justifyContent: "space-between"
    }

    return (
        <div style={ line }>
            <Card
                image={ 'https://templates.hubb.church/Images/Content/2155/928978.jpg' }
                message={ 'Lorem ipsum is a placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.' } 
                />
                 <Card
                image={ 'https://templates.hubb.church/Images/Content/2155/928977.jpg' }
                message={ 'Lorem ipsum is  a placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.' } 
                />
                 <Card
                image={ 'https://templates.hubb.church/Images/Content/2155/928979.jpg' }
                message={ 'Lorem ipsum is a placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.' } 
                />
        </div>
    );
}