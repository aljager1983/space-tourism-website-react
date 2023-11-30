import Crew from "./Crew";
import Destination from "./Destination";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Technology from "./Technology";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
