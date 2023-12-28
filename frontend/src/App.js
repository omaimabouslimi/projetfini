
import { Route, Routes } from 'react-router';

import Login from "./pages/auth/login"
import Register from './pages/auth/register';
import Home from './pages/user/Home';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
     <NavBar/>
      <Routes>

      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
