import React from "react";

import PageTitle from "../components/PageTitle";
import * as styles from "../components/Layout/Layout.module.scss";

const Home = () => {
  return (
    <div>
      <PageTitle pageTitleText="Hi, I'm Jorge"/>
      <div className={styles.skills}>
        My Skills
        <div className={styles.skillContainers}>
          <div class="container">Programming Languages</div>
          <div class="container">Libraries</div>
        </div>
        <div className={styles.skillContainers}>
          <div class="container">Frameworks / Databases</div>
          <div class="container">Software</div>
        </div>
      </div>
    </div>
  );
}
export default Home;