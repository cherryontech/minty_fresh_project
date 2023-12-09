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
import Profile from './pages/Profile/Profile';
import Congrats from './pages/Congrats/Congrats';
import SendEmail from './pages/SendEmail/SendEmail';
import DummyPage from './pages/DummyPage';
import Walkthrough from './pages/Index/Index';
import GremlinAbout from './pages/GremlinAbout/GremlinAbout';
import Checkpoint from './pages/Checkpoint/Checkpoint';
import Plan from './pages/Plan/Plan';

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
    tools:[{ tools:"", level:""}],
    softSkills:[{ skills:"", level:""}]
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
   const [accomplishments, setAccomplishments] = useState({
    
  })

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Homepage/>
          }
        />
        <Route
          path="/index"
          element={
            <Walkthrough/>
          }
        />
        <Route
          path="/personaname"
          element={
            <PersonaName
              user={user}
              setUser={setUser}
            />
          }
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
          path="/pastacc"
          element={
            <PastAcc
              accomplishments = {accomplishments}
              setAccomplishments ={setAccomplishments}
            />
          }
        />
        <Route 
          path="/checkpoint"
          element={
            <Checkpoint/>
          }
        />
        <Route 
          path="/gremlinabout"
          element={
            <GremlinAbout/>
          }
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
          element={
            <GrowthOpportunites
            // skillsList={skillsList}
            // setSkillsList={setSkillsList}
              growth={growth}
              setGrowth={setGrowth}
            />
          }
        />
        <Route 
          path="/aboutyourself"
          element={
            <AboutYourself/>
          }
        />
        <Route
          path="/letsgetstarted"
          element={
            <LetsGetStarted/>
          }
        />
        <Route
          path="/insertnamepage"
          element={
            <InsertNamePage/>
          }
        />
        <Route 
        path="/profile"
        element={<Profile
          user={user}
          setUser={setUser}
        />}
        />
        <Route 
        path="/plan"
        element={<Plan/>}
        />
        <Route 
       path="/congrats"
       element={<Congrats/>}
       />
        <Route
          path="/email"
          element={
            <SendEmail
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/dummy"
            element={
              <DummyPage
              // skillsList={skillsList}
              // setSkillsList={setSkillsList}
              growth={growth}
              setGrowth={setGrowth}
              strengths={strengths}
              setStrengths={setStrengths}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
