import './Checkpoint.scss';
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/desktop/6_illustration_break.png";

const Checkpoint = () => {


        const navigate = useNavigate();
    
        return (
            <div className="checkpoint">
                <div className="image">
    
                    <div className="container">
    
                    <h1>Woohoo! You created your profile!</h1>
                    <br/>
                    <br/>
                    <div className="parent">
                    <p className="text-child">And you’re nearly done! Let’s move onto personifying your impostor syndrome. Your answers to the next few questions will create your gremlin. 
                    </p>
                    </div>
                    <div className="parent-2">
                    
    
           
                    </div>
    
                    <button className="continue-btn" 
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/gremlinabout')
                        }}>Keep it going</button>
                    
                </div>
                <img className="background" src={backgroundImage} alt=""/>
                
                </div>
            {/* <footer> */}
    
    
            {/* </footer> */}
    
            </div>
    
    
        )
    
    // const navigate = useNavigate();

    // return(
    //     <div className="checkpoint">
    //         <div className="checkpoint__header">
    //             <button className="checkpoint__header-back"
    //             onClick={(e) => {
    //                 e.preventDefault();
    //                 navigate('/pastacc')
    //             }}>
    //                 <image src='../../assets/icons/icon.png'></image>
    //             </button>
                
    //             <div className='checkpoint__header-title'>
    //                 <p>CREATE A PROFILE</p>
    //             </div>
    //         </div>
    //         <div>
    //             <div>
    //                 <h2>Woohoo! You created your profile!</h2>
    //                 <p>Let's move onto personifying your impostor syndrome by creating your gremlin.</p>
    //             </div>
    //         </div>
    //         <div className='checkpoint__button-container'>
    //             <button 
    //                 className="checkpoint__button-next" 
    //                 onClick={(e) => {
    //                     e.preventDefault();
    //                     navigate('/gremlinabout');
    //                 }}
    //                 > Build my confidence
    //             </button>
    //         </div>
    //     </div>
    // )
}


export default Checkpoint;
