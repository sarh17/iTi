import './App.css';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact';
import  Education from "./Components/Education";
import Experience from './Components/Experience'
import Hello from './Components/Hello'
import Skills from './Components/Skills'
function App() {
  return (
    <div className="App ">
      <div className="title">
       <h1>
          SARAH
          <br/>
        <span>ELSAKA</span>
        <p className='fs-6 '>Front-End Developer</p>
        </h1>
      </div>

  <div className="container-fluid">
    <div className="row">
       <div className="col-7">
        <Aboutme/>
        <br />
        <Education/>
        <br />
        <Experience/>
       </div>

       <div className="offset-1 col-4">
        
        <Hello/>
        <br />
        <Contact/>
        <br />
        <Skills/>

       </div>

    </div>
    </div>
  </div>
        
  );
}

export default App;
