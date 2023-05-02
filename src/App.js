import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBarRoutes from './Components/NavBarRoutes';
import NavBar from './Components/NavBar';
import { Link } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className='container'>
        <div className='row'>
          <Link 
            to="/"
            activeClassName="active-link"
            // onClick={() => closeMenu()}
            exact> 
              <h1>Subplans</h1>
          </Link>
        </div>
        <NavBar />
        <NavBarRoutes />
      </div>
    </Router>
  );
}

export default App;
