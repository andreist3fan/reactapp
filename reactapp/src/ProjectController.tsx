import { ref, push, onValue } from "firebase/database";
import database from "./firebase";
import { Project } from "./objects/Project";

const uploadProject = (project: Project) => {
  const projectsRef = ref(database, "projects");

  push(projectsRef, project)
    .then((response) => {
      console.log("Project uploaded successfully:" + response);
    })
    .catch((error) => {
      console.error("Error uploading project:", error);
    });
};

const fetchProjects = () => {
  const projectsRef = ref(database, "projects");
  const projects: Project[] = [];

  onValue(
    projectsRef,
    (snapshot) => {
      const projectsData = snapshot.val();

      if (projectsData) {
        Object.keys(projectsData).forEach((key) => {
          const project = projectsData[key];
          projects.push(
            new Project(
              project.id,
              project.name,
              project.description,
              project.images
            )
          );
        });
      }

      console.log("Fetched projects:", projects);
    },
    (error) => {
      console.error("Error fetching projects:", error);
    }
  );
  return projects;
};

export { uploadProject, fetchProjects };
