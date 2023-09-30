import styles from "./css/Projects.module.css";
import { useEffect, useState } from "react";
import { fetchProjects } from "../ProjectController";
import { Project } from "../objects/Project";

function Projects() {
  const baseAddress = `${window.location.protocol}//${window.location.host}`;
  const [cardsBox, setCardsBox] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let fetchedProjects = await fetchProjects();
      console.log(fetchedProjects);
      if (fetchedProjects === null) {
        fetchedProjects = [
          new Project(0, "No projects yet :(", "Try again later", []),
        ];
      }
      const card = renderCards(fetchedProjects);
      console.log(card);
      setCardsBox(card);
    };

    fetchData();
  }, []);

  const renderCards = (projects: Project[]) => {
    console.log("renderCards:" + projects.length);
    const cards = [];
    if (projects.length !== 0) {
      for (let i = 0; i < projects.length; i++) {
        cards.push(
          <div
            className={styles.flexbox}
            key={projects[i].id}
            onClick={() => {
              window.location.href = `${baseAddress}/projects/${projects[i].id}`;
            }}
          >
            <img
              className={styles.image}
              src={projects[i].images?.[0]}
              alt={`Project ${i + 1}`}
              width="150"
              height="150"
            />
            <h4>{projects[i].name}</h4>
            <p className={styles.description}>{projects[i].description}</p>
          </div>
        );
      }
    }
    return cards;
  };

  return (
    <div>
      <div>
        <h3 id="projects">Projects</h3>
      </div>
      <div className={styles.parent_container}>{cardsBox}</div>
    </div>
  );
}

export default Projects;
