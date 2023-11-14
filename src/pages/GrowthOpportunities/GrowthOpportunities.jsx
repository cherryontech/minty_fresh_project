
//MF1-13
import "./GrowthOpportunities.scss"
// import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

//TODO: finish the dropdown and add styling
const GrowthOpportunites = () => {
    // const [isChecked, setIsChecked] = useState(false);

    //array to work on checkbox functionality later

    const navigate = useNavigate();

    //sets the selected option from the dropdowns
    // const handleCheckboxChange = () => {
        
    //     setIsChecked(!isChecked);
    // };

//TODO: fix checkboxes and do final styling
    return (
        <div className="growth">
            <div className="growth__header">
                <div className="growth__header-back">
                </div>
                <div className='growth__header-title'>
                    <p>Externalize your impostor</p>
                </div>
            </div>
            <div className="growth__progress"> 
                <div className="growth__progress-bar"></div>
            </div>
                <p className="growth__step-text">Step 4</p>
                <h1 className="growth__title">Let's explore your opportunites for growth</h1>
            <form className="growth__form">
                    <label className="growth__question">
                        <p>
                            What's your gremlin name?
                        </p>
                        <textarea 
                            type="text"
                            required
                            name="gremlin-name"
                            placeholder="Ex. Debbie Downer"
                        />
                    </label>
                    <label className="growth__question">
                    What are some things you're working to improve on?<br/>
                        <p>THIS WILL BE A COMPONENT</p>
                            {/* <label classname="growth_checkbox-label">Communication
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
                            </label> */}

                    </label>
                    <label className="growth__question">
                        <p>How does your imposter syndrome show up for you?</p>
                        <textarea 
                            type="text"
                            required
                            name="why-this-role"
                            placeholder="Ex. It ususally shows up when others finish work tasks faster than I do because I end up questioning if I'm good enough to do the job."
                        />
                    </label>
            </form>
            <footer>
                <button className="button__submit"
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/results');
                }}>Submit</button>

            </footer>
        </div>
    )
}

export default GrowthOpportunites;
