//MF1-269

import "./GremlinAbout.scss"
import { useNavigate } from 'react-router-dom';
import mobileLogo from '../../assets/images/aboutgremlin.png'
// import desktopLogo from '../../assets/images/1-LandingPage-illustration-main-desktop.png'
import topStars from '../../assets/images/1-LandingPage-illustration-stars-top-desktop.png'
import bottomStars from '../../assets/images/1-LandingPage-illustration-stars-bottom-desktop.png'

import iconEmpower from '../../assets/icons/icon_empowerment.png';
import iconExternal from '../../assets/icons/icon_externalize.png';

const GremlinAbout = () => {


    const navigate = useNavigate();


    /*TODO: 
        -add img to the lower section
        -change out gremlin photo 
        */
    return (
        <div className="gremlin-about">
            <div className="gremlin-about__gremlin-container">
                <img className = "mobile-logo" 
                    src={mobileLogo} 
                    alt = "Gremlin Logo. Person flexing."/>
                {/* <img className = "desktop-logo" 
                    src={desktopLogo} 
                    alt = "Gremlin Logo. Person flexing."/> */}
                <h1>About the Gremlin</h1>
                <p>It represents your impostor, meaning your challenges & potential growth.</p>
                <button className="continue-btn" 
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/growth')
                    }}>Continue</button>
            
            </div>
            <div className="gremlin-about__onboarding-container">

                <img className="top-stars"
                    src={topStars} 
                    alt="Blue, white, and red stars on the upper right corner of Empower description"/>
                <img className="bottom-stars" 
                    src={bottomStars} 
                    alt="Blue, white, and red stars on the lower left corner of Empower description"/>

                <h2 className="gremlin-yourself">How does the gremlin help?</h2>
                <br/>
                <h2>
                    <img src={iconEmpower} alt=""/>
                    Better self-reflection
                </h2>
                <p>Your Gremlin helps you see your insecurities outside of yourself so you can reflect on them from a different perspective</p>
                <h2>
                <img src={iconExternal} alt=""></img>Empowerment</h2>
                <p>Externalizing your challenges helps you see them more clearly, making it easier to work on your confidence as you go through your career journey</p>
            </div>
        </div>
    );
};

export default GremlinAbout;
