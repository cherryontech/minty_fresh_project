
//MF1-13
import "./GrowthOpportunities.scss"
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

//TODO: finish the dropdown and add styling
const GrowthOpportunites = () => {
    const [isChecked, setIsChecked] = useState(false);

    //array to work on checkbox functionality later

    const navigate = useNavigate();

    //sets the selected option from the dropdowns
    const handleCheckboxChange = () => {
        
        setIsChecked(!isChecked);
    };

//TODO: fix checkboxes and do final styling
    return (
        <div className="growth">
            <div className="growth__header">
                <button className="growth__header-back"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/futuregoals')
                }}>
                    <image src='../../assets/icons/icon.png'></image>
                </button>
                <div className='growth__header-title'>
                    <p>Externalize your impostor</p>
                </div>
            </div>
            <div className="growth__progress"> 
                <div className="growth__progress-bar"></div>
            </div>
            <p className='growth__progress-number'>5/5</p>
            <div className="growth_header-container">
                <h1 className="title">Let's explore your opportunites for growth</h1>
            </div>
            <form method="post" onSubmit={""}>
                <div className="growth_form">
                
                    <label className="growth_question">
                        <p>What's your gremlin name?</p>
                        <textarea className="growth_question-text-area"
                        required
                        name="gremlin-name"
                        placeholder="Ex. Debbie Downer"/>
                    </label>
                    <label className="growth_question">
                    What are some things you're working to improve on?<br/>

                            <label classname="growth_checkbox-label">Communication
                                <input type="checkbox" 
                                className="growth_checkbox"
                                id="communication"
                                name="growth"
                                value="communication"
                                checked={isChecked}
                                onChange={handleCheckboxChange}/>
                            </label>
                        
                            <label classname="growth_checkbox-label">Self-perception
                                <input type="checkbox" 
                                className="growth_checkbox"
                                id="self-perception"
                                name="growth"
                                value="self-perception"
                                checked={isChecked}
                                onChange={setIsChecked}/>
                            </label>
                            
                            <label classname="growth_checkbox-label">Confidence
                                <input type="checkbox" 
                                className="growth_checkbox"
                                id="confidence"
                                name="growth"
                                value="confidence"
                                checked={isChecked}
                                onChange={setIsChecked}/>
                            </label>
                            
                            <label classname="growth_checkbox-label">Preparing for an interview
                                <input type="checkbox" 
                                className="growth_checkbox"
                                id="interview-preparation"
                                name="growth"
                                value="interview-preparation"
                                checked={isChecked}
                                onChange={setIsChecked}/>
                            </label>
                            
                            <label classname="growth_checkbox-label">Technical Skills
                                <input type="checkbox" 
                                className="growth_checkbox"
                                id="technical-skills"
                                name="growth"
                                value="technical-skils"
                                checked={isChecked}
                                onChange={setIsChecked}/>
                            </label>
                            
                            <label classname="growth_checkbox-label">Other
                                <input type="checkbox" 
                                className="growth_checkbox"
                                id="other"
                                name="growth"
                                value="other"
                                checked={isChecked}
                                onChange={setIsChecked}/>
                            </label>

                    </label>
                    <label className="growth_question">
                        <p>How does your imposter syndrome show up for you?</p>
                        <textarea className="growth_question-text-area"
                        required
                        name="why-this-role"
                        placeholder="Ex. It ususally shows up when others finish work tasks faster than I do because I end up questioning if I'm good enough to do the job."/>
                    </label>

                </div>
            
            </form>
            {/* set to persona page at the moment */}
            <button className="submit-button"
            onClick={(e) => {
                e.preventDefault();
                navigate('/results');
            }}>Submit</button>
        </div>
    )
}

export default GrowthOpportunites;
