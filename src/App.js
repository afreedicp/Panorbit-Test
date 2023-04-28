import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import UserProfile from './Pages/UserProfile';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
