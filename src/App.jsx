import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Story from "./pages/Story";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/:categoryId" element={<Collection />} />
        <Route path="/story/:categoryId/:storyId" element={<Story />} />
      </Routes>
    </Router>
  );
}