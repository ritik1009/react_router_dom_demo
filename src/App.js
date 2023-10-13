import "./App.css";
// Importing the React Router Dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Profile from "./Components/Profile";
import Friends from "./Components/Friends";
import Request from "./Components/Request";
import Stranger from "./Components/Stranger";
import ContactSearch from "./Components/ContactSearch";
import User from "./Components/User";
import UserDetails from "./Components/UserDetails";

function App() {
  const navigationActive = ({ isActive }) => {
    return {
      color: isActive ? "white" : "black",
      textDecoration: "none",
    };
  };
  return (
    <Router>
      {/* Creating the Navigation Link to go from one route to another using the NavLink  */}
      <nav>
        <NavLink style={navigationActive} to="home">
          Home
        </NavLink>
        <NavLink style={navigationActive} to="about">
          About
        </NavLink>
        <NavLink style={navigationActive} to="contact">
          Contact
        </NavLink>
        <NavLink style={navigationActive} to="users">
          User
        </NavLink>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:id/:name" element={<UserDetails />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="friends" element={<Friends />} />
          <Route path="request" element={<Request />} />
          <Route path="stranger" element={<Stranger />} />
          <Route path="search" element={<ContactSearch />} />
        </Route>

        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
