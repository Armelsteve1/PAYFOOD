import './App.css';
import LandingPage from './Component/HomePage/home-page';
import NavigationBar from './Component/Navbar/navbar';

// import ReactGA from 'react-ga';
// const TRACKING_ID = "411751010";
// ReactGA.initialize(TRACKING_ID, { debug: true });

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
