import './App.css';
import LogReg from './LogReg'
import Home from './Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' Component={LogReg}/>
          <Route path='/home' Component={Home}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
