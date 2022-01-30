import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Login from "./pages/Login";
import Password from "./pages/Password";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/password" element={<Password />} />
      </Routes>
    </Router>
  );
}

export default App;
