import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mane from "./pages/main/Mane";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/create-post/create-post";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Mane />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
