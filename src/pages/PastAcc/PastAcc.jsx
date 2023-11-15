import './PastAcc.scss';
import { useNavigate } from "react-router-dom";

const PastAccomplishments = () => {

    const navigate = useNavigate();

    return (
        <div>
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


