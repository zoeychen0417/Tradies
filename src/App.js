import './App.css';
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Job from './pages/Job'
import Error from './pages/Error';
import Nav from './conponents/Nav';

function App() {
  return (
      <>          
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/job/:id' element={<Job />}/>
          <Route path = "*" element={<Error/>}/>
       </Routes>
      </>
  );
}

export default App;
