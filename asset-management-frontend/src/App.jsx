import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AssetForm from './AssetForm';

import Home from './pages/Home';
// import AssetsData from './pages/AssetsData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> }/>
      </Routes>
      <Routes>
        <Route path='/assets' element={ <AssetForm /> } />
      </Routes>
      {/* <Routes>
        <Route path='/retrieve-assets' element={ <AssetsData /> } />
      </Routes> */}
    </Router>
  )
}

export default App
