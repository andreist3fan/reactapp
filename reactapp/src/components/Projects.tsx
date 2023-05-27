import styles from "./css/Projects.module.css";

function Projects() {
  const baseAddress = `${window.location.protocol}//${window.location.host}`;
  const renderCards = () => {
    const cards = [];

    for (let i = 0; i < 7; i++) {
      const path = (i + 150).toString();
      cards.push(
        <div
          className={styles.flexbox}
          key={i}
          onClick={() => {
            window.location.href = `${baseAddress}/projects/${i}`;
          }}
        >
          <img
            className={styles.image}
            src={"https://picsum.photos/250/" + path}
            alt={`Project ${i + 1}`}
          />
          <h4>Project {i + 1}</h4>
          <p>Project {i + 1} description</p>
        </div>
      );
    }
    return cards;
  };

  return (
    <div>
      <div>
        <h3 id="projects">Projects</h3>
      </div>
      <div className={styles.parent_container}>{renderCards()}</div>
    </div>
  );
}

export default Projects;
