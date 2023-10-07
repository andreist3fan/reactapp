import styles from "./css/AboutMe.module.scss";
function AboutMe() {
  return (
    <div>
      <h1 className={styles.basic}>About Me!</h1>
      <h3 className={styles.basic}>
        I am a second year student currently studying{" "}
        <a
          className={styles.nodeco}
          href="https://www.tudelft.nl/en/education/programmes/bachelors/cse/bachelor-of-computer-science-and-engineering"
        >
          Computer Science and Engineering at TU Delft
        </a>
        . I always like trying new things and learning new skills.
      </h3>
    </div>
  );
}

export default AboutMe;
