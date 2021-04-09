import React from 'react';
import { Link } from 'gatsby'

import PageTitle from "../components/PageTitle"

const About = () => (
    <div>
        <PageTitle pageTitleText="Hello.  I'm Jorge!"/>
        <p>
        I became a software engineer because I love to build things that people find helpful and functional.
        </p>
        <p>
            I've been using JavaScript and Python to write algorithms as a Market Research Survey Programmer for over 12 years, but my love lies in coding.  I enjoy creating things that are useful - I get great joy knowing the apps I've built are used by others.
        </p>
        <p>
            I'm also a husband and a father to two amazing kids and love to cook and share with others the amazing cuisine from my native Peru.
        </p>
            <button class="btn btn-primary"> <Link to="/contact">Contact Me</Link></button>
    </div>
)

export default About;