import './App.css';
import AboutMe from './Components/AboutMeComponent';
import Landing from './Components/LandingComponent';
import Projects from './Components/ProjectsComponent';
import Skills from './Components/SkillsComponent';
import Timeline from './Components/TimelineComponent';

function App() {
  return (
    <div
    style={{
      backgroundColor:   '#1b2735',
      color: 'black',}}>
       <Landing />
       <AboutMe />
       <Timeline />
       <Skills />
       <Projects />
    </div>
  );
}

export default App;
