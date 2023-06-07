// type Props = {
//   id: string;
// };
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Project } from "../objects/Project";
import { fetchProjectById } from "../ProjectController";
import styles from "./css/Article.module.css";
import NavBar from "./NavBar";
function Article() {
  const { id } = useParams();
  console.log(id);
  const no = parseInt(id?.toString() || "0");
  const [project, setProject] = useState<Project>(
    new Project(0, "Loading...", "", [])
  );
  const renderArticle = () => {
    return (
      <>
        <h1>{project.name}</h1>
        <h5>{project.description}</h5>
        <p></p>
        <img src={project.images[0]} alt="random" />
      </>
    );
  };
  let article = renderArticle();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     for (let i = 0; i < 10; i++) {
  //       const fetchedProject = fetchProjectById(no);
  //       if (fetchedProject !== null) {
  //         setProject(fetchedProject);
  //         return;
  //       }
  //       await new Promise((r) => setTimeout(r, 30));
  //     }
  //     if (project.name === "Loading...")
  //       setProject(
  //         new Project(
  //           0,
  //           "Project Not Found",
  //           "The project you are searching for doesn't exist. Try again later.",
  //           []
  //         )
  //       );
  //   };
  //   fetchData();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProject = await fetchProjectById(no);
      if (fetchedProject !== null) {
        setProject(fetchedProject);
      } else {
        setProject(
          new Project(
            0,
            "Project Not Found",
            "The project you are searching for doesn't exist. Try again later.",
            []
          )
        );
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    article = renderArticle();
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.maindiv}>{article}</div>
    </>
  );
}

export default Article;
