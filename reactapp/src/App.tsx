//import Message from "./message";
//import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import Page1 from "./components/Page1";
import Projects from "./components/Projects";
import Fodder from "./components/Fodder";
import { Project } from "./objects/Project";
import { uploadProject } from "./ProjectController";
function App() {
  return (
    <>
      <body>
        <NavBar />
        <Page1 />
        <button
          onClick={() => {
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA");
            const myProject = new Project(
              1,
              "My Project",
              "This is my project description",
              ["image1.jpg", "image2.jpg"]
            );
            uploadProject(myProject);
          }}
        >
          press
        </button>
        <Fodder />
        <Projects />
      </body>
    </>
  );
}

export default App;
