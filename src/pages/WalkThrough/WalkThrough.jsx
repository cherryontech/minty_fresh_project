import './WalkThrough.scss';
import { useNavigate } from 'react-router-dom';

const Walkthrough = () => {

    const navigate = useNavigate();
    return (
        <div> 
            <h2> Impostor syndrome tethering you down? </h2>
            <p> Here are Untether's steps for building your confidence:</p>
            <div className='step'> 
                <div className='box'>
                    <div className='image'></div>
                    <div className='number'>
                        <p>1</p>
                    </div>
                    <div className='sub-box'>
                        <div className='title'>
                            <p>Create a profile</p>
                        </div>
                        <div className='content'>
                            <p>To do this, we'll ask you about your qualities and background.</p>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='image'></div>
                    <div className='number'>
                        <p>2</p>
                    </div>
                    <div className='sub-box'>
                        <div className='title'>
                            <p>Create a gremlin</p>
                        </div>
                        <div className='content'>
                            <p>To do this, we'll ask you about how you experience impostor syndrome.</p>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='image'></div>
                    <div className='number'>
                        <p>3</p>
                    </div>
                    <div className='sub-box'>
                        <div className='title'>
                            <p>Review your information</p>
                        </div>
                        <div className='content'>
                            <p>You've built your profile and gremlin! Let's review the information and edit as you see fit.</p>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='image'></div>
                    <div className='number'>
                        <p>4</p>
                    </div>
                    <div className='sub-box'>
                        <div className='title'>
                            <p>Start a game plan</p>
                        </div>
                        <div className='content'>
                            <p>Then we'll help you start making a game plan by giving you resources to review and a game plan template.</p>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='image'></div>
                    <div className='number'>
                        <p>5</p>
                    </div>
                    <div className='sub-box'>
                        <div className='title'>
                            <p>Send ana email</p>
                        </div>
                        <div className='content'>
                            <p>Finally, we'll send you an email with all your hard work so you can empower yourself in the future!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button 
                    className="button__next" 
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

export default Walkthrough;