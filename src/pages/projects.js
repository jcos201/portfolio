import React from "react";
import { Links } from "gatsby";

import PageTitle from "../components/PageTitle";

const Projects = (props) => {
    return (
        <div>
        <PageTitle pageTitleText="Projects"/>
            <div>
                Task Collector
                <p>Project management application built using Django.</p>
                <button>See it in action</button>
            </div>
            <div>
                Job Application Tracker
                <p>Free online tool for job seekers to track jobs applied for and launch job searches with some of the most popular online job search engines.</p>
                <button>See it in action</button>
            </div>
            <div>
                StatsYo
                <p>Team project using MLB Stats API to help users track their favorite players.</p>
                <button>See it in action</button>
            </div>
            <div>
                WAR! The Card Game.
                <p>Online version of the popular card game with a bit of a Halloween theme.</p>
                <button>See it in action</button>
            </div>
        </div>
        )
}

export default Projects;