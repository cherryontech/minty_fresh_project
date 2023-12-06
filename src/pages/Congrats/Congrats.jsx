//MF1-269
//import scss file
import "./Congrats.scss"
import React from "react";

//import React

//Outline

// write function
const Congrats = () => {

    return (
        <div className="congrats">
            <h1>Congratulations! You finished all the steps!</h1>
            <div className="parent">
            <p className="text-child">The email was sent and you'll be on your way to taming your imposter syndrome by 
                following your game plan. We hope we've made your empowerment journey easier.
            </p>
            </div>
            <div className="parent-2">
            <p className="child-2">Thank you for using Untether!</p>
            
            </div>

            

            <a href="../HomePage.jsx"><button type="button">Return to home page</button></a>
        </div>


    )
}
export default Congrats;




