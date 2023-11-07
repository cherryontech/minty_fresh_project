import './Persona.scss';


const Persona = ({strengths, setStrengths, user, setUser}) => {

    const { compliments, activities, methodologies } = strengths 

    return (
        <div className='persona'>
            <div className='persona__card'>
                    <p className="persona__name">{user}</p>
                    <p className="persona__job">jr front end dev</p>
                <div className='persona__avatar'></div>
                <div className='persona__content'>
                    <p className='persona__content-subhead'>Strentghts: {compliments}</p>
                </div>
                <div className='persona__content'>
                    <p className='persona__content-subhead'> Soft Skills: {activities}</p>
                    <p className='persona__content-subhead'>Hard Skills: {methodologies}</p>
                </div>
                <div className='persona__content'>
                    <p className='persona__content-subhead'>Accomplishments:</p>
                    <ul className='persona__content-list'>
                        <li>Might have to map this</li>
                        <li>Might have to map this</li>
                        <li>Might have to map this</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Persona;

            // * <p>{strengths.compliments}</p> */}
