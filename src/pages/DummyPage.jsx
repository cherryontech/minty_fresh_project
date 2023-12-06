import React from 'react';
// import ArrayDisplay from './ArrayDisplay';

const DummyPage = ({growth, setGrowth}) => {




    return (
        <div>

            <p>impostorSymptom {growth.impostorSymptom}</p>
            <p>whyThisRole {growth.whyThisRole}</p>
            
            {/* <ul>
                {skillsList.map((item) => (
                    <li key={item.index}>
                        Skills: {item.skills}, Level: {item.level}
                    </li>
                ))};
            </ul> */}

            {/* <ArrayDisplay {...growth.skillsArray} /> */}


            

            {/* <p>name {user.name}</p>
            <p>pronoun {user.pronouns}</p>
            <p>email {user.email}</p>
            <p>role {user.role}</p>
            <p>industry1 {user.industry1}</p>
            <p>industry2 {user.industry2}</p>
            <p>industry3 {user.industry3}</p> */}
        </div>
    )
}

export default DummyPage;