import React from 'react';
import { Link } from 'gatsby';

const Contact = (props) => (

    <div>
        <h1>Feel free to reach out!</h1>
        <address>
            <p>Email Me: <a href="mailto: jorge@cossi.dev">jorge@cossi.dev</a> </p>
        </address>
        <address>
            <p>GitHub <a href="https://github.com/jcos201" target="_blank" rel="noreferrer">jcos201</a></p>
        </address>
        <address>
            <p>LinkedIn <a href="https://www.linkedin.com/in/jorge-cossi/" target="_blank" rel="noreferrer">jorge-cossi</a> </p>
        </address>
        <Link to ="/about">Learn More</Link>
    </div>
);

export default Contact;