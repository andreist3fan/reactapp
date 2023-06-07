//import Message from "./message";
//import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import Page1 from "./components/Page1";
import Projects from "./components/Projects";
import { Project } from "./objects/Project";
import { uploadProject } from "./ProjectController";
function App() {
  return (
    <>
      <body>
        <NavBar />
        <Page1 />
        <Projects />
      </body>
    </>
  );
}

export default App;
