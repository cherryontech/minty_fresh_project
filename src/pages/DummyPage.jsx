import React from 'react';
// import ArrayDisplay from './ArrayDisplay';

const DummyPage = ({growth, setGrowth}) => {

    


    return (
        <div>

            <p>impostorSymptom {growth.impostorSymptom}</p>
            <p>whyThisRole {growth.whyThisRole}</p>
            {/* <p>skills {growth.skillSet}</p> */}
            
            <ul>
                {growth.skillSet.map((item) => (
                    <li key={item.index}>
                        Skills: {item.skills}, Level: {item.level}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default DummyPage;