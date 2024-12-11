
import NavBar from "./Components/NavBar/navbar";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Write from "./Pages/Write/write";
import Register from "./Pages/Register/register";
import Settings from "./Pages/Settings/settings";
import Calendar from "./Pages/Calendar/calendar";
import Cuisine from "./Pages/Cuisine";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Searched from "./Pages/Searched";
import RecipeDetail from "./Pages/RecipeDetail";
import Recipes from "./Components/Recipes/recipes";


function App() {
  const user = true;
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={
          <>
            {user && <Home />}
            {!user && <Register />}
          </>} />
        <Route path="/Login" element={<>
          {user && <Home />}
          {!user && <Login />}
        </>} />
        <Route path="/Cuisine/:type" element={<Cuisine />} />
        <Route path="/Settings" element={
          <>
            {user && <Settings />}
            {!user && <Register />}
          </>} />
        <Route path="/Write" element={<>
          {user && <Write />}
          {!user && <Register />}
        </>} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Recipes" element={<>
          {user && <Recipes />}
          {!user && <Register />}
        </>} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
