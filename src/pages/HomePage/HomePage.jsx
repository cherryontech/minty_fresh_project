import "./HomePage.scss"
import { useNavigate } from 'react-router-dom';
import mobileLogo from '../../assets/images/1-LandingPage-illustration-main-Mobile.png'
import desktopLogo from '../../assets/images/1-LandingPage-illustration-main-desktop.png'
import topStars from '../../assets/images/1-LandingPage-illustration-stars-top-desktop.png'
import bottomStars from '../../assets/images/1-LandingPage-illustration-stars-bottom-desktop.png'
import build from '../../assets/icons/icon_build.png';
import iconEmpower from '../../assets/icons/icon_empowerment.png';
import iconExternal from '../../assets/icons/icon_externalize.png';

const Homepage = () => {


    const navigate = useNavigate();


    //TODO: add img to the lower section
    return (
        <div className="homepage">
            <div className="homepage__get-started-container">
                <img className = "mobile-logo" 
                    src={mobileLogo} 
                    alt = "Untether Logo. Person flexing."/>
                <img className = "desktop-logo" 
                    src={desktopLogo} 
                    alt = "Untether Logo. Person flexing."/>
                <h1>Welcome to Untether</h1>
                <p>A way to tame your imposter syndrome while job hunting</p>
                <button className="get-started-btn" 
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/index')
                    }}>Get Started</button>
            
            </div>
            <div className="homepage__onboarding-container">

                <img className="top-stars"
                    src={topStars} 
                    alt="Blue, white, and red stars on the upper right corner of Untether description"/>
                <img className="bottom-stars" 
                    src={bottomStars} 
                    alt="Blue, white, and red stars on the lower left corner of Untether description"/>

                <h2 className="untether-yourself">How Untether boosts your confidence</h2>
                <h2>
                    <br/>
                    <img className="icon-empower" src={iconEmpower} alt=""/>
                    Unleash your best self
    
                </h2>
                <p>We help you brainstorm about your best qualities to create a personal profile</p>
                <h2>
                <img className="icon-external" src={iconExternal} alt=""/>
                    Externalize your imposter</h2>
                <p>We enable you to personify your insecurities into a gremlin you can tame</p>
                <h2>
                    <img className="icon-build" src={build} alt=""/>
                    Gear up for job interviews</h2>
                <p>We create personalized interview answers as you shape your profile and gremlin</p>
            </div>
        </div>
    );
};

export default Homepage;
