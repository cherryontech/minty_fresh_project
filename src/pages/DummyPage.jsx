import React from 'react';
// import ArrayDisplay from './ArrayDisplay';

const DummyPage = ({strengths, setStrengths}) => {

    


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

        </div>
    )
}

export default DummyPage;