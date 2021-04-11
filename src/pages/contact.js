import React from 'react';

import PageTitle from "../components/PageTitle";
import * as styles from "../components/Layout/Layout.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const iconStyles = {
    fontSize: '2.5rem',
    color: '#5085A5'
}

const linkStyle = {
    textDecoration: 'none',
}

const Contact = (props) => (

    <div>
        <PageTitle pageTitleText="Feel free to reach out!"/>
        <div className={styles.contactContainer}>
            <div class="container">
            <address>
                <p><FontAwesomeIcon style={iconStyles} icon={faEnvelope} /> Email</p>
                <p><a href="mailto: jorge@cossi.dev" style={linkStyle}>jorge@cossi.dev</a> </p>
            </address>
            <address>
                <p><FontAwesomeIcon style={iconStyles} icon={faGithub} /> Github</p>
                <p><a href="https://github.com/jcos201" target="_blank" rel="noreferrer" style={linkStyle}>jcos201</a></p>
            </address>
            <address>
                <p><FontAwesomeIcon style={iconStyles} icon={faLinkedin} /> LinkedIn</p>
                <p><a href="https://www.linkedin.com/in/jorge-cossi/" target="_blank" rel="noreferrer" style={linkStyle}>jorge-cossi</a> </p>
            </address>
            </div>
            <div class="container">
                You can send me a note using the form below!
            </div>
        </div>
    </div>


);

export default Contact;