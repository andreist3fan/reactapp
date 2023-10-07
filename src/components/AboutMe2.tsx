import styles from "./css/AboutMe.module.scss";
import {
  BiLogoJava,
  BiLogoCPlusPlus,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoPython,
} from "react-icons/bi";
import { SiCsharp } from "react-icons/si";
function AboutMe2() {
  return (
    <div className={styles.block}>
      <div className={styles.grid}>
        <div className={styles.uniitem}>
          Studying Computer Science and Engineering at
          <div>
            <img
              className={styles.image}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cardsonline.info%2Fwp-content%2Fuploads%2F2019%2F01%2FTU_Delft_logo_wit2.png&f=1&nofb=1&ipt=0bea642bd0ffacaef15e28d87774911510629a17c3e27e0306f81d09a2417b53&ipo=images"
            ></img>
          </div>
        </div>
        <div className={styles.favlangitem}>
          Favorite programming language?
          <div>
            <BiLogoJava className={styles.icon} />
          </div>
          Yes, I like torturing myself with boilerplate code.
        </div>
        <div className={styles.langsitem}>
          All the programming languages I know:
          <div>
            <BiLogoJava className={styles.iconline} />
            <BiLogoCPlusPlus className={styles.iconline} />
            <BiLogoJavascript className={styles.iconline} />
            <BiLogoTypescript className={styles.iconline} />
            <BiLogoPython className={styles.iconline} />
            <SiCsharp className={styles.iconline} />
          </div>
        </div>
      </div>
      <div className={styles.grid2}>
        <div className={styles.griditem}>
          {" "}
          Favorite programming language?
          <div>
            <BiLogoJava className={styles.iconline} />
          </div>
        </div>
        <div className={styles.griditem}>
          {" "}
          Favorite programming language?
          <div>
            <BiLogoJava className={styles.iconline} />
          </div>
        </div>
        <div className={styles.griditem}>
          {" "}
          Favorite programming language?
          <div>
            <BiLogoJava className={styles.iconline} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe2;
