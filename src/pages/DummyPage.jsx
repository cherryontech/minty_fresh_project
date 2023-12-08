import React from 'react';
// import ArrayDisplay from './ArrayDisplay';
import deleteIcon from '../assets/icons/delete-icon.png';


const DummyPage = ({strengths, setStrengths}) => {

         //removes the row when delete selected in the skills array
         const handleToolsRemove = (index) => {
            const copy = {...strengths};
            copy.tools.splice(index, 1);
        
            console.log(copy);
            setStrengths(copy);
        };
        
        
        //adds row when add row button selected in the skills array
        const handleToolsAdd = () => {
            const toolList = {...strengths};
            toolList.tools.push({ tools: '', level: ''});
            setStrengths(toolList);
        };
    
        
         // updates array with inputs in the skills array
        // const handleToolsChange = (f, index) => {
        //     const {name, value} = f.target;
        //     const toolsList = {...strengths};
        //     toolsList.tools[index] = {
        //         ...toolsList.tools[index],
        //         [name]: value,
        //     };
    
        //     console.log(index);
            
        //     console.log(toolsList.tools, "This is list");
    
        //     setStrengths(input => ({...input, [f.target.name]: [f.target.value]}));
        //     setStrengths(toolsList);
        // };
    


    return (
        <div>
{/* 
            <p>impostorSymptom {growth.impostorSymptom}</p>
            <p>whyThisRole {growth.whyThisRole}</p> */}
            {/* <p>skills {growth.skillSet}</p> */}
            
            <ul>
                {strengths.tools.map((item) => (
                    <li key={item.index}>
                        tool: {item.tools}, Level: {item.level}
                    </li>
                ))}
            </ul>

            <ul>
                {strengths.softSkills.map((item) => (
                    <li key={item.index}>
                        Skills: {item.skills}, Level: {item.level}
                    </li>
                ))}
            </ul>



            {strengths.tools.map((singleTool, index) => (
                            <div key={index} className='tools-array'>

                                <div className='tools__input'>
                                        
                                    <div className="inputs-only">
                                        <input 
                                        className='text_input'
                                        name='tools'
                                        id='tools'
                                        placeholder='Ex. JIRA'
                                        // onChange={(e) => handleToolsChange(e, index)}
                                        ></input>
                                        <select className="dropdown"
                                        id='level'
                                        name='level'
                                        // onChange={(e) => handleToolsChange(e, index)}
                                        >
                                            <option value="">
                                                Select an Option:
                                            </option>
                                            <option value="Beginner">
                                                Beginner
                                            </option>
                                            <option value="Proficient">
                                                Proficient
                                            </option>
                                            <option value="Expert">
                                                Expert
                                            </option>
                                        </select>
                        
                                    </div>
                                    {strengths.tools.length > 1 && (
                                        <button type="button" className=".button__delete">
                                            <img className='delete-icon' 
                                            src={deleteIcon} 
                                            alt='Delete'
                                            onClick = {() => handleToolsRemove(index)}/>
                                        </button>
                                    )}
                                </div>
                    
                                {strengths.tools.length - 1 === index && strengths.tools.length < 5 && (
                                    <div className="add-row">
                                        <button type="button" className=".button__add-row"
                                        onClick={handleToolsAdd}>+ Add Row</button>
                                    </div>
                                )}
                        </div>
                    ))}

        </div>
    )
}

export default DummyPage;