import styles from "./css/AboutMe.module.css";
function AboutMe() {
  return (
    <div>
      <h3 className={styles.basic}>
        I am a second year student currently studying{" "}
        <a
          className={styles.nodeco}
          href="https://www.tudelft.nl/en/education/programmes/bachelors/cse/bachelor-of-computer-science-and-engineering"
        >
          Computer Science and Engineering at TU Delft
        </a>
        . I have a passion for trying new things out and always try to challenge
        myself in the work that I do. Below you'll find some of my projects:
      </h3>
    </div>
  );
}

export default AboutMe;
