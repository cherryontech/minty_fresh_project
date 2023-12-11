//MF1-13
import "./GrowthOpportunities.scss";
import { useNavigate } from 'react-router-dom';
import deleteIcon from '../../assets/icons/delete-icon.png';
import backButton from '../../assets/icons/icon.png';
import weakImage from '../../assets/desktop/7_illustration_weak.png'
import FeelingsPopup from '../../components/FeelingsPopup/FeelingsPopup'
import { useState } from "react";

//Had to comment out the "required" for the text fields outside of the component
//Changed the <image> tag in the header because I was getting an error in inspect

/*TODO:
    -
*/
const GrowthOpportunites = ({growth, setGrowth}) => {

    const navigate = useNavigate();

    //onChange for the text areas to record their name and value
    const handleTextChange = (e) => {
        setGrowth(input => ({...input, [e.target.name]: [e.target.value]}));
    };
    const [showFeelings, setshowFeelings] = useState(false);

    const handelFeelingsModal = () => {
        setshowFeelings(true);
    };


    // updates array with inputs in the skills array
    const handleSkillsChange = (f, index) => {
        const {name, value} = f.target;
        const skillsList = {...growth};
        skillsList.skillSet[index] = {
            ...skillsList.skillSet[index],
            [name]: value,
        };

        console.log(index);
        
        console.log(skillsList.skillSet, "This is list");

        setGrowth(input => ({...input, [f.target.name]: [f.target.value]}));
        setGrowth(skillsList);
    };

    
    //removes the row when delete selected in the skills array
    const handleSkillsRemove = (index) => {
        const copy = {...growth};
        copy.skillSet.splice(index, 1);

        console.log(copy);
        setGrowth(copy);
    }


    //adds row when add row button selected in the skills array
    const handleSkillsAdd = () => {
        const skillList = {...growth};
        skillList.skillSet.push({ skills: '', level: ''});
        setGrowth(skillList);
    };

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
                    <p>CREATE A GREMLIN</p>
                </div>
            </div>
            <div className='growth__progress'>
                <div className="growth__progress-bar"></div>
                <div className="growth__progress-position"> 
                    <div className='growth__progress-position-1'>
                            <p>1</p>
                    </div>
                    <div className='growth__progress-position-1-b'></div>
                    <div className='growth__progress-position-1-c'></div>
                    <div className='growth__progress-position-2'>
                        <p>2</p>
                    </div>
                    <div className='growth__progress-position-3'>
                        <p>3</p>
                    </div>
                    <div className='growth__progress-position-4'>
                        <p>4</p>
                    </div>
                    <div className='growth__progress-position-5'>
                        <p>5</p>
                    </div>
                </div>
            </div>
            <div className="growth__desktop-image">
                <div className="growth__form-inputs">

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
                                    name="impostorSymptom"
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
                        
                        {growth.skillSet.map((singleSkill, index) => (
                        <div key={index} className='skills-array'>

                            <div className='skills__input'>
                                        
                                <div className="inputs-only">
                                    <input 
                                    
                                        // type='text'
                                        className='text_input'
                                        name='skills'
                                        id='skills'
                                        placeholder='Ex. Java'
                                        // value={singleSkill.skills}
                                        onChange={(e) => handleSkillsChange(e, index)}
                                        ></input>
                                        <select className="dropdown"
                                        id='level'
                                        name='level'
                                        // value={singleSkill.level}
                                        onChange={(e) => handleSkillsChange(e, index)}
                                        >
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
                                    {growth.skillSet.length > 1 && (
                                        <button type="button" className="button__delete">
                                            <img className='delete-icon' 
                                            src={deleteIcon} 
                                            alt='Delete'
                                            onClick = {() => handleSkillsRemove(index)}/>
                                        </button>
                                    )}
                                </div>
                    
                                    {growth.skillSet.length - 1 === index && growth.skillSet.length < 5 && (
                                        <div className="add-row">
                                            <button type="button" className="button__add-row"
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
                                    name="whyThisRole"
                                    placeholder="Ex. It ususally shows up when others finish work tasks faster than I do because I end up questioning if I'm good enough to do the job."
                                    onChange={handleTextChange}
                                />
                            </label>
                    </form>
                    <div className="growth__feelings"> 
                        <div> 
                            <p> How unsure are you feeling? </p>
                        </div>
                        <div>
                            <button className="growth__feelings-modal"
                                onClick={() => handelFeelingsModal()}>
                                Feelings list
                            </button>
                        </div>
                    </div>
                </div>
                <img className="weak-image" src={weakImage} alt=""/>
            </div>
            <footer>
        <button className="button__next" type='button' 
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/profile');
                    }}>Next</button>
            </footer>
            <div>
                {showFeelings && (
                    <FeelingsPopup
                    showFeelings = {showFeelings}
                    setshowFeelings = {setshowFeelings}
                    />)}
            </div>
        </div>
    )
}

export default GrowthOpportunites;
