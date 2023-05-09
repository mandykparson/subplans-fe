import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBarRoutes from './Components/NavBar/NavBarRoutes';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <Router>
      <div className='website-content-main'>
        <Hero />
        <NavBar />
        <NavBarRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
