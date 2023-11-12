//MF1-15
import "./FutureGoals.scss"
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';


//TODO: finish the dropdown and add styling
const FutureGoals = () => {
    //TODO: there has to be a better way to make this cleaner, research ways to do so
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');
    const navigate = useNavigate();

    //sets the selected option from the dropdowns
    const handleSelectChange1 = (e) => {
        
        setSelectedOption1(e.target.value);
    };
    const handleSelectChange2 = (e) => {
        
        setSelectedOption2(e.target.value);
    };
    const handleSelectChange3 = (e) => {
        
        setSelectedOption3(e.target.value);
    };

    return (
        <div className="future">
            <div className="future__header">
                    <div className="future__header-back">
                    </div>
                    <div className='future__header-title'>
                        <p>Unleash your best self</p>
                    </div>
                </div>
                <div className="future__progress"> 
                    <div className="future__progress-bar"></div>
                </div>
            <p className="future__step-text">Step 4</p>
            <h2 className="future__title">Let's picture where you want to go</h2>

            <form className="future__form">
                    <label className="future__form-question">
                        <p>What job or role are you hoping to land?</p>
                        <textarea
                        type="text"
                        required
                        name="role-wanted"
                        placeholder="Ex. I'm actively looking to land a Game Illustrator position in a big corporation"/>
                    </label>
                    <label className="future__form-question">
                        <p>Why do you want this job or role?</p>
                        <textarea 
                        type="text"
                        required
                        name="why-this-role"
                        placeholder="Ex. This role would give me the oppotunity to reach many with my art and collaborate with other artists"/>
                    </label>
                    <label className="future__form-question"> 
                        <p>What are the top 3 industries you see yourself working in?</p>
                        <select className="future__form-dropdown" 
                        name="choice-1" 
                        value={selectedOption1} 
                        onChange={handleSelectChange1}>
                            <option value="" disabled selected>Select Industry</option>
                            <option value="">Software Engineer</option>
                            <option value="">Designer</option>
                            <option value="">Product Manager</option>
                        </select>
                        <select className="future__form-dropdown" 
                        name="choice-2" 
                        value={selectedOption2} 
                        onChange={handleSelectChange2}>
                            <option value="" disabled selected>Select Industry</option>
                            <option value="">Software Engineer</option>
                            <option value="">Designer</option>
                            <option value="">Product Manager</option>
                        </select>
                        <select className="future__form-dropdown" 
                        name="choice-3" 
                        value={selectedOption3} 
                        onChange={handleSelectChange3}>
                            <option value="" disabled selected>Select Industry</option>
                            <option value="">Software Engineer</option>
                            <option value="">Designer</option>
                            <option value="">Product Manager</option>
                        </select>
                    </label>
            


            </form>

            <footer>
            <button className="next-button"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/growth');
                    }}>Next</button>
            </footer>

        </div>
    )
}

export default FutureGoals;