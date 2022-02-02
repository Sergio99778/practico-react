import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Login from "./pages/Login";
import Password from "./pages/Password";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Init from "./pages/Init";

function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <Router basename="/">
      <Routes>
        <Route
          exact
          path="/"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route exact path="/password" element={<Password />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/edit" element={<Edit />} />
        <Route exact path="/init" element={<Init />} />
      </Routes>
    </Router>
  );
}

export default App;
