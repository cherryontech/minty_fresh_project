import './SendEmail.scss'
import { useNavigate } from 'react-router-dom';
import envelopeImage from '../../assets/images/illustration_email.png';


/*TODO: 
    -setup page nav 
    -add email functionality to pass from the first page and into the text field
    -validation for the consent
    -send email*/

const SendEmail = () => {

    const navigate = useNavigate();

    return (
        <div className='email'>

            <div className='email__with-image'>

                <div className='email__form-container'>

                    <div className='email__text'>
                        <h2>Yippee! You created a game plan!</h2>
                        <p>Untether will send your profile, gremlin, resources, and game plan to your email so you can save them. If you agree to this, please confirm your email address and check the box the below.</p>
                    </div>
                    <form className='email__form'>
                        <label className='email__consent'> 
                            <input type='checkbox' className='checkbox'/>
                            <span>

                                I consent to Untether sending my profile and gremlin information to the email address below.
                            </span>
                        </label>

                        <input 
                            type='text' 
                            className='email__text-field' 
                            name='email'
                            placeholder='Ex. iamawesome@mail.com'
                        />
                    </form>

                </div>
                <img className='envelope' src={envelopeImage} alt='Envelope'/>
            </div>

            <footer>
                <button className="button__submit"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('');
                    }}>Send Email</button>
            </footer>

        </div>
    )
}

export default SendEmail;