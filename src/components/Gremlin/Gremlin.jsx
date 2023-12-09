import './Gremlin.scss';
import gremlin from '../../assets/images/gremlin.png';
import { useNavigate } from 'react-router-dom';


const Gremlin = () => {
    
    const navigate = useNavigate();
    

    return (
        <div className='gremlin'>
            <div className='gremlin__break'></div>
            <div className='gremlin__card'>
                <img className='gremlin__photo'src={gremlin} alt='profile_photo'></img> 
                <p className="gremlin__name"> Gremlin </p>
                <div className='gremlin__break'></div>
            </div>
            <div className='gremlin__symptoms'>
                <h3> Gremlin Symptoms</h3>
                <div className='gremlin__symptoms-card'>
                    <p className='gremlin__symptoms-ability'>Hard Skills: methodologies.map</p>
                    <p className='gremlin__symptoms-level'> LEVEL</p>
                </div>
            </div>
            {/* I might just use the same code twoce just change where its pulling from  */}
            <div className='gremlin__break'></div>
            <div className='gremlin__growth'>
                <h3> Areas for growth </h3>
                {/* MAP THIS */}
                <div className='gremlin__growth-card'>
                    <p className='gremlin__growth-ability'>Interview growths </p>
                    <p className='gremlin__growth-level'> LEVEL</p>
                </div>
            </div>
            <div className='gremlin__break'></div>
            <div className='gremlin__feelings'>
            <h3> Gremlin feelings</h3>
                <ul className='gremlin__feelings-ul'>
                    <li> Self-doubt</li>
                    <li> Anxious </li>
                    <li> Inadequate </li>
                </ul>
            </div>
        <div className='gremlin__button'> 
            <button className="gremlin__button-submit"
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/plan');
                }}
                > 
                make a gameplan
            </button>
        </div>
        </div>
    )
}

export default Gremlin;