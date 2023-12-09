import './Persona.scss';
import UserPhoto from '../../assets/images/Avatar-1.png'

const Persona = () => {

    return (
        <div className='persona'>
            <div className='persona__break'></div>

            <div className='persona__card'>
                <img className='persona__photo'src={UserPhoto} alt='profile_photo'></img> 
                <p className="persona__name"> Sasha Feirce </p>
                <p className="persona__job"> Jr front-end proramer </p>
                <div className='persona__break'></div>
            </div>
            <div className='persona__superpowers'>
                <h3> Superpowers</h3>
                <ul className='persona__superpowers-ul'>
                    <li>Fostering collaberation</li>
                    <li>Maintaining team moral</li>
                </ul>
            </div>
            <div className='persona__break'></div>
            <div className='persona__skill'>
                <h3> Hard Skills </h3>
                <div className='persona__skill-card'>
                    <p className='persona__skill-ability'>CSS</p>
                    <p className='persona__skill-level'> Proficient</p>
                </div>
                <div className='persona__skill-card'>
                    <p className='persona__skill-ability'>HTML</p>
                    <p className='persona__skill-level'>Expert</p>
                </div>
                <div className='persona__skill-card'>
                    <p className='persona__skill-ability'>Javascript</p>
                    <p className='persona__skill-level'>Beginner</p>
                </div>
            </div>
            <div className='persona__break'></div>
            <div className='persona__skill'> 
                <h3> Transferable Soft Skills</h3>
                <div className='persona__skill-card'> 
                    <p className='persona__skill-ability'>Networking</p>
                    <p className='persona__skill-level'>Proficient</p>
                </div>
                <div className='persona__skill-card'> 
                    <p className='persona__skill-ability'>Organization</p>
                    <p className='persona__skill-level'>Expert</p>
                </div>
            </div>
            <div className='persona__break'></div>
            <div className='persona__translatingskill'>
                <h3>Translating My Skills</h3>
                <ul className='persona__translatingskill-ul'>
                    <li>I will use my coding skills to develop user-friendly digital products.</li>
                    <li>I will use my networking skills to build connections so I can stay informed about the latest technologies.</li>
                    <li>I will use my organization skills to maintain documentation for code and  track bugs and tasks.</li>
                </ul>
            </div>
            <div className='persona__break'></div>
            <div className='persona__proud'>
                <h3> Proudest Moments</h3>
                <ul className='persona__proud-ul'>
                    <li>Acquired a client through word of mouth </li>
                    <li>Won a hackathon</li>
                    <li>Certification from Berkeley Coding Boot Camp</li>
                </ul>
            </div>
            <div className='persona__break'></div>
            <div className='persona__industry'>
                <h3> Industry Interest </h3> 
                <ul className='persona__industry-ul'>
                    <li>Tech</li>
                    <li>Retail</li>
                    <li>Health & wellness</li>
                </ul>
            </div>
        </div>
    )
}

export default Persona;