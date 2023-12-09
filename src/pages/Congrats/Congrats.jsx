//MF1-269
//import scss file
import "./Congrats.scss"
import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/desktop/1_illustration_intro.png";

//import React

//Outline

// write function
const Congrats = () => {

    const navigate = useNavigate();

    return (
        <div className="congrats">
            <div className="image">

                <div className="container">

                <h1>Congratulations! You finished all the steps!</h1>
                <br/>
                <br/>
                <div className="parent">
                <p className="text-child">The email was sent and you'll be on your way to taming your imposter syndrome by 
                    following your game plan. We hope we've made your empowerment journey easier.
                </p>
                </div>
                <div className="parent-2">
                <p className="child-2">Thank you for using Untether!</p>

       
                </div>

                <button className="continue-btn" 
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/')
                    }}>Return to Home Page</button>
                
            </div>
            <img className="background" src={backgroundImage} alt=""/>
            
            </div>
        {/* <footer> */}


        {/* </footer> */}

        </div>


    )
}
export default Congrats;




