import './Strengths.scss';
import Header from '../../components/Header/Header';
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
            <section> 
                <Header/>
            </section>
            <p className="step__text"> Step 2 </p>
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
                        What activities do you enjoy and have a lot of practice doing?
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
                                navigate('/results');
                            }}
                            > Next
                        </button>
                    </footer>
            </form>
        </div>
    )
}

export default Strengths;


