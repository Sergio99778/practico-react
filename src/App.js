import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Login from "./pages/Login";
import Password from "./pages/Password";
import Create from "./pages/Create";

function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route exact path="/password" element={<Password />} />
        <Route exact path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
