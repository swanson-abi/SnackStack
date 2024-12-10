
import NavBar from "./NavBar/navbar";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Write from "./Pages/Write/write";
import Single from "./Pages/Single/single";
import Register from "./Pages/Register/register";
import Settings from "./Pages/Settings/settings";
import Calendar from "./Pages/Calendar/calendar";
import {Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/recipe/:recipeId" element={<Single />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
