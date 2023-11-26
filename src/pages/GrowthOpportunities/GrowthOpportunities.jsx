//MF1-13
import "./GrowthOpportunities.scss";
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import deleteIcon from '../../assets/icons/delete-icon.png';
import backButton from '../../assets/icons/icon.png';


//Had to comment out the "required" for the text fields outside of the component
//Changed the <image> tag in the header because I was getting an error in inspect

//TODO: pass text field info
const GrowthOpportunites = () => {

    //growth skills to pass onto profile
    const [skillsList, setSkillsList] = useState([{skills: "", level: ""}]);
    const [skillsText, setSkillsText] = useState({name: ""});


    const navigate = useNavigate();

    const handleTextChange = (e) => {
        setSkillsText(input => ({...input, [e.target.name]: [e.target.value]}))
    };

    //adds row when add row button selected in the skills array
    const handleSkillsAdd = () => {
        setSkillsList([...skillsList, {skills: "", level: ""}]);
    };
    
    //removes the row when delete selected in the skills array
    const handleSkillsRemove = (index) => {
        const copy = [...skillsList];
        copy.splice(index, 1);
        setSkillsList(copy);
    }

    //updates array with inputs in the skills array
    const handleSkillChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...skillsList];
        list[index][name] = value;
        setSkillsList(list);
    }


    return (
        <div className="growth">
            <div className="growth__header">
                <button className="growth__header-back"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/futuregoals')
                }}>
                    <img src={backButton} alt="back button"/>
                </button>
                <div className='growth__header-title'>
                    <p>Externalize your impostor</p>
                </div>
            </div>
            <div className="growth__progress"> 
                <div className="growth__progress-bar"></div>
            </div>
            <p className='growth__progress-number'>5/5</p>
                <h1 className="growth__title">Let's explore your opportunites for growth</h1>
            <form className="growth__form">
                    <label className="growth__question">
                        <p>
                            How does your impostor syndrome show up?
                        </p>
                        <h6>IF YOU HAVE MORE THAN ONE RESPONE, PLEASE SEPARATE WITH COMMAS</h6>
                        <textarea 
                            type="text"
                            // required
                            name="impostor-symptom"
                            placeholder="Ex. I question if I`m actually qualified to do the job, I compare myself to others when they get tasks done faster than I do."
                            onChange={handleTextChange}
                        />
                    </label>
                    <label className="growth__question">
                    What are some things you're working to improve on?<br/>
                    <h6>PLEASE LIMIT YOUR RESPONSE TO 5 GROWTH AREAS</h6>
                        <div className="skills-component">
                            <div className="skills-label">
                                <label className="text-label"
                                // for='skills'
                                >
                                    Growth Area
                                </label>
                                <label className="dropdown-label"
                                // for="level"
                                >
                                    Skills Level
                                </label>
                            </div>
                
                {skillsList.map((singleSkill, index) => (
                <div key={index} className='skills-array'>

                    <div className='skills__input'>
                        <div className="inputs-only">
                            <input 
                                type='text'
                                className='text_input'
                                name='skills'
                                id='skills'
                                placeholder='Ex. Java'
                                value={singleSkill.skills}
                                onChange={(e) => handleSkillChange(e, index)}
                                ></input>
                                <select className="dropdown"
                                    id='level'
                                    name='level'
                                    value={singleSkill.level}
                                    onChange={(e) => handleSkillChange(e, index)}>
                                    <option value="">
                                        Select an Option:
                                    </option>
                                    <option value="Beginner">
                                        Beginner
                                    </option>
                                    <option value="Proficient">
                                        Proficient
                                    </option>
                                    <option value="Expert">
                                        Expert
                                    </option>
                                </select>
                            </div>
                            {skillsList.length > 1 && (
                                <button type="button" className=".button__delete">
                                    <img className='delete-icon' 
                                    src={deleteIcon} 
                                    alt='Delete'
                                    onClick = {() => handleSkillsRemove(index)}/>
                                </button>
                            )}
                         </div>
            
                            {skillsList.length - 1 === index && skillsList.length < 5 && (
                                <div className="add-row">
                                    <button type="button" className=".button__add-row"
                                    onClick={handleSkillsAdd}>+ Add Row</button>
                                </div>
                                )}
                </div>
           ))}             
                        </div>
                    </label>
                    <label className="growth__question">
                        <p>What feelings arise when your gremlin starts getting to you?</p>
                        <h6>PLEASE LIMIT YOUR RESPONSE TO 5 FEELINGS</h6>
                        <textarea 
                            type="text"
                            // required
                            name="why-this-role"
                            placeholder="Ex. It ususally shows up when others finish work tasks faster than I do because I end up questioning if I'm good enough to do the job."
                            onChange={handleTextChange}
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
