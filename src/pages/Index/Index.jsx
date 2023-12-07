import './Index.scss';
import { useNavigate } from 'react-router-dom';
import communicate from '../../assets/icons/communicate.png'
import geremlinicon from '../../assets/icons/gremlinyellow.png'
import badgeicon  from '../../assets/icons/badgeyellow.png'
import ideaicon from '../../assets/icons/ideayellow.png'
import blastofficon from '../../assets/icons/blastoffyellow.png'

const Index = () => {

    const navigate = useNavigate();
    return (
        <div className='index'> 
        <div className='index__header'>
            <button className="index__back"
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/')
                }}>
                <image src='../../assets/icons/icon.png'></image>
            </button>
        </div>
            <h2 className='index__title'> Impostor syndrome tethering you down? </h2>
            <p className='index__intro'> Here are Untether's steps for building your confidence:</p>
            <div className='index__step'> 
                <div className='index__box'>
                    <div>
                        <img className='index__image' src={communicate} alt='create_profile_img'></img>
                    </div>
                    <div className='index__number'>
                        <p>1</p>
                    </div>
                    <div className='index__box-sub'>
                        <div className='index__box-title'>
                            <p>Create a profile</p>
                        </div>
                        <div className='index__content'>
                            <p>To do this, we'll ask you about your qualities and background.</p>
                        </div>
                    </div>
                </div>
                <div className='index__box'>
                    <div>
                        <img className='index__image' src={geremlinicon} alt='create_profile_img'></img>
                    </div>
                    <div className='index__number'>
                        <p>2</p>
                    </div>
                    <div className='index__box-sub'>
                        <div className='index__box-title'>
                            <p>Create a gremlin</p>
                        </div>
                        <div className='index__content'>
                            <p>To do this, we'll ask you about how you experience impostor syndrome.</p>
                        </div>
                    </div>
                </div>
                <div className='index__box'>
                <div>
                    <img className='index__image' src={badgeicon} alt='nadgeimg'></img>
                </div>                    
                <div className='index__number'>
                        <p>3</p>
                    </div>
                    <div className='index__box-sub'>
                        <div className='index__box-title'>
                            <p>Review your information</p>
                        </div>
                        <div className='index__content'>
                            <p>You've built your profile and gremlin! Let's review the information and edit as you see fit.</p>
                        </div>
                    </div>
                </div>
                <div className='index__box'>
                <div>
                    <img className='index__image' src={ideaicon} alt='create_profile_img'></img>
                </div>
                    <div className='index__number'>
                        <p>4</p>
                    </div>
                    <div className='index__box-sub'>
                        <div className='index__box-title'>
                            <p>Start a game plan</p>
                        </div>
                        <div className='index__content'>
                            <p>Then we'll help you start making a game plan by giving you resources to review and a game plan template.</p>
                        </div>
                    </div>
                </div>
                <div className='index__box'>
                <div>
                    <img className='index__image' src={blastofficon} alt='create_profile_img'></img>
                </div>                    <div className='index__number'>
                        <p>5</p>
                    </div>
                    <div className='index__box-sub'>
                        <div className='index__box-title'>
                            <p>Send ana email</p>
                        </div>
                        <div className='index__content'>
                            <p>Finally, we'll send you an email with all your hard work so you can empower yourself in the future!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='index__button-container'>
                <button 
                    className="index__button-next" 
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/personaname');
                    }}
                    > Build my confidence
                </button>
            </div>
        </div>
    )
}

export default Index;