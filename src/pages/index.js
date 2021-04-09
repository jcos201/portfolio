import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faCss3Alt, faHtml5, faPython, faNodeJs, faBootstrap,faReact, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

import PageTitle from "../components/PageTitle";
import * as styles from "../components/Layout/Layout.module.scss";

const Home = () => {
  return (
    <div className={styles.skills}>
      <PageTitle pageTitleText="Hi, I'm Jorge"/>
      
        Technologies I've Worked With
        <div className={styles.skillContainers}>
          <div class="container">
            <p className={styles.skillHeading}>Programming Languages</p>
            
            <div className={styles.awesome}>
            <FontAwesomeIcon icon={faJsSquare} />
            <FontAwesomeIcon icon={faPython} />
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3Alt} />
            </div>
          </div>
          <div class="container">
            <p className={styles.skillHeading}>Frameworks / Databases</p>
            
            <div className={styles.awesome}>
            <FontAwesomeIcon icon={faBootstrap} />
            Django
            express
            gatsby
            mongoDB
            Oauth
            </div>
          </div>
        </div>
        <div className={styles.skillContainers}>
        <div class="container">
            <p className={styles.skillHeading}>Libraries</p>
            <div className={styles.awesome}>

            <FontAwesomeIcon icon={faReact} />
            Materialize
            <FontAwesomeIcon icon={faFontAwesome} />
            </div>
          </div>
          <div class="container">
            <p className={styles.skillHeading}>Software</p>

            <div className={styles.awesome}>
            <FontAwesomeIcon icon={faNodeJs} />
            PostgreSQL
            VS Code
            </div>
          </div>
      
        </div>
    </div>
  );
}
export default Home;