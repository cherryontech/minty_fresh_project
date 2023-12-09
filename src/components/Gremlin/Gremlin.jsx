import './Gremlin.scss';
import gremlin from '../../assets/images/gremlin.jpg';
import { useNavigate } from 'react-router-dom';


const Gremlin = () => {

    const navigate = useNavigate();


    return (
        <div className='gremlin'>
        <div div className='gremlin__card'>
            <img src={gremlin} alt='gremlin_photo'></img> 
            <p className="gremlin__name">Your Gremlin</p>
        </div>
        <div className='gremlin__symptoms'>
            <h3> Gremlin Symptoms</h3>
            {/* I HAVE TO MAP THIS */}
            <p className='gremlin__symptom'> issues go here were going to map it </p>
        </div>
        {/* I might just use the same code twoce just change where its pulling from  */}
        <div className='gremlin__growth'>
            <h3> Areas for growth </h3>
            {/* MAP THIS */}
            <div className='gremlin__growth-card'>
                <p className='gremlin__growth-ability'>ability.map</p>
                <p className='gremlin__growth-level'> LEVEL</p>
            </div>
        </div>
        <div className='gremlin__feelings'> 
            <h3> Gremlin feelings</h3>
            {/* MAP THIS */}
                <p className='gremlin__feeling'> feeling in ul mapped</p>
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