import './App.css';
import LandingPage from './Component/HomePage/home-page';
import NavigationBar from './Component/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
