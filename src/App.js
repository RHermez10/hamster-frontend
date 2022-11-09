import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import StartPage from './Components/StartPage';
import Battle from './Components/Battle';
import Gallery from './Components/Gallery';
import Result from './Components/Result';
import Info from './Components/Info';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/Battle' element={<Battle />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Result' element={<Result />} />
          <Route path='/Info' element={<Info />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
