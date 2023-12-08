import { useNavigate } from "react-router-dom";


const Checkpoint = () => {
    const navigate = useNavigate();

    return(
        <div className="checkpoint">
            <div className="checkpoint__header">
                <button className="checkpoint__header-back"
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/index')
                }}>
                    <image src='../../assets/icons/icon.png'></image>
                </button>
                
                <div className='checkpoint__header-title'>
                    <p>CREATE A PROFILE</p>
                </div>
            </div>
        </div>
    )
}

