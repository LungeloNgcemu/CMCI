import React from "react";
import "../styling/dropdownStyle.css"

export default function DropDown() {


    

    return (
     <div className="dropdown">
<button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>

    </div>
)};





// export default function DropDown() {


    

//     return (
//      <div className="containerSelection">

//         {/* <label for="cars">Choose a car:</label> */}

//         <select className="selectView" name="cars" id="cars">
//             <option value="volvo">Volvo</option>
//             <option value="saab">Saab</option>
//             <option value="mercedes">Mercedes</option>
//             <option value="audi">Audi</option>
//         </select>

//     </div>
// )};