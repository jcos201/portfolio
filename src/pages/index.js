import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faCss3Alt, faHtml5, faPython, faNodeJs, faBootstrap,faReact, faFontAwesome, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby'

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

/*
Component Scoped CSS
*/
const skills = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
}
const awesome = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  fontSize: '1.5rem',
  color: '#808080',
  
}

const Home = () => {
  return (
    <div style={skills}>
      <PageTitle pageTitleText="Hi, I'm Jorge."/> 
      <PageTitle pageTitleText="I've been writing code in JavaScript and Python for market research companies.  I truly enjoy programming, but I'm now ready for my next challenge as a Software Engineer."/> 
      <button class="btn btn-outline-primary"><Link to="/about">Take a look around</Link></button>
        <hr/>
        <p>Technologies I've Worked With</p>
        <div className={styles.skillContainers}>
          <div class="container" className={styles.skillSet} data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            <p className={styles.skillHeading}>Programming Languages</p>
            <p>JavaScript, Python, HTML5, CSS3</p>
            <div style={awesome}>
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
            <div style={awesome}>
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
            <div style={awesome}>
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
            <div style={awesome}>
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