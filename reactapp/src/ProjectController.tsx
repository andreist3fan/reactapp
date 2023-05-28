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

const fetchProjectById = (id: number) => {
  console.log("fetchProjectById:" + id);
  const projectsRef = ref(database, "projects");
  let search: Project | null = null;
  onValue(
    projectsRef,
    (snapshot) => {
      const projectsData = snapshot.val();

      if (projectsData) {
        Object.keys(projectsData).forEach((key) => {
          const project = projectsData[key];

          console.log(typeof project.id, typeof id);
          if (project.id == id) {
            search = project;
          }
        });
      }
    },
    (error) => {
      console.error("Error fetching projects:", error);
    }
  );
  console.log("Searched for id:" + id + " and found:" + search);
  return search;
};

export { uploadProject, fetchProjects, fetchProjectById };
