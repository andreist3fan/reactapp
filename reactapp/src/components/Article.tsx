// type Props = {
//   id: string;
// };
import { useParams } from "react-router-dom";
import styles from "./css/Article.module.css";
import NavBar from "./NavBar";
function Article() {
  const { id } = useParams();
  return (
    <>
      <NavBar />
      <div className={styles.maindiv}>
        <h1>Article (id = {id})</h1>
        <h5>Description goes here</h5>
        <p>text</p>
        <img src="https://picsum.photos/200/300" alt="random" />
      </div>
    </>
  );
}

export default Article;
