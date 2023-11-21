import './SkillsLabel.scss'

const SkillsLabel = (props) =>{

    return (
        <div className='skills_label'>
            <label className='text_input'>{props.text_input}</label>
            <label className='level'>{props.level}</label>
        </div>
    );
}

export default SkillsLabel;