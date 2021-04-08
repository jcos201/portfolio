import React from "react";

import PageTitle from "../components/PageTitle";

const Home = () => {
  return (
    <div>
      <PageTitle pageTitleText="Hi, I'm Jorge"/>
      <div>
        My Skills
        <div>
          <div>Programming Languages</div>
          <div>Frameworks / Databases</div>
          <div>Software</div>
        </div>
      </div>
    </div>
  );
}
export default Home;