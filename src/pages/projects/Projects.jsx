import React from "react";
import "./project.css";
// import '../workExp/workExp.css'
import { CardContent, Card, Icon } from "semantic-ui-react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

const Projects = () => {
    return (
        <section id="projects">
            <Box sx={{ flexGrow: 1 }} className="exp-card">
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={3} lg={3} className="card-left">
                        <p className="card-date">10.2022 - Present</p>
                        <p className="card-date">Fraunhofer IGD</p>
                        <p>Rostock, Germany</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={9} className="card-right">
                        <Card>
                            <CardContent header="Web-base data management system for maritime device data access"></CardContent>
                            <CardContent className="description card-details">
                                <ul id="list">
                                    <li>
                                        Development and maintenance of reliable
                                        web-based system for research projects
                                        using ReactJs, NodeJs, and PostgreSQL
                                    </li>
                                    <li>
                                        Application design and development, code
                                        testing, and maintenance
                                    </li>
                                    <li>
                                        Utilization of the latest tech stack
                                        including WSL, Dockers, etc for smooth
                                        workflow
                                    </li>
                                </ul>
                            </CardContent>
                            <CardContent className="card-techs card-details">
                                <div>React Js</div>
                                <div>Material UI</div>
                                <div>Semantic UI</div>
                                <div>Node Js</div>
                                <div>Express JS</div>
                                <div>Sequelize</div>
                                <div>PostgreSQL</div>
                                <div>Dockers</div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} className="exp-card">
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={3} lg={3} className="card-left">
                        <p className="card-date">2021 - 2022</p>
                        <p className="card-date">TPS Worldwide</p>
                        <p>Karachi, Pakistan</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={9} className="card-right">
                        <Card>
                            <CardContent header="Micro Payments Gateway (MPG) Transactions"></CardContent>
                            <CardContent className="description card-details">
                                <ul id="list">
                                    <li>
                                        Development and maintenance of reliable
                                        web-based system for research projects
                                        using ReactJs, NodeJs, and PostgreSQL
                                    </li>
                                    <li>
                                        Application design and development, code
                                        testing, and maintenance
                                    </li>
                                    <li>
                                        Utilization of the latest tech stack
                                        including WSL, Dockers, etc for smooth
                                        workflow
                                    </li>
                                </ul>
                            </CardContent>
                            <CardContent className="card-techs card-details">
                                <div>C++</div>
                                <div>Node Js</div>
                                <div>Oracle DB</div>
                                <div>Dockers</div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} className="exp-card">
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={3} lg={3} className="card-left">
                        <p className="card-date">2020 - 2021</p>
                        <p className="card-date">Avanza Solutions</p>
                        <p>Karachi, Pakistan</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={9} className="card-right">
                        <Card>
                            <CardContent header="Cash and Cheque Deposit Machine System"></CardContent>
                            <CardContent className="description card-details">
                                <ul id="list">
                                    <li>
                                        Development and maintenance of reliable
                                        web-based system for research projects
                                        using ReactJs, NodeJs, and PostgreSQL
                                    </li>
                                    <li>
                                        Application design and development, code
                                        testing, and maintenance
                                    </li>
                                    <li>
                                        Utilization of the latest tech stack
                                        including WSL, Dockers, etc for smooth
                                        workflow
                                    </li>
                                </ul>
                            </CardContent>
                            <CardContent className="card-techs card-details">
                                <div>C++</div>
                                <div>SQL Server</div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} className="exp-card">
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={3} lg={3} className="card-left">
                        <p className="card-date">2019 - 2020</p>
                        <p className="card-date">NED University</p>
                        <p>Karachi, Pakistan</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={9} className="card-right">
                        <Card>
                            <CardContent header="Mediquick - Undergraduate Final Project"></CardContent>
                            <CardContent className="description card-details">
                                <ul id="list">
                                    <li>
                                        Development and maintenance of reliable
                                        web-based system for research projects
                                        using ReactJs, NodeJs, and PostgreSQL
                                    </li>
                                    <li>
                                        Application design and development, code
                                        testing, and maintenance
                                    </li>
                                    <li>
                                        Utilization of the latest tech stack
                                        including WSL, Dockers, etc for smooth
                                        workflow
                                    </li>
                                </ul>
                            </CardContent>
                            <CardContent className="card-techs card-details">
                                <div>React Js</div>
                                <div>Material UI</div>
                                <div>.Net Framework</div>
                                <div>SQL Server</div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
};

export default Projects;
