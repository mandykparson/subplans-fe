import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBarRoutes from './Components/NavBarRoutes'
import NavBar from './Components/NavBar'
import { Link } from 'react-router-dom'
import Footer from './Components/Footer';

function App() {

  return (
    <Router>
      <div className='container'>
        <div className='row'>
          <Link 
            to="/"
            activeClassName="active-link"
            exact> 
              <h1>Subplans</h1>
          </Link>
        </div>
        <NavBar />
        <NavBarRoutes />
        <div className='footer'>
          <Link 
              to="/footer"
              activeClassName="active-link"
              exact> 
                  Contribute Your Own Subplan
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
