import './PastAcc.scss';
import { useNavigate } from "react-router-dom";

const PastAccomplishments = () => {

    const navigate = useNavigate();

    return (
        <div className='accomplishments'>
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
            <h1>Let's talk about your past accomplishments</h1>

            <p>What's your career backstory?</p>

            <input type='text' name='textbox' placeholder='Ex. For the past 6 years, I have been 
            working in marketing. I have been teaching how to paint for the last 3 years.'></input>

            <p>Can you describe moments in your career when you felt most proud of yourself?</p>

            <input type='text' name='textbox' placeholder='Ex. One of my proudest moments was when I was offered
            an art teaching opportunity after an exhibition.'></input>

            <p>Do you have any notable certifications or awards you'd like to highlight?</p>
            <input type='text' name='textbox' placeholder='Ex. I won a graphic design challenge posted by X 
            company blah blah blah blah blah.'></input>

            <button type='button' onClick={(e) => {
                    e.preventDefault();
                    navigate('/strengths');
                }}>Next</button>
        </div>
    )
}

export default PastAccomplishments;


