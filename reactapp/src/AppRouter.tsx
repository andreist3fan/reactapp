import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/:id" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
