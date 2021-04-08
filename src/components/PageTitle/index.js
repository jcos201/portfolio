import React from 'react';

import * as styles from './PageTitle.module.scss';

const PageTitle = (props) => (
    <div className={styles.pageTitle}>{props.pageTitleText}</div>
);

export default PageTitle;