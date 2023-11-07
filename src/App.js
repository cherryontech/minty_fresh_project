// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Strengths from './pages/Strengths/Strengths';
import Homepage from './pages/HomePage/HomePage';
import FutureGoals from './pages/FutureGoals/FutureGoals';
import './App.scss';
import { useState } from 'react';
import Results from './pages/Results/Results';
import GrowthOpportunites from './pages/GrowthOpportunities/GrowthOpportunities';
import PersonaName from './pages/PersonaName/PersonaName';
import PastAcc from './pages/PastAcc/PastAcc';
import AboutYourself from './pages/AboutYourself/AboutYourself';
import LetsGetStarted from './pages/LetsGetStarted/LetsGetStarted';
import InsertNamePage from './pages/InsertNamePage/InsertNamePage';

function App() {

  const [user, setUser] = useState({
    name: ''
  })


  // This is where the info from the strengths form will be stored (it is starting as empty strings and will be passed into different pages through props)
  const [strengths, setStrengths] = useState({
    compliments: '',
    activities:'',
    methodologies: ''
  });

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Homepage/>}
        />
        <Route
            path="/strengths"
            element={
              <Strengths 
                strengths={strengths}
                setStrengths={setStrengths}
              />}
        />
        <Route
          path="/results"
          element={
            <Results
              strengths={strengths}
              setStrengths={setStrengths}
              user={user}
              setUser={setUser}
            />
          }
        /> 
        <Route
            path="/growth"
            element={<GrowthOpportunites/>}
          />
          <Route
            path="/personaname"
            element={<PersonaName
              user={user}
              setUser={setUser}
            />}
          />

          <Route 
          path="/pastacc"
          element={<PastAcc/>}
          />

          <Route 
          path="/aboutyourself"
          element={<AboutYourself/>}
          />
        <Route
            path="/futuregoals"
            element={<FutureGoals/>}
        />
        <Route
          path="/letsgetstarted"
          element={<LetsGetStarted/>}
          />
        <Route
        path="/insertnamepage"
        element={<InsertNamePage/>}
        />
      </Routes>


    </div>
  );
}

export default App;
