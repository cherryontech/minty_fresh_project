import './Skills.scss';
import deleteIcon from '../../assets/icons/Delete.png'


const Skills = () => {
    

    return (
        <div className='skills'>
            <form className="skills__form">
                <input 
                type='text'
                className='text_input'
                placeholder='Ex. Java'
                ></input>
                <select className="dropdown">
                    <option value=''>Beginner</option>
                    <option value=''>Junior</option>
                    <option value=''>Proficient</option>
                    <option value=''>Expert</option>
                </select>
                <button>
                    <img className='delete-icon' 
                    src={deleteIcon} 
                    alt='Delete'/>
                </button>
            </form>
        </div>

    )
};

export default Skills;