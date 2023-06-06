import styles from "./css/Projects.module.css";
import { useEffect, useState } from "react";
import { fetchProjects } from "../ProjectController";
import { Project } from "../objects/Project";
function Projects() {
  const baseAddress = `${window.location.protocol}//${window.location.host}`;
  const [projects, setProjects] = useState<Project[]>([]);
  const renderCards = () => {
    //console.log("renderCards:" + projects.length);
    const cards = [];
    if (projects.length !== 0) {
      for (let i = 0; i < projects.length; i++) {
        const path = (i + 150).toString();
        cards.push(
          <div
            className={styles.flexbox}
            key={projects[i].id}
            onClick={() => {
              window.location.href = `${baseAddress}/projects/${i + 1}`;
            }}
          >
            <img
              className={styles.image}
              src={"https://picsum.photos/250/" + path}
              alt={`Project ${i + 1}`}
            />
            <h4>{projects[i].name}</h4>
            <p className={styles.description}>{projects[i].description}</p>
          </div>
        );
      }
    }
    return cards;
  };
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await fetchProjects();
      if (fetchedProjects !== null) setProjects(fetchedProjects);
      else
        setProjects([
          new Project(0, "No projects yet :(", "Try again later", []),
        ]);
    };

    const shortPolling = async () => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        temp_cards = renderCards();

        if (temp_cards.length !== 0)
          await new Promise((r) => setTimeout(r, 10000));
        else await new Promise((r) => setTimeout(r, 1000));
      }
    };
    shortPolling();
  }, []);

  let temp_cards = renderCards();

  return (
    <div>
      <div>
        <h3 id="projects">Projects</h3>
      </div>
      <div className={styles.parent_container}>{temp_cards}</div>
    </div>
  );
}

export default Projects;
