import React from 'react';

import * as styles from './Footer.module.scss'
import gatsbyJS from '../../../static/gatsby.ico'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const copyRow = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'space-around',
}

const iconRow = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-around',
    marginBottom: '5px',
    fontSize: '30px',
   
    margin: '0 10px',
    
}

const iconDiv = {
    border: 'solid 1px',
    borderColor: '#5085A5',
    borderRadius: '10px',
    padding: '0px 10px',
    margin: '0 10px 10px 10px',
}

const Footer = (props) => (
    <footer className={styles.Footer}>
        <div>
            <p style={iconRow}>
                <div style={iconDiv}>
                    <a href="https://www.linkedin.com/in/jorge-cossi/" target="_blank" rel="noreferrer"> <FontAwesomeIcon className={styles.icon} icon={faLinkedin} /> </a>
                </div>
                <div style={iconDiv}>
                    <a href="https://github.com/jcos201" target="_blank" rel="noreferrer"> <FontAwesomeIcon className={styles.icon} icon={faGithub} /> </a>
                </div>
                <div style={iconDiv}>
                    <a href="https://twitter.com/jcos201" target="_blank" rel="noreferrer"> <FontAwesomeIcon className={styles.icon} icon={faTwitter} /> </a>
                </div>
            </p>
        </div>
        <div style={copyRow}>
            <p>
                Built using <img src={gatsbyJS} className={styles.gatsbyLogo} alt="GatsbyJS logo"/>,
                {' '}Jorge L. Cossi &copy;
                {' '}{ new Date().getFullYear() }
            </p>
        </div>
    </footer>
);

export default Footer;