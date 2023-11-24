import { useState } from 'react';
import './Skills.scss';
import deleteIcon from '../../assets/icons/Delete.png'



const Skills = ({skillsPair, setSkillsPair}) => {
    // const [skillsPair, setSkillsPair] = useState({});
    const [ skills, setSkills ] = useState('');
    const [ levels, setLevels ] = useState('');

    //setting the skills value to be added as the key
    const handleChangeSkills = (e) => {
        setSkills(e.target.value);
    }

    //setting the levels value to be added as the value
    const handleChangeLevels = (e) => {
        setSkills(e.target.value);
    }

    //creating skillsPair with a key/value pair of skills: level
    const addSkillsPair = () => {
            if(skills && levels) {
                setSkillsPair((previousSkillsPair) => ({
                    ...previousSkillsPair,
                    [skills]: levels,
                }));
            setSkills('');
            setLevels('');
            console.log(skillsPair);
        };
    };

    

    return (
        <div className='skills'>
            <form className="skills__form">

                        
            <input 
                type='text'
                className='text_input'
                name='skills'
                value={skills}
                placeholder='Ex. Java'
                onChange={handleChangeSkills}
                ></input>
                <select className="dropdown">
                    <option 
                    value='Beginner'
                    onChange={handleChangeLevels}
                    >
                        Beginner
                    </option>
                    <option 
                    value='Proficient'
                    onChange={handleChangeLevels}
                    >
                        Proficient
                    </option>
                    <option 
                    value='Expert'
                    onChange={handleChangeLevels}
                    >
                        Expert
                    </option>
                </select>
                {/* <button
                onClick={addSkillsPair}>
                    pairs
                </button> */}
                <button>
                    <img className='delete-icon' 
                    src={deleteIcon} 
                    alt='Delete'/>
                </button>
            </form>

        </div>

    );
};

export default Skills;