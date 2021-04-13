import React from "react";
//import { Links } from "gatsby";

import PageTitle from "../components/PageTitle";
import * as styles from "../components/Layout/Layout.module.scss";

const Projects = (props) => {
    return (
        <div>
        <PageTitle pageTitleText="Projects"/>
            <div class="container center">
                Task Collector
                <p>Project management application built using Django.</p>
                <button class="btn btn-primary">See it in action</button>
            </div>
            <div class="container center">
                <span className={styles.jobapp}>Job Application Tracker</span>
                <p>Free online tool for job seekers to track jobs applied for and launch job searches with some of the most popular online job search engines.</p>
                <button class="btn btn-primary">See it in action</button>
            </div>
            <div class="container center">
                StatsYo
                <p>Team project using MLB Stats API to help users track their favorite players.</p>
                <button class="btn btn-primary">See it in action</button>
            </div>
            <div class="container center">
                WAR! The Card Game.
                <p>Online version of the popular card game with a bit of a Halloween theme.</p>
                <button class="btn btn-primary">See it in action</button>
            </div>
        </div>
        )
}

export default Projects;