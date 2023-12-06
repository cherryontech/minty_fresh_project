import './SendEmail.scss'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import envelopeImage from '../../assets/images/illustration_email.png';


/*TODO: 
    -send email
    -navigate to congrats page
    */

const SendEmail = ({user, setUser}) => {
    const [ isChecked, setIsChecked ] = useState(false);
    const navigate = useNavigate();


    

    //used to enable/diable button for consent if the button is checked or unchecked
    const handleOnChecked = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className='email'>
            <p> SEND AN EMAIL </p>
            <div className='email__progress'>
                <div className="email__progress-bar"></div>
                <div className="email__progress-position"> 
                    <div className='email__progress-position-1'>
                            <p>1</p>
                    </div>
                    <div className='email__progress-position-1-b'></div>
                    <div className='email__progress-position-1-c'></div>
                    <div className='email__progress-position-2'>
                        <p>2</p>
                    </div>
                    <div className='email__progress-position-3'>
                        <p>3</p>
                    </div>
                    <div className='email__progress-position-4'>
                        <p>4</p>
                    </div>
                    <div className='email__progress-position-5'>
                        <p>5</p>
                    </div>
                </div>
            </div>

            <div className='email__with-image'>

                <div className='email__form-container'>

                    <div className='email__text'>
                        <h2>Yippee! You created a game plan!</h2>
                        <p>Untether will send your profile, gremlin, resources, and game plan to your email so you can save them. If you agree to this, please confirm your email address and check the box the below.</p>
                    </div>
                    <form className='email__form'>
                        <label className='email__consent'> 
                            <input 
                                type='checkbox' 
                                className='checkbox'
                                checked={isChecked}
                                onChange={handleOnChecked}/>
                            <span>

                                I consent to Untether sending my profile and gremlin information to the email address below.
                            </span>
                        </label>

                        <input 
                            type='text' 
                            className='email__text-field' 
                            name='email'
                            placeholder={user.email}
                        />
                    </form>

                </div>
                <img className='envelope' src={envelopeImage} alt='Envelope'/>
            </div>

            <footer>
                <button className="button__submit"
                    disabled={!isChecked}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('');
                        console.log("button clicked enabled")
                    }}>Send Email</button>
            </footer>

        </div>
    )
}

export default SendEmail;