import { useState } from "react";
import Gremlin from "../../components/Gremlin/Gremlin";
import Persona from "../../components/Persona/Persona";
import './Results.scss';

// import InterviewPrep from "../InterviewPrep/InterviewPrep";

const Results = ({strengths, setStrengths, user, setUser}) => {
    const [page, setPage] = useState('persona'); // Set the initial page to 'persona'

    const handlePageChange = (newPage) => {
        setPage(newPage);
    }

    // Render the component based on the current value of 'page'
    const renderComponent = () => {
        switch (page) {
            case 'persona':
                return <Persona 
                            strengths={strengths} 
                            setStrengths={setStrengths}
                            user={user}
                            setUser={setUser}
                        />;
            case 'gremlin':
                return <Gremlin />;
            // case 'interview':
            //     return <InterviewPrep />;
            default:
                return <Persona 
                            strengths={strengths} 
                            setStrengths={setStrengths}
                            user={user}
                            setUser={setUser}
                        />;;
        }
    };

    return (
        <div className="results">
            <div className="results__page">
                {renderComponent()}
            </div>
            <footer className="results__nav">
                <div>
                    <button onClick={() => handlePageChange('persona')}>Persona</button>
                </div>
                <div>
                    <button onClick={() => handlePageChange('gremlin')}>Gremlin</button>
                    
                </div>
                <div>
                    <button onClick={() => handlePageChange('interview')}>Interview Prep</button>
                </div>
            </footer>
        </div>
    );
};

export default Results;