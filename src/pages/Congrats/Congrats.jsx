//MF1-269
//import scss file
import "./Congrats.scss"
import React from "react";
import  {useNavigate} from 'react-router-dom'

const Congrats = () => {

    const navigate = useNavigate();

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

            

            <button className="get-started-btn" 
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/')
                    }}>Back to Homepage</button>
        </div>


    )
}
export default Congrats;




