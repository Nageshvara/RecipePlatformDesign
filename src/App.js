import './App.css';
import Navbarcomp from './components/Navbarcomp';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
        <Navbarcomp />
        <div className="image-container">
          <img src="assets/Ellipse 1.png" alt="Background" className="background-image" />
        </div>
        <div className='content'>
          <h1 className='overlay-heading'>Flavours Destination.</h1>
          <p className='overlay-text'>Embark on a journey where every recipe leads to unforgettable flavors</p>
          <Link to='/authenticate'><Button variant='outline-dark' size='lg'>Start Cooking.</Button></Link>
        </div>
    </div>
  );
}

export default App;
