import './Strengths.scss';
// import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';


// So here in the {} I am bringing in where I will store the input form informaiton
const Strengths = ({strengths, setStrengths}) => {

    // This is to navigate to the next page
    const navigate = useNavigate();

    // This will save the information of the form to the set state
    const handleChange = (e) => {
        setStrengths(val => ({...val, [e.target.name]: e.target.value}
        )) 
    };


    return (
        <div className='strengths'>
            <div className="strengths__header">
                    <button className="strengths__header-back"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/personaname')
                        }}>
                        <image src='../../assets/icons/icon.png'></image>
                    </button>
                <div className='strengths__header-title'>
                    <p>Unleash your best self</p>
                </div>
            </div>
            <div className="strengths__progress"> 
                <div className="strengths__progress-bar"></div>
            </div>
            <p className="step__text">2/5</p>
            <h2 className="strengths__title">Let's highlight your strengths & skills</h2>
            <form className="strengths__form">
                    <label className="strengths__form-content">
                        What's your most common compliment? 
                        <textarea 
                            type="text"
                            required
                            name="compliments" 
                            placeholder="Ex. I usually get good compliments about my graphic illustrations and my verbal communication."
                            onChange={handleChange}
                        />
                    </label>
                    <label className="strengths__form-content">
                        What activities do you enjoy practicing?
                        <textarea 
                            type="text"
                            required
                            name="activities" 
                            placeholder="Ex. I love to doodle and create graphics for my social media. I enjoy teaching beginners how to paint and I've been doing it for 3 years." 
                            onChange={handleChange}
                        />
                    </label>
                    <label className="strengths__form-content">
                        <p>What tools or methodologies are you most comfortable working with?</p>
                        <textarea 
                            type="text" 
                            required
                            name="methodologies" 
                            placeholder="Ex. I'm most comfortable with using Figma, Adobe, and Canva. I follow atomic design principles when creating my designs."
                            onChange={handleChange}
                        />
                    </label>
                    <footer>
                        <button 
                            className="button__next" 
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/futuregoals');
                            }}
                            > Next
                        </button>
                    </footer>
            </form>
        </div>
    )
}

export default Strengths;


