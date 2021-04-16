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
    borderColor: 'rgb(143, 193, 227, 0.5)',
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
                    <Col className={styles.project1} style={odd} lg={5} xl={4}>
                        <Card className={styles.projectCard} style={innerCard} sm={6}>
                            <Row>
                                <Col>
                                    <span className={styles.projects}>Task Collector</span>
                                    <p>Django / Python / PostgeSQL</p>
                                    <p className={styles.detailTxt}>Project Management Tool</p>
                                </Col>
                            </Row>
                            <Row style={projectBtn}>
                                <Col sm="12">
                                <a href="https://taskcollector.herokuapp.com/" target="_blank" rel="noreferrer"><button class="btn btn-primary">See it in action</button></a>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col className={styles.project2} style={even} lg={5} xl={4}>
                        <Card className={styles.projectCard} style={innerCard} sm={6}>
                            <Row>
                                <Col>
                                    <span className={styles.projects}>Job Application Tracker</span>
                                    <p>MERN Stack</p>
                                    <p className={styles.detailTxt}>Online resource for job seekers</p>
                                </Col>
                            </Row>
                            <Row style={projectBtn}>
                                <Col sm="12">
                                <a href="https://mern-job-search-tracker.netlify.app/" target="_blank" rel="noreferrer"><button class="btn btn-primary">See it in action</button></a>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row style={projectRows}>
                    <Col className={styles.project3} style={odd} lg={5} xl={4}>
                        <Card className={styles.projectCard} style={innerCard} sm={6}>
                            <Row>
                                <Col>
                                    <span className={styles.projects}>StatsYo!</span>
                                    <p>Django / Python / PostgeSQL</p>
                                    <p className={styles.detailTxt}>Follow favorite players using MLB Stats API</p>
                                </Col>
                            </Row>
                            <Row style={projectBtn}>
                                <Col sm="12">
                                <a href="https://statsyo.herokuapp.com/" target="_blank" rel="noreferrer"><button class="btn btn-primary">See it in action</button></a>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col className={styles.project4} style={even} lg={5} xl={4}>
                        <Card className={styles.projectCard} style={innerCard} sm={6}>
                            <Row>
                                <Col>
                                    <span className={styles.projects}>WAR! The card game.</span>
                                    <p>HTML5 / CSS3 / JavaScript</p>
                                    <p className={styles.detailTxt}>Card game themed with famous movie villain</p>
                                </Col>
                            </Row>
                            <Row style={projectBtn}>
                                <Col sm="12">
                                <a href="https://war-the-card-game.netlify.app/" target="_blank" rel="noreferrer"><button class="btn btn-primary">See it in action</button></a>
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