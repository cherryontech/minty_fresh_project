import './UserProfilePersona.scss';
const UserProfilePersona = () => {

return (

    <div className="user_profile_persona">
        <img src="#" alt="portrait" height="75" width="75"/>
    <h1>Sasha Fierce</h1>
    <h3>Junior front-end programmer</h3>

<div className="user_profile_content">
    <h2 className="user_header">Accomplishments</h2>
    <ul>
        <li>Bullet point</li>
        <li>Bullet point</li>
        <li>Bullet point</li>
    </ul>


<h2 className="user_header">Strengths</h2>
    <ul>
        <li className="skill_li">Strength</li>
        <li className="skill_li">Strength</li>
    </ul>
    <hr></hr>
<div className="skills_container">
    <h2 className="user_header">Hard Skills</h2>

    <div>
    <ul>
    <li className="skill_li_1">CSS</li>
    <li className="skill_li_1">Proficient</li>
    </ul>
    </div>
    
    <div>
        <li className="skill_li_2">HTML</li>
    <li className="skill_li_2">Expert</li>
    </div>

    <div>
        <ul>
    <li className="skill_li_3">JavaScript</li>
    <li className="skill_li_3">Beginner</li>
    </ul>
    </div>

<hr></hr>
<h2 className="user_header">Soft Skills</h2>
<ul>
    <li className="skill_li">Networking</li>
    <li clasName="skill_li">Organization</li>
</ul>
    
</div>
    </div>
    </div>
)
}

export default UserProfilePersona;