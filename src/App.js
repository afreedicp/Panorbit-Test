import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import UserProfile from './Pages/UserProfile';
import Gallery from './Pages/Gallery';
import ToDo from './Pages/ToDo';
import Posts from './Pages/Posts';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/profile' element={<UserProfile />} />
        <Route path='/user/gallery' element={<Gallery />} />
        <Route path='/user/todo' element={<ToDo />} />
        <Route path='/user/posts' element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
