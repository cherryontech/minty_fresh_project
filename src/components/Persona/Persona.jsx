import './Persona.scss';
import UserPhoto from '../../assets/images/userimg.jpg'

const Persona = ({strengths, setStrengths, user, setUser}) => {

    // const { compliments, activities, methodologies } = strengths 

    return (
        <div className='persona'>
            <div className='persona__card'>
                <img src={UserPhoto} alt='profile_photo'></img> 
                <p className="persona__name">user.name</p>
                <p className="persona__job">jr front end dev</p>
            </div>
            <div className='persona__superpowers'>
                <h3> Superpowers</h3>
                {/* I HAVE TO MAP THIS */}
                <p className='persona__power'> compliments.map</p>
            </div>
            {/* I might just use the same code twoce just change where its pulling from  */}
            <div className='persona__skill'>
                <h3> Hard Skills </h3>
                {/* MAP THIS */}
                <div className='persona__skill-card'>
                    <p className='persona__skill-ability'>Hard Skills: methodologies.map</p>
                    <p className='persona__skill-level'> LEVEL</p>
                </div>
            </div>
            <div className='persona__skill'> 
                <h3> Transferable Soft Skills</h3>
                {/* MAP THIS */}
                <div className='persona__skill-card'> 
                    <p className='persona__skill-ability'> Soft Skills: activities</p>
                    <p className='persona__skill-level'>LEVEL</p>
                </div>
            </div>
            <div className='persona__translatingskill'>
                <h3>Translating My Skills</h3>
                <p> not sure where this info is coming from but map this too</p>
            </div>
            <div className='persona__proud'>
                <h3> Proudest Moments</h3>
                <p> not sure where this info is coming from but map this too</p>
            </div>
            <div className='ersona__industry'>
                <h3> Industry Interest </h3> 
                <p> not sure where this info is coming from but map this too</p>
            </div>
        </div>
    )
}

export default Persona;