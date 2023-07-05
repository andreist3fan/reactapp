import { ref, push, onValue } from "firebase/database";
import database from "./firebase";
import { Project } from "./objects/Project";

const uploadProject = (project: Project) => {
  const projectsRef = ref(database, "projects");

  push(projectsRef, project)
    .then((response) => {
      console.log("Project uploaded successfully:" + project);
    })
    .catch((error) => {
      console.error("Error uploading project:", error);
    });
};

const fetchProjects = (): Promise<Project[] | null> => {
  const projectsRef = ref(database, "projects");
  const projects: Project[] = [];

  return new Promise((resolve, reject) => {
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
          projects.sort((a, b) => a.id - b.id);
          console.log("Fetched projects:", projects);
          resolve(projects || null);
        } else {
          resolve(null);
        }
      },
      (error) => {
        console.error("Error fetching projects:", error);
        reject(error);
      }
    );
  });
};

// const fetchProjectById = (id: number) => {
//   console.log("fetchProjectById:" + id);
//   const projectsRef = ref(database, "projects");
//   let search: Project | null = null;
//   onValue(
//     projectsRef,
//     (snapshot) => {
//       const projectsData = snapshot.val();

//       if (projectsData) {
//         Object.keys(projectsData).forEach((key) => {
//           const project = projectsData[key];

//           console.log(typeof project.id, typeof id);
//           if (project.id == id) {
//             search = project;
//           }
//         });
//       }
//     },
//     (error) => {
//       console.error("Error fetching projects:", error);
//     }
//   );
//   console.log("Searched for id:" + id + " and found:" + search);
//   return search;
// };

const fetchProjectById = (id: number): Promise<Project | null> => {
  console.log("fetchProjectById:" + id);
  const projectsRef = ref(database, "projects");

  return new Promise((resolve, reject) => {
    onValue(
      projectsRef,
      (snapshot) => {
        const projectsData = snapshot.val();
        let search: Project | null = null;
        if (projectsData) {
          for (const key in projectsData) {
            const project = projectsData[key];
            console.log(typeof project.id, typeof id);
            if (project.id == id) {
              search = project;
            }
          }
          console.log("Searched for id:" + id + " and found:", search);
          resolve(search || null);
        } else {
          resolve(null);
        }
      },
      (error) => {
        console.error("Error fetching projects:", error);
        reject(error);
      }
    );
  });
};

export { uploadProject, fetchProjects, fetchProjectById };
