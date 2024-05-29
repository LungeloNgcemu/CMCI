import React from "react";
import DropDown from "./dropdown";
import "../styling/navbar.css"


export default function NavBar() {
    return (
        <div className="navbar-container"> <img src='https://th.bing.com/th/id/R.4d402619fcae8378c883b20c25b39044?rik=yNL2DDpyEBL1ng&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fjcx%2f6aM%2fjcx6aM9Mi.png&ehk=NeINREOcidN51mNlCzZ%2fETw28XXOxs3S7zoBAstzgC8%3d&risl=&pid=ImgRaw&r=0' height={ 50 } /> <div style={{display: "flex"}}> <DropDown />  <DropDown /><DropDown /><DropDown /><DropDown /><DropDown /> </div>     </div>


    );
}

 