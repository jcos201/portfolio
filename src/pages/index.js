import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faCss3Alt, faHtml5, faPython, faNodeJs, faBootstrap,faReact, faFontAwesome, faGithub } from '@fortawesome/free-brands-svg-icons';

import PageTitle from "../components/PageTitle";
import * as styles from "../components/Layout/Layout.module.scss";

/*
Here I'm importing custom made skills icons
*/
import django from "../../static/django.png"
import gatsbyIcon from "../../static/gatsby.png"
import mat from "../../static/materialize.png"
import mongo from "../../static/mongo.png"
import pgSQL from "../../static/posgresql.png"
import vs from "../../static/vs.png"
import exprs from "../../static/expressV2.png"

const Home = () => {
  return (
    <div className={styles.skills}>
      <PageTitle pageTitleText="Hi, I'm Jorge."/> 
      <PageTitle pageTitleText="This is my website.  I've been writing code in JavaScript and Python for many years now.  I truly enjoy programming but I'm now ready for my next challenge as a Software Engineer."/> 
        <button class="btn btn-outline-primary">Take a look around.</button>
        <hr/>
        <p>Technologies I've Worked With</p>
        <div className={styles.skillContainers}>
          <div class="container" className={styles.skillSet} data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            <p className={styles.skillHeading}>Programming Languages</p>
            <p>JavaScript, Python, HTML5, CSS3</p>
            <div className={styles.awesome}>
            <FontAwesomeIcon icon={faJsSquare} />
            <FontAwesomeIcon icon={faPython} />
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3Alt} />
            </div>
          </div>
          <div class="container" className={styles.skillSet} data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">
            <p className={styles.skillHeading}>Frameworks / Databases</p>
            <p>Bootstrap, django, Express, GatsbyJS, mongoDB</p>
            <div className={styles.awesome}>
            <FontAwesomeIcon icon={faBootstrap} />
            <img src={django} className={styles.skillIcons} alt="I've built applications using Django framework"/>
            <img src={exprs} className={styles.skillIcons} alt="Have built a full stack application using Express"/>
            <img src={gatsbyIcon} className={styles.skillIcons} alt="This site is built using GatsbyJS"/>
            <img src={mongo} className={styles.skillIcons} alt="I've built full CRUD applications using MongoDB database"/>
            </div>
          </div>
        </div>
        <div className={styles.skillContainers}>
        <div class="container" className={styles.skillSet} data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">
            <p className={styles.skillHeading}>Libraries</p>
            <p>React, Materialize, Font Awesome</p>
            <div className={styles.awesome}>
            <FontAwesomeIcon icon={faReact} />
            <img src={mat} className={styles.skillIcons} alt="I have used the Materialize.css library on several projects."/>
            <FontAwesomeIcon icon={faFontAwesome} />
            </div>
          </div>
          <div class="container" className={styles.skillSet} data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">
            <p className={styles.skillHeading}>Software</p>
            <p>GitHub, node.JS, PostgreSQL, VS Code</p>
            <div className={styles.awesome}>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faNodeJs} />
            <img src={pgSQL} className={styles.skillIcons} alt="I've used PostgreSQL when building Django applications and have built full CRUD applications using it."/>
            <img src={vs} className={styles.skillIcons} alt="I'm well versed with using VS Code editor"/>
            </div>
          </div>
      
        </div>
    </div>
  );
}
export default Home;