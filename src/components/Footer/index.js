import React from 'react';

import * as styles from './Footer.module.scss'
import gatsbyJS from '../../../static/gatsby.ico'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => (
    <footer className={styles.Footer}>
        <p>
            Built using <img src={gatsbyJS} className={styles.gatsbyLogo} alt="GatsbyJS logo"/>
        </p>
        <p>
            Jorge L. Cossi &copy; All Rights Reserved
            {' '}{ new Date().getFullYear() }
        </p>
        <p className={styles.topRow}>
            <a href="https://www.linkedin.com/in/jorge-cossi/" target="_blank" rel="noreferrer"> <FontAwesomeIcon className={styles.icon} icon={faLinkedin} /> </a>
            <a href="https://github.com/jcos201" target="_blank" rel="noreferrer"> <FontAwesomeIcon className={styles.icon} icon={faGithub} /> </a>
        </p>
    </footer>
);

export default Footer;