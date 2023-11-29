// import { useState } from 'react';
import './Skills.scss';
// import deleteIcon from '../../assets/icons/delete.png'
// import addRowButton from '../AddRowButton/AddRowButton'



// const Skills = () => {
    
//     const [skillsList, setSkillsList] = useState([{skills: "", level: ""}]);

    

//     return (
//         <div className='skills'>
//             <form className="skills__form">

//            {skillsList.map((singleSkill, index) => (
//                 <div key={index} className='skillsArray'>

//                     <div className='skills__input'>

//                         <input 
//                             type='text'
//                             className='text_input'
//                             name='skills'
//                             id='skills'
//                             placeholder='Ex. Java'
//                             // onChange={handleChangeSkills}
//                             ></input>
//                             <select className="dropdown">
//                                 <option 
//                                 id='levels'
//                                 name='levels'
//                                 value='Beginner'
//                                 // onChange={handleChangeLevels}
//                                 >
//                                     Beginner
//                                 </option>
//                                 <option 
//                                 id='levels'
//                                 name='levels'
//                                 value='Proficient'
//                                 // onChange={handleChangeLevels}
//                                 >
//                                     Proficient
//                                 </option>
//                                 <option 
//                                 id='levels'
//                                 name='levels'
//                                 value='Expert'
//                                 // onChange={handleChangeLevels}
//                                 >
//                                     Expert
//                                 </option>
//                             </select>
//                             {/* <button
//                             onClick={addSkillsPair}>
//                             pairs
//                         </button> */}
//                             <button>
//                                 {/* <img className='delete-icon' 
//                                 src={deleteIcon} 
//                                 alt='Delete'/> */}
//                                 Delete
//                             </button>
//                         </div>
//                         {skillsList.length - 1 === index && skillsList.length <= 5 && (

//                             <addRowButton />
//                         )}
//                 </div>

//            ))}             
//             </form>

//         </div>

//     );
// };

// export default Skills;