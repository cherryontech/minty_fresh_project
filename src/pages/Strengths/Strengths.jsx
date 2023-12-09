import './Strengths.scss';
// import Header from '../../components/Header/Header';
import deleteIcon from '../../assets/icons/delete-icon.png';
import { useNavigate } from 'react-router-dom';


// So here in the {} I am bringing in where I will store the input form informaiton
const Strengths = ({strengths, setStrengths}) => {

    // This is to navigate to the next page
    const navigate = useNavigate();

    // This will save the information of the form to the set state
    const handleChange = (e) => {
        setStrengths(val => ({...val, [e.target.name]: e.target.value}
        )) 
    };



        
     //removes the row when delete selected in the skills array
    const handleToolsRemove = (index) => {
        const copy = {...strengths};
        copy.tools.splice(index, 1);
    
        console.log(copy);
        setStrengths(copy);
    };
    
    
    //adds row when add row button selected in the skills array
    const handleToolsAdd = () => {
        const toolList = {...strengths};
        toolList.tools.push({ tools: '', level: ''});
        setStrengths(toolList);
    };

    
     // updates array with inputs in the skills array
    const handleToolsChange = (f, index) => {
        const {name, value} = f.target;
        const toolsList = {...strengths};
        toolsList.tools[index] = {
            ...toolsList.tools[index],
            [name]: value,
        };

        console.log(index);
        
        console.log(toolsList.tools, "This is list");

        setStrengths(input => ({...input, [f.target.name]: [f.target.value]}));
        setStrengths(toolsList);
    };

    // updates array with inputs in the skills array
    const handleSkillsChange = (f, index) => {
        const {name, value} = f.target;
        const skillsList = {...strengths};
        skillsList.softSkills[index] = {
            ...skillsList.softSkills[index],
            [name]: value,
            };
        
        console.log(index);
                
        console.log(skillsList.softSkills, "This is list");
        
        setStrengths(input => ({...input, [f.target.name]: [f.target.value]}));
                setStrengths(skillsList);
    };
        
    //removes the row when delete selected in the skills array
    const handleSkillsRemove = (index) => {
        const copy = {...strengths};
        copy.softSkills.splice(index, 1);

        console.log(copy);
        setStrengths(copy);
    };


    //adds row when add row button selected in the skills array
    const handleSkillsAdd = () => {
        const skillList = {...strengths};
        skillList.softSkills.push({ skills: '', level: ''});
        setStrengths(skillList);
    };


    return (
        <div className='strengths'>
            <div className="strengths__header">
                    <button className="strengths__header-back"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/personaname')
                        }}>
                        <image src='../../assets/icons/icon.png'></image>
                    </button>
                <div className='strengths__header-title'>
                    <p>CREATE A PROFILE</p>
                </div>
            </div>
            <div className='strengths__progress'>
                <div className="strengths__progress-bar"></div>
                <div className="strengths__progress-position"> 
                    <div className='strengths__progress-position-1'>
                        <p>1</p>
                    </div>
                    <div className='strengths__progress-position-1-b'></div>
                    <div className='strengths__progress-position-1-c'></div>
                    <div className='strengths__progress-position-2'>
                        <p>2</p>
                    </div>
                    <div className='strengths__progress-position-3'>
                        <p>3</p>
                    </div>
                    <div className='strengths__progress-position-4'>
                        <p>4</p>
                    </div>
                    <div className='strengths__progress-position-5'>
                        <p>5</p>
                    </div>
                </div>
            </div>
            <h2 className="strengths__title">Let's highlight your strengths & skills</h2>
            <form className="strengths__form">
                    <label className="strengths__form-content">
                        What's your most common compliment? 
                        <textarea 
                            type="text"
                            required
                            name="compliments" 
                            placeholder="Ex. I usually get good compliments about my graphic illustrations and my verbal communication."
                            onChange={handleChange}
                        />
                    </label>
            <label className="strengths__form-content">
                What tools or methodologies are you most comfortable working with?
                <br/>
                <h6>PLEASE LIMIT YOUR RESPONSE TO 5 TOOLS</h6>
                    <div className="tools-component">
                        <div className="tools-label">
                            <label className="text-label">
                                Tool/Methodology
                            </label>
                            <label className="dropdown-label">
                                Skills Level
                            </label>
                        </div>
                        
                        {strengths.tools.map((singleTool, index) => (
                            <div key={index} className='tools-array'>

                                <div className='tools__input'>
                                        
                                    <div className="inputs-only">
                                        <input 
                                        className='text_input'
                                        name='tools'
                                        id='tools'
                                        placeholder='Ex. JIRA'
                                        onChange={(e) => handleToolsChange(e, index)}
                                        ></input>
                                        <select className="dropdown"
                                        id='level'
                                        name='level'
                                        onChange={(e) => handleToolsChange(e, index)}
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
                                    {strengths.tools.length > 1 && (
                                        <button type="button" className=".button__delete">
                                            <img className='delete-icon' 
                                            src={deleteIcon} 
                                            alt='Delete'
                                            onClick = {() => handleToolsRemove(index)}/>
                                        </button>
                                    )}
                                </div>
                    
                                {strengths.tools.length - 1 === index && strengths.tools.length < 5 && (
                                    <div className="add-row">
                                        <button type="button" className=".button__add-row"
                                        onClick={handleToolsAdd}>+ Add Row</button>
                                    </div>
                                )}
                        </div>
                    ))}               
                </div>
            </label>
             <label className="strengths__form-content">
                What intrapersonal skills do you have that can be applied to any role?
                <br/>
                <h6>PLEASE LIMIT YOUR RESPONSE TO 5 SKILLS</h6>
                    <div className="skills-component">
                        <div className="skills-label">
                            <label className="text-label">
                                Skill
                            </label>
                            <label className="dropdown-label">
                                Skills Level
                            </label>
                        </div>
                        
                        {strengths.softSkills.map((singleSkill, index) => (
                            <div key={index} className='skills-array'>

                                <div className='skills__input'>
                                        
                                    <div className="inputs-only">
                                        <input 
                                        className='text_input'
                                        name='skills'
                                        // id='skills'
                                        placeholder='Ex. JIRA'
                                        onChange={(e) => handleSkillsChange(e, index)}
                                        ></input>
                                        <select className="dropdown"
                                        id='level'
                                        name='level'
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
                                    {strengths.softSkills.length > 1 && (
                                        <button type="button" className=".button__delete">
                                            <img className='delete-icon' 
                                            src={deleteIcon} 
                                            alt='Delete'
                                            onClick = {() => handleSkillsRemove(index)}/>
                                        </button>
                                    )}
                                </div>
                    
                                {strengths.softSkills.length - 1 === index && strengths.softSkills.length < 5 && (
                                    <div className="add-row">
                                        <button type="button" className=".button__add-row"
                                        onClick={handleSkillsAdd}>+ Add Row</button>
                                    </div>
                                )}
                        </div>
                    ))}               
                </div>
            </label>        
                    <footer>
                        <button 
                            className="button__next" 
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/pastacc');
                            }}
                            > Next
                        </button>
                    </footer>
            </form>
        </div>
    )
}

export default Strengths;


