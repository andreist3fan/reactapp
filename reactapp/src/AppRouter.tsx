import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound";
import Article from "./components/Article";
const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/projects/:id" element={<Article />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
