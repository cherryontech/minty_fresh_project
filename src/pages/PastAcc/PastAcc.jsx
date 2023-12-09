import './PastAcc.scss';
import { useNavigate } from "react-router-dom";

const PastAccomplishments = ({accomplishments, setAccomplishments}) => {

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        console.log('This is accomplishments', accomplishments)
        setAccomplishments(val => ({...val, [e.target.name]: e.target.value}
        )) 
    };

    return (
        <div className='accomplishments'>
            <div className="accomplishments__header">
                <button className="accomplishments__header-back"
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/strengths')
                }}>
                    <image src='../../assets/icons/icon.png'></image>
                </button>
                
                <div className='accomplishments__header-title'>
                    <p>CREATE A PROFILE</p>
                </div>
            </div>
            <div className='accomplishments__progress'>
                <div className="accomplishments__progress-bar"></div>
                <div className="accomplishments__progress-position"> 
                    <div className='accomplishments__progress-position-1'>
                            <p>1</p>
                    </div>
                    <div className='accomplishments__progress-position-1-b'></div>
                    <div className='accomplishments__progress-position-1-c'></div>
                    <div className='accomplishments__progress-position-2'>
                        <p>2</p>
                    </div>
                    <div className='accomplishments__progress-position-3'>
                        <p>3</p>
                    </div>
                    <div className='accomplishments__progress-position-4'>
                        <p>4</p>
                    </div>
                    <div className='accomplishments__progress-position-5'>
                        <p>5</p>
                    </div>
                </div>
            </div>
            <h1 className='accomplishments__title'>Let's talk about your past & accomplishments</h1>
            <form className='accomplishments__form'>
                <label>
                <div className='accomplishments__instructions'>
                    <p className='accomplishments__instructions-a'> How will you use the skills you previously listed in the role you're pursuing?</p>
                    <p className='accomplishments__instructions-b'> IF YOU HAVE MORE THAN ONE RESPONSE, PLEASE SEPARATE THEM WITH COMMAS.</p>
                </div>
                <div className='accomplishments__form-input'>
                    <textarea className='accomplishments__form-textarea'
                        type="text"
                        required
                        name='accomplishments'
                        placeholder='Ex. I will use my Adobe suite skills to design pixel-perfect game graphics, I will use my communication skills to effectively
                        collaborate with the game development team, I will use my presentation skills to discuss my work during art reviews and pitch 
                        ideas during meetings.'
                        onChange={handleChange}
                    />
                </div>
                </label>
                <label>
                <div className='accomplishments__instructions'>
                    <p className='accomplishments__instructions-a'> Share moments in your career when you felt most proud of yourself?</p>
                    <p className='accomplishments__instructions-b'> IF YOU HAVE MORE THAN ONE RESPONSE, PLEASE SEPARATE THEM WITH COMMAS.</p>
                </div>
                <div className='accomplishments__form-input'>
                    <textarea className='accomplishments__form-textarea'
                        type="text"
                        required
                        name='accomplishments'
                        placeholder='Ex. I was offered a teaching opportunity after an art exhibition, I helped a student build a portfolio that landed them a job.'
                        onChange={handleChange}
                    />
                </div>
                </label>
            </form>
            <div className='accomplishments__footer' >
                <button 
                    className='accomplishments__button' 
                    type='button' 
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/checkpoint');
                    }}
                > Next
                </button>
            </div>
        </div>
    )
}

export default PastAccomplishments;


