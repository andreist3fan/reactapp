import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound";
import Article from "./components/Article";
import ImageSelect from "./components/ImageSelect";
import AddArticle from "./components/addArticle";
const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:id" element={<Article />} />
        <Route path="/img" element={<ImageSelect />} />
        <Route path="/addArticle" element={<AddArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
