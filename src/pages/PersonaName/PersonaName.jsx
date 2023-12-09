import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import "./PersonaName.scss";
import nameTag from '../../assets/desktop/2_illustration_name.png';


/*TODO:
    -add in the dropdown passing information to the profile page
    -setup the email to pass to SendEmail
    -fix all values and handleChanges
*/
const PersonaName = ({user, setUser}) => {
    

    const navigate = useNavigate();
    const handleChange = (e) => {
        console.log('This is name', user)
        setUser(val => ({...val, [e.target.name]: e.target.value}
        )) 
    };


    return (
        <div className='persona'>
            <div className="persona__header">
                <button className="persona__header-back"
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/index')
                }}>
                    <image src='../../assets/icons/icon.png'></image>
                </button>
                
                <div className='persona__header-title'>
                    <p>CREATE A PROFILE</p>
                </div>
            </div>
            <div className='persona__progress'>
                <div className="persona__progress-bar"></div>
                <div className="persona__progress-position"> 
                    <div className='persona__progress-position-1'>
                            <p>1</p>
                    </div>
                    <div className='persona__progress-position-1-b'></div>
                    <div className='persona__progress-position-1-c'></div>
                    <div className='persona__progress-position-2'>
                        <p>2</p>
                    </div>
                    <div className='persona__progress-position-3'>
                        <p>3</p>
                    </div>
                    <div className='persona__progress-position-4'>
                        <p>4</p>
                    </div>
                    <div className='persona__progress-position-5'>
                        <p>5</p>
                    </div>
                </div>
            </div>
            <div className='persona__desktop-image'>

                <div className="persona__form-inputs">
                    <h2 className="persona__title">Let's start with a name</h2>

                    <form className="persona__form">
                        <label className="persona__form-content">
                            What's your name? 
                            <input 
                                type="text"
                                required
                                name="name" 
                                placeholder="Ex. Sasha Feirce"
                                onChange={handleChange}
                            />
                        </label>
                        <label className="persona__form-content">
                            What are your pronouns?
                            <input 
                                type="text"
                                required
                                name="pronouns" 
                                placeholder="Ex. They/Them"
                                onChange={handleChange}
                            />
                        </label>
                        <label className="persona__form-content">
                            What's your email address?
                            <input 
                                    type="email"
                                    required
                                    name="email" 
                                    placeholder="Ex. iamawesome@email.com"
                                    onChange={handleChange}
                                />
                        </label>
                        <label className="persona__form-content">
                            What job or role are you hoping to land?

                            <select className="persona__form-dropdown"
                            name="role"
                            onChange={handleChange}>
                                <option value="" disabled selected>Select Industry</option>
                                <option>Software Engineer</option>
                                <option>Customer Success</option>
                                <option>Solutions Engineer</option>
                                <option>Sales Engineer</option>
                                <option>Product Manager</option>
                                <option>Project Manager</option>
                                <option>UX Designer</option>
                                <option>UX Researcher</option>
                                <option>Quality Assurance</option>
                                <option>Analyst</option>
                                <option>Data Scientist</option>
                                <option>Technical Support</option>
                            </select>
                        </label>

                        <label className="persona__form-content"> 
                            <p>What are the top 3 industries you see yourself working in?</p>
                            <select className="persona__form-dropdown" 
                            name="industry1" 
                            onChange={handleChange}>
                                <option disabled selected>Select Industry</option>
                                <option>Civic/Government Systems</option>
                                <option>Finance</option>
                                <option>Gaming</option>
                                <option>Sales and Marketing</option>
                                <option>Blockchain and Cryptocurrency</option>
                                <option>Cloud Computing</option>
                                <option>Cybersecurity</option>
                                <option>Analytics</option>
                                <option>Customer Support and Success</option>
                                <option>Human Resources (HR)</option>
                            </select>
                            <select className="persona__form-dropdown" 
                            name="industry2" 
                            onChange={handleChange}>
                                <option disabled selected>Select Industry</option>
                                <option>Civic/Government Systems</option>
                                <option>Finance</option>
                                <option>Gaming</option>
                                <option>Sales and Marketing</option>
                                <option>Blockchain and Cryptocurrency</option>
                                <option>Cloud Computing</option>
                                <option>Cybersecurity</option>
                                <option>Analytics</option>
                                <option>Customer Support and Success</option>
                                <option>Human Resources (HR)</option>
                            </select>
                            <select className="persona__form-dropdown" 
                            name="industry3" 
                            onChange={handleChange}>
                                <option disabled selected>Select Industry</option>
                                <option>Civic/Government Systems</option>
                                <option>Finance</option>
                                <option>Gaming</option>
                                <option>Sales and Marketing</option>
                                <option>Blockchain and Cryptocurrency</option>
                                <option>Cloud Computing</option>
                                <option>Cybersecurity</option>
                                <option>Analytics</option>
                                <option>Customer Support and Success</option>
                                <option>Human Resources (HR)</option>
                            </select>
                        </label>
                    </form>
                </div>
                <img  className="name-tag" src={nameTag} alt=""/>
            </div>
            <button className="button__next" type='button' 
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/strengths');
                }}>Next
            </button>
        </div>
    )
}

export default PersonaName;

