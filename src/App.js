import ToDo from './components/ToDo/ToDo';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Routes, Route, Link}  from 'react-router-dom';
import NotFound from './components/NotFound';
import AboutUs from './components/Abou';

function App() {
  return (
    <nav className='nav'>
    <Link id='Home' to="/About">About Us</Link>
    <Link id='About'to="/">Home</Link>
    <Routes>
      <Route path='/' element={<ToDo />}/>
      {/* <Route path='/About' element={ }/> */}
      <Route path='/About' element={ <AboutUs />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </nav>

  );
}

export default App;
