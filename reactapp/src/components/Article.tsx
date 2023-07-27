// type Props = {
//   id: string;
// };
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Project } from "../objects/Project";
import { fetchProjectById } from "../ProjectController";
import styles from "./css/Article.module.css";
import commonStyles from "./css/Common.module.css";
import NavBar from "./NavBar";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Article() {
  const { id } = useParams();
  const [imageIndex, setImageIndex] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  console.log(id);

  const no = parseInt(id?.toString() || "0");
  const [project, setProject] = useState<Project>(
    new Project(0, "Loading...", "", ["gear"])
  );
  const img_carrousel = () => {
    return (
      <div className={styles.carrouselContainer}>
        <div
          onClick={() =>
            setImageIndex((imageIndex - 1) % project.images.length)
          }
          className={styles.arrows}
        >
          {" "}
          &#8592;{" "}
        </div>
        <div>
          <img
            src={project.images[imageIndex]}
            onClick={() => {
              window.open(project.images[imageIndex]);
            }}
          />
        </div>
        <div
          className={styles.arrows}
          onClick={() =>
            setImageIndex((imageIndex + 1) % project.images.length)
          }
        >
          {" "}
          &#8594;{" "}
        </div>
      </div>
    );
  };
  const renderArticle = () => {
    return (
      <div>
        <h1>{project.name}</h1>
        <h5>{project.description}</h5>
        <p></p>
        {project.images[0] == "gear" ? (
          <FontAwesomeIcon
            icon={faGear}
            style={{
              transform: `rotate(${rotationAngle}deg)`,
              width: "80px",
              height: "80px",
            }}
          />
        ) : (
          img_carrousel()
        )}
      </div>
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
    const rotationInterval = setInterval(() => {
      setRotationAngle((prevAngle) => prevAngle + 1);
    }, 10);

    const fetchData = async () => {
      const fetchedProject = await fetchProjectById(no);
      clearInterval(rotationInterval);
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
      <div className={commonStyles.background + " " + styles.maindiv}>
        {article}
      </div>
    </>
  );
}

export default Article;
