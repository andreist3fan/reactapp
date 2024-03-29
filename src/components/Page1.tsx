import { useEffect, useState } from "react";
import styles from "./css/Page1.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function Page1() {
  // const [pageVisits, setPageVisits] = useState(0);
  const [showAnchor, setShowAnchor] = useState(false);
  const [hello, setHello] = useState("Hi, I'm ");
  // const [cursor, setCursor] = useState("_");
  const things = ["Andrei", "a CSE student", "from Romania", "Andrei."];
  let intervalCursor: NodeJS.Timeout | undefined;
  // const incrementctr = () => {
  //   setPageVisits(pageVisits + 1);
  // };
  //const anchorStyle = styles.anchorStyle;
  // const doSomething = () => {
  //   console.log("do something");
  // };
  useEffect(() => {
    async function displayStuff() {
      setHello("Hi, I'm ");
      for (let k = 0; k < things.length; k++) {
        for (let i = 0; i < things[k].length; i++) {
          setHello(hello + things[k].substring(0, i + 1));
          await new Promise((r) => setTimeout(r, 200));
        }
        if (k < things.length - 1) {
          await new Promise((r) => setTimeout(r, 200));
          for (let i = things[k].length - 1; i >= 0; i--) {
            setHello(hello + things[k].substring(0, i + 1));
            await new Promise((r) => setTimeout(r, 100));
          }
          for (let i = 0; i < 5; i++) {
            setHello(hello + (i % 2 == 0 ? "_" : " "));
            await new Promise((r) => setTimeout(r, 300));
          }
        }
      }
    }
    //TODO: Fix cursor blinking

    // async function cursorBlink() {
    //   // eslint-disable-next-line no-constant-condition, react-hooks/exhaustive-deps
    //   intervalCursor = setInterval(() => {
    //     setCursor(cursor === "_" ? " " : "_");
    //     console.log("wtf");
    //   }, 520);
    // }
    displayStuff();
    //cursorBlink();

    return () => {
      if (intervalCursor) {
        clearInterval(intervalCursor);
      }
    };
  }, []); //<- dependency array, when something here is updated, then the method is called
  // empty array means method is called whenever ANYTHING in the component is updated.
  return (
    <div className={styles.baseStyle}>
      <div
        className={styles.hello}
        onMouseEnter={() => {
          setShowAnchor(true);
        }}
      >
        {hello}
      </div>

      <div
        onMouseLeave={() => {
          setShowAnchor(false);
        }}
        className={
          styles.stuff + " " + `${showAnchor ? styles.visible : styles.hidden}`
        }
      >
        <h3>My stuff!</h3>
        <h2>
          <a
            id={styles.facebook}
            href="https://www.linkedin.com/in/andrei-stefan-1301a2266/"
            className={styles.anchorStyle}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            id={styles.youtube}
            href="https://www.youtube.com"
            className={styles.anchorStyle}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>

          <a
            id={styles.github}
            href="https://www.github.com/desertyou"
            className={styles.anchorStyle}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </h2>
      </div>

      {/* <p>Page visits: {pageVisits}</p>
        <button onClick={() => incrementctr}>Increment</button>
        {pageVisits == 0 ? <p>bruh</p> : <p>wow updated!!</p>} */}
    </div>
  );
}

export default Page1;
