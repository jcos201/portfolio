import React from 'react';

import * as styles from './Footer.module.scss'
import gatsbyJS from '../../../static/gatsby.ico'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => (
    <footer className={styles.Footer}>
        <p className={styles.topRow}>
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
            <FontAwesomeIcon className={styles.icon} icon={faGithub} />
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
        </p>
        <p>
            Built using <img src={gatsbyJS} className={styles.gatsbyLogo} alt="GatsbyJS logo"/> by {props.author}
            {' '} &copy; All Rights Reserved
            {' '}{ new Date().getFullYear() } Cossi.Dev
        </p>
    </footer>
);

export default Footer;