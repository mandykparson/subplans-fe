import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBarRoutes from './Components/NavBar/NavBarRoutes';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer'
import { useState } from 'react';
import NotLoggedIn from './Components/NotLoggedIn/NotLoggedIn';


function App() {

  const [ login, setLogin ] = useState(false)

  return (
    <Router>
      <div className='website-content-main'>
        { login ? 
            <div>
              <Hero />
              <NavBar />
              <NavBarRoutes />
              <Footer />
            </div> 
          :
          <NotLoggedIn 
            setLogin={setLogin}/> 
      }
      </div>
    </Router>
  );
}

export default App;
