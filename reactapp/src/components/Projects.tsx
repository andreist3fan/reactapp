import styles from "./css/Projects.module.css";

function Projects() {
  return (
    <div>
      <div>
        <h3 id="projects">Projects</h3>
      </div>
      <div className={styles.parent_container}>
        <div className={styles.flexbox}>
          <img
            className={styles.image}
            src="https://picsum.photos/250/150"
            alt="Project 1"
          />
          <h4>Project 1</h4>
          <p>Project 1 description</p>
        </div>
        <div className={styles.flexbox}>
          <img
            className={styles.image}
            src="https://picsum.photos/250/151"
            alt="Project 2"
          />
          <h4>Project 2</h4>
          <p>Project 1 description</p>
        </div>
        <div className={styles.flexbox}>
          <img
            className={styles.image}
            src="https://picsum.photos/251/150"
            alt="Project 3"
          />
          <h4>Project 3</h4>
          <p>Project 1 description</p>
        </div>
        <div className={styles.flexbox}>
          <img
            className={styles.image}
            src="https://picsum.photos/251/151"
            alt="Project 4"
          />
          <h4>Project 4</h4>
          <p>Project 1 description</p>
        </div>
        <div className={styles.flexbox}>
          <img
            className={styles.image}
            src="https://picsum.photos/252/150"
            alt="Project 5"
          />
          <h4>Project 5</h4>
          <p>Project 1 description</p>
        </div>
        <div className={styles.flexbox}>
          <img
            className={styles.image}
            src="https://picsum.photos/250/152"
            alt="Project 6"
          />
          <h4>Project 6</h4>
          <p>Project 1 description</p>
        </div>
        <div className={styles.flexbox}>
          <img
            className={styles.image}
            src="https://picsum.photos/252/152"
            alt="Project 7"
          />
          <h4>Project 7</h4>
          <p>Project 1 description</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
