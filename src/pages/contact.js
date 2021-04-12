import React, { useState } from 'react';

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

const Contact = (props) =>  {
    
    const [formState, setFormState] = useState({
        name: "",
        email: "",
    })
    
    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...formState })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }
    
    return (

    <div>
        <PageTitle pageTitleText="Feel free to reach out!"/>
        <div className={styles.contactContainer}>
            <div class="container">
            <address>
                <p><FontAwesomeIcon style={iconStyles} icon={faEnvelope} /> <span className={styles.iconLabel}>Email</span></p>
                <p><a href="mailto: jorge@cossi.dev" style={linkStyle}><span  className={styles.contact}>jorge@cossi.dev</span></a> </p>
            </address>
            <address>
                <p><FontAwesomeIcon style={iconStyles} icon={faGithub} /> <span className={styles.iconLabel}>Github</span></p>
                <p><a href="https://github.com/jcos201" target="_blank" rel="noreferrer" style={linkStyle}><span  className={styles.contact}>jcos201</span></a></p>
            </address>
            <address>
                <p><FontAwesomeIcon style={iconStyles} icon={faLinkedin} /> <span className={styles.iconLabel}>LinkedIn</span></p>
                <p><a href="https://www.linkedin.com/in/jorge-cossi/" target="_blank" rel="noreferrer" style={linkStyle}><span  className={styles.contact}>jorge-cossi</span></a> </p>
            </address>
            </div>
            <div class="container" className={styles.contactForm}>
                You can send me a note using the form below!
                <div>
                    <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        <input id="name" 
                            type="text"
                            name="name" 
                            onChange={handleChange} 
                            value={formState.name}
                            placeholder="Your name"
                            />
                        <input id="email" 
                            type="email" 
                            name="email"
                            onChange={handleChange} 
                            value={formState.email}
                            placeholder="Your email"
                            />
                        <textarea id="message" 
                            type="message" 
                            name="message"
                            onChange={handleChange} 
                            value={formState.message}
                            placeholder="Your message"
                            />
                        <button type="submit">Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div> 
    )
};

export default Contact;