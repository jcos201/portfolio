import React from "react";

import PageTitle from "../components/PageTitle";
import * as styles from "../components/Layout/Layout.module.scss";
import { Container, Card, Row, Col } from "react-bootstrap";

/*
The below CSS in JS is used only when styling is not dependent on media size
*/

const projectDiv = {
    width: '100%',
}

const odd = {
    textAlign: 'center',
    border: 'solid 1px',
    borderColor: 'rgb(80, 133, 165, 0.5)',
}

const even = {
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'center',
    border: 'solid 1px',
    borderColor: 'rgb(143, 193, 227, 0.5)',
}

const projectBtn = {
    paddingTop: '15px',
    paddingBottom: '5px',
    display: 'flex',
    justifyContent: 'center',
}

const projectRows = {
    justifyContent: 'center',
}

const innerCard = {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
}




const Projects = (props) => {
    return (
        <div style={projectDiv}>
        <PageTitle pageTitleText="Projects"/>
            <Container>
                <Row style={projectRows}>
                    <Col className={styles.project1} style={odd} lg={4}>
                        <Card className={styles.projectCard} style={innerCard} sm={6}>
                            <Row>
                                <Col>
                                    <span className={styles.projects}>Task Collector</span>
                                    <p>Django / Python / PostgeSQL</p>
                                </Col>
                            </Row>
                            <Row style={projectBtn}>
                                <Col sm="12">
                                    <button class="btn btn-primary">See it in action</button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col className={styles.project2} style={even} lg={4}>
                        <Card className={styles.projectCard} style={innerCard} sm={6}>
                            <Row>
                                <Col>
                                    <span className={styles.projects}>Job Application Tracker</span>
                                    <p>MERN Stack</p>
                                </Col>
                            </Row>
                            <Row style={projectBtn}>
                                <Col sm="12">
                                    <button class="btn btn-primary">See it in action</button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row style={projectRows}>
                    <Col className={styles.project3} style={odd} lg={4}>
                        <Card className={styles.projectCard} style={innerCard} sm={6}>
                            <Row>
                                <Col>
                                    <span className={styles.projects}>StatsYo!</span>
                                    <p>Django / Python / PostgeSQL</p>
                                </Col>
                            </Row>
                            <Row style={projectBtn}>
                                <Col sm="12">
                            <button class="btn btn-primary">See it in action</button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col className={styles.project4} style={even} lg={4}>
                        <Card className={styles.projectCard} style={innerCard} sm={6}>
                            <Row>
                                <Col>
                                    <span className={styles.projects}>WAR! The card game.</span>
                                    <p>HTML5 / CSS3 / JavaScript</p>
                                </Col>
                            </Row>
                            <Row style={projectBtn}>
                                <Col sm="12">
                            <button class="btn btn-primary">See it in action</button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>



            
        </div>
        )
}

export default Projects;