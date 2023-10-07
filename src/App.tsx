//import Message from "./message";
//import ListGroup from "./components/ListGroup";
import AboutMe from "./components/AboutMe";
import AboutMe2 from "./components/AboutMe2";
import NavBar from "./components/NavBar";
import Page1 from "./components/Page1";
import Projects from "./components/Projects";
import styles from "./components/css/Common.module.css";
function App() {
  return (
    <body className={styles.background}>
      <NavBar />
      <Page1 />
      <AboutMe />
      <AboutMe2 />
      <Projects />
    </body>
  );
}

export default App;
