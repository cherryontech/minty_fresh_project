import './Skills.scss';


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
                    <option>Beginner</option>
                    <option>Junior</option>
                    <option>Proficient</option>
                    <option>Expert</option>
                </select>
                <button>delete</button>
            </form>
        </div>

    )
};

export default Skills;