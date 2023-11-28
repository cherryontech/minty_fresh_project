import { useNavigate } from 'react-router-dom';

//TODO: setup page nav
const SendEmail = () => {

    const navigate = useNavigate();

    return (
        <div className='email'>

            <div className='email__text'>
                <h2>Yippee! You created a game plan!</h2>
                <p>Untether will send your profile, gremlin, resources, and game plan to your email so you can save them. If you agree to this, please confirm your email address and check the box the below.</p>
            </div>
            <form className='email__form'>
                <label> 
                    I consent to Untether sending my profile and gremlin information to the email address below.
                    <input type='checkbox' className='email__consent'/>
                </label>

                <input 
                    type='text' 
                    className='email__text-field' 
                    name='email'
                    placeholder='Ex. iamawesome@mail.com'
                />
            </form>

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