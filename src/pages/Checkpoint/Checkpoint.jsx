import './Checkpoint.scss';
import { useNavigate } from "react-router-dom";

const Checkpoint = () => {
    const navigate = useNavigate();

    return(
        <div className="checkpoint">
            <div className="checkpoint__header">
                <button className="checkpoint__header-back"
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/pastacc')
                }}>
                    <image src='../../assets/icons/icon.png'></image>
                </button>
                
                <div className='checkpoint__header-title'>
                    <p>CREATE A PROFILE</p>
                </div>
            </div>
            <div>
                <div>
                    <h2>Woohoo! You created your profile!</h2>
                    <p>Let's move onto personifying your impostor syndrome by creating your gremlin.</p>
                </div>
            </div>
            <div className='checkpoint__button-container'>
                <button 
                    className="checkpoint__button-next" 
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/gremlinabout');
                    }}
                    > Build my confidence
                </button>
            </div>
        </div>
    )
}


export default Checkpoint;
