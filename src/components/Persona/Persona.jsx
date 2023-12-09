import './Persona.scss';
import UserPhoto from '../../assets/images/userimg.jpg'

const Persona = ({strengths, setStrengths, user, setUser}) => {

    // const { compliments, activities, methodologies } = strengths 
    const {name, role, industry1, industry2, industry3} = user

    return (
        <div className='persona'>
            <div className='persona__break'></div>

            <div className='persona__card'>
                <img className='persona__photo'src={UserPhoto} alt='profile_photo'></img> 
                <p className="persona__name"> {name} </p>
                <p className="persona__job"> {role} </p>
                <div className='persona__break'></div>
            </div>
            <div className='persona__superpowers'>
                <h3> Superpowers</h3>
                <ul>
                    <li>map of compliments</li>
                </ul>
            </div>
            {/* I might just use the same code twoce just change where its pulling from  */}
            <div className='persona__break'></div>
            <div className='persona__skill'>
                <h3> Hard Skills </h3>
                {/* MAP THIS */}
                <div className='persona__skill-card'>
                    <p className='persona__skill-ability'>Hard Skills: methodologies.map</p>
                    <p className='persona__skill-level'> LEVEL</p>
                </div>
            </div>
            <div className='persona__break'></div>
            <div className='persona__skill'> 
                <h3> Transferable Soft Skills</h3>
                {/* MAP THIS */}
                <div className='persona__skill-card'> 
                    <p className='persona__skill-ability'> Soft Skills: activities</p>
                    <p className='persona__skill-level'>LEVEL</p>
                </div>
            </div>
            <div className='persona__break'></div>
            <div className='persona__translatingskill'>
                <h3>Translating My Skills</h3>
                <p> not sure where this info is coming from but map this too</p>
            </div>
            <div className='persona__break'></div>
            <div className='persona__proud'>
                <h3> Proudest Moments</h3>
                <p> not sure where this info is coming from but map this too</p>
            </div>
            <div className='persona__break'></div>
            <div className='persona__industry'>
                <h3> Industry Interest </h3> 
                <ul>
                    <li>{industry1}</li>
                    <li>{industry2}</li>
                    <li>{industry3}</li>
                </ul>
            </div>
        </div>
    )
}

export default Persona;