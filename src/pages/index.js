import React from "react";

import PageTitle from "../components/PageTitle";
import * as styles from "../components/Layout/Layout.module.scss";

const Home = () => {
  return (
    <div>
      <PageTitle pageTitleText="Hi, I'm Jorge"/>
      <div className={styles.skills}>
        My Skills
        <div>
          <div class="container">Programming Languages</div>
          <div>Frameworks / Databases</div>
          <div>Software</div>
        </div>
      </div>
    </div>
  );
}
export default Home;