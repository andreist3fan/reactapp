import { get, ref, push, onValue } from "firebase/database";
import database from "./firebase";
import { Project } from "./objects/Project";

const uploadProject = (project: Project) => {
  const projectsRef = ref(database, "projects");

  const projectObject = {
    id: project.id,
    name: project.name,
    description: project.description,
    images: project.images,
  };

  push(projectsRef, projectObject)
    .then((response) => {
      console.log("Project uploaded successfully");
    })
    .catch((error) => {
      console.error("Error uploading project:", error);
    });
};

const fetchProjects = () => {
  const projectsRef = ref(database, "projects");

  onValue(projectsRef, (snapshot) => {
    const projectsData = snapshot.val();
    // Do something with the projectsData
    console.log(projectsData);
  });
};

export { uploadProject, fetchProjects };
