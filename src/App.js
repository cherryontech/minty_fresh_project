// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Strengths from './pages/Strengths/Strengths';
import Homepage from './pages/HomePage/HomePage';
import './App.scss';
import { useState } from 'react';
import Results from './pages/Results/Results';
import GrowthOpportunites from './pages/GrowthOpportunities/GrowthOpportunities';
import PersonaName from './pages/PersonaName/PersonaName';
import PastAcc from './pages/PastAcc/PastAcc';
import AboutYourself from './pages/AboutYourself/AboutYourself';
import LetsGetStarted from './pages/LetsGetStarted/LetsGetStarted';
import InsertNamePage from './pages/InsertNamePage/InsertNamePage';
import SendEmail from './pages/SendEmail/SendEmail';
import DummyPage from './pages/DummyPage';

function App() {

  const [user, setUser] = useState({
    name: '', 
    pronouns: '',
    email: '',
    role: '',
    industry1: '',
    industry2: '',
    industry3: ''
  });


  // This is where the info from the strengths form will be stored (it is starting as empty strings and will be passed into different pages through props)
  const [strengths, setStrengths] = useState({
    compliments: '',
    activities:'',
    methodologies: ''
  });


  const [growth, setGrowth] = useState({
    impostorSymptom: '',
    whyThisRole: '',
    skillSet: [{ skills:"", level:""}]
  })

  // const [skillsList, setSkillsList] = useState({
  //   skills: '',
  //   level: ''
  // })

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
            element={<GrowthOpportunites
              // skillsList={skillsList}
              // setSkillsList={setSkillsList}
              growth={growth}
              setGrowth={setGrowth}
            />}
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
          path="/letsgetstarted"
          element={<LetsGetStarted/>}
          />
        <Route
        path="/insertnamepage"
        element={<InsertNamePage/>}
        />
        <Route
        path="/email"
        element={<SendEmail
          user={user}
          setUser={setUser}
          />}
        />
        <Route
        path="/dummy"
        element={<DummyPage
          // skillsList={skillsList}
          // setSkillsList={setSkillsList}
          growth={growth}
          setGrowth={setGrowth}
        />}
        />
      </Routes>


    </div>
  );
}

export default App;
