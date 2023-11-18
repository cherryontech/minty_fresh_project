import './Skills.scss';


const Skills = () => {
    

    return (
        <div className='skills'>
            <form className="skills__form">
                <input 
                type='text'
                className='text_input'
                ></input>
                <select className="dropdown">
                    <option>Option 1</option>
                </select>
                <button>delete</button>
            </form>
        </div>

    )
};

export default Skills;