import React, {Component} from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import portfolioData from './data';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <About portfolioData={portfolioData}></About>
        <Projects portfolioData={portfolioData}></Projects>
        <Resume portfolioData={portfolioData}></Resume>
        <Contact portfolioData={portfolioData}></Contact>
      </div>
    )
  }
}






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
