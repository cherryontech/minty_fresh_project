
import { useNavigate } from "react-router-dom";
import deleteIcon from '../../assets/icons/delete-icon.png';



const Plan = () => {

    const navigate = useNavigate();

    // const handleChange = (e) => {
    //     reframe(val => ({...val, [e.target.name]: e.target.value}
    //     )) 
    // };

// updates array with inputs in the reframe array
//needs the "prop" name updated
// const handleReframeChange = (f, index) => {
//     const {name, value} = f.target;
//     const improveList = {...prop};
//     improveList.reframe[index] = {
//         ...improveList.reframe[index],
//         [name]: value,
//     };

//     console.log(index);
    
//     console.log(improveList.reframe, "This is list");

//     setprop(input => ({...input, [f.target.name]: [f.target.value]}));
//     setprop(improveList);
// };


// //removes the row when delete selected in the improvement array
// //needs the "prop" name updated
// const handleReframeRemove = (index) => {
//     const copy = {...prop};
//     copy.reframe.splice(index, 1);

//     console.log(copy);
//     setprop(copy);
// }


// //adds row when add row button selected in the reframe array
// //needs the "prop" name updated
// const handleReframeAdd = () => {
//     const improveList = {...prop};
//     improveList.reframe.push({reframe: ''});
//     setprop(improveList);
// };

    return(
        <div className="plan">
            <div className='plan__progress'>
                <div className="plan__progress-bar"></div>
                <div className="plan__progress-position"> 
                    <div className='plan__progress-position-1'>
                        <p>1</p>
                    </div>
                    <div className='plan__progress-position-1-b'></div>
                    <div className='plan__progress-position-1-c'></div>
                    <div className='plan__progress-position-2'>
                        <p>2</p>
                    </div>
                    <div className='plan__progress-position-3'>
                        <p>3</p>
                    </div>
                    <div className='plan__progress-position-4'>
                        <p>4</p>
                    </div>
                    <div className='plan__progress-position-5'>
                        <p>5</p>
                    </div>
                </div>
            </div>
            <div>
                <h2> Think Positive</h2>
            </div>
            <div>
                <div>
                    <p>First, let's address your gremlin symptoms. How can you reframe these gremlin symptoms in a more positive light?</p>
                </div>
                <div>
                    <p> If you get stuck, here are some resources for how to reframe negative thoughts to boost confidence:</p>
                    <div className="plan__resources">
                        <ul>
                            {/* LINK THIS  */}
                            <li> Reframing negative thoughts</li>
                            <li> Positive thinking</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="plan__example-reframe">
                <p>Example</p>
                <div>
                    <p>Gremlin Symptom:</p>
                    <p>I'm a terribleinterviewer.</p>
                </div>
                <div>
                    <p> Reframe:</p>
                    <p>Interviewing is just a conversation andI'm good at talking to people.</p>
                </div>
            </div>
            <div className="plan__symptom-reframe">
                {/* //MAP THIS */}
                <h2> Now you try!</h2>
                <p> Gremlin Symptom 1:</p>
                <p> MAP SYMPTOM FROM BEFORE </p>
                <form className="plan__symptom-reframe-form">
                    <label className="plan__form-content">
                        Reframe:
                        <textarea 
                            type="text"
                            required
                            name="symptom-reframe" 
                            placeholder="Enter text"
                            // onChange={handleChange}
                        />
                    </label>
                </form>
            </div>
            <div> 
                <h3> Game plan for growth</h3>
                <p>Now let's take your areas of growth and  start making a game plan for how you'll improve. If you get stuck, we've compiled links to address the most common challenges people face with impostor syndrome.</p>
                <ul>
                    <li>Interview skills</li>
                    <li>Self-marketing</li>
                    <li>Building confidence</li>
                    <li>Career transition</li>
                </ul>
                <div>
                    <p> Example </p>
                    <div> 
                        <p> Area of growth</p>
                        <p> Networking </p>
                        <p> To improve, I will... </p>
                        <p> PLEASE LIMIT YOUR PLAN TO 3 ACTIONS </p>
                        <div>
                            <div>
                                <p> 1. Comment on Linked in posts </p>
                                <div>
                                    <p> pic of trash</p>
                                </div>
                            </div>
                            <div>
                                <p> 2. Reach out to recruiters </p>
                                <div>
                                    <p> pic of trash</p>
                                </div>
                            </div>
                            <div>
                                <p> 3. Set up coffee chats on ADPList </p>
                                <div>
                                    <p> pic of trash</p>
                                </div>
                            </div>
                            <div>
                                <p> Add row bellow </p>
                            </div>
                        </div>
                        <h3> Now you try!</h3>
                        <p> Area of growth 1: </p>
                        <p> MAP SYMPTOM FROM BEFORE </p>
                        <form className="plan__growth-form">
                            <label className="plan__growth-form-content">
                                To improve, I will...:
                                <textarea 
                                    type="text"
                                    required
                                    name="symptom-reframe" 
                                    placeholder="This will be changed to what sav made"
                                    // onChange={handleChange}
                                />
                                {/* need to put in the prop name before "reframe" */}
                                {/* {prop.reframe.map((singleImprovement, index) => (
                                    <div key={index} className='reframe-array'>

                                        <div className='reframe__input'>
                                                
                                            <div className="inputs-only">
                                                <input 
                                                className='text_input'
                                                name='tools'
                                                id='tools'
                                                placeholder='Ex. JIRA'
                                                onChange={(e) => handleReframeChange(e, index)}
                                                ></input>
                                                
                                            </div>
                                            {prop.reframe.length > 1 && (
                                                <button type="button" className=".button__delete">
                                                    <img className='delete-icon' 
                                                    src={deleteIcon} 
                                                    alt='Delete'
                                                    onClick = {() => handleReframeRemove(index)}/>
                                                </button>
                                            )}
                                        </div>
                            
                                        {prop.reframe.length - 1 === index && prop.reframe.length < 3 && (
                                            <div className="add-row">
                                                <button type="button" className=".button__add-row"
                                                onClick={handleReframeAdd}>+ Add Row</button>
                                            </div>
                                        )}
                                </div>
                            ))} */}
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <button 
                className="button__submit" 
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/sendemail');
                }}
                > Next
            </button>
        </div>
    )
}

export default Plan;