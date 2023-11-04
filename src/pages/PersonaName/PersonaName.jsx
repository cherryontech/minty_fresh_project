import { useNavigate } from "react-router-dom";
import "./PersonaName.scss"

const PersonaName = ({user, setUser}) => {

    const navigate = useNavigate();
    const handleChange = (e) => {
        setUser(val => ({...val, [e.target.name]: e.target.value}
        )) 
    };

    return (
        <div className='persona__container'>
            <div className="persona__header">
                <div className="persona__header-back">
                </div>
                <div className='persona__header-title'>
                    <p>Unleash your best self</p>
                </div>
            </div>
            <div className="persona__progress"> 
                <div className="persona__progress-bar"></div>
            </div>
            <p className='persona__progress-number'>1/5</p>
            <h2 className="persona__title">Let's start with a name</h2>
            <form className="persona__form">
                <label className="persona__form-content">
                    What's your name? 
                    <input 
                        type="text"
                        required
                        name="name" 
                        placeholder="Ex. Sasha Feirce"
                        onChange={handleChange}
                    />
                </label>
            </form>
            <footer>
                <button className="button__next" type='button' 
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/strengths');
                    }}>Next</button>
            </footer>
        </div>
    )
}

export default PersonaName;

