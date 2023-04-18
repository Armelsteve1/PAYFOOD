import './App.css';
import LandingPage from './Component/HomePage/homePage';
import NavigationBar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
