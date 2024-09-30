import React from "react";
import "./workExp.css";
import { CardContent, Card, Icon } from "semantic-ui-react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

const WorkExp = () => {
    return (
        <section id="work-exp">
            <Box sx={{ flexGrow: 1 }} className="exp-card">
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={3} lg={3} className="card-left">
                        <p className="card-date">10.2022 - Present</p>
                        <p>Rostock, Germany</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={9} className="card-right">
                        <Card>
                            <CardContent header="Work Student Software Engineer - Fraunhofer IGD"></CardContent>
                            <CardContent className="description card-details">
                                <ul id="list">
                                    <li>
                                        Architecting a reliable web application
                                        for an ongoing research project, which
                                        will enable data visualization and data
                                        export in tabular format, and ensure
                                        secure and customized user experiences
                                        using role-based access control for 100+
                                        users.
                                    </li>
                                    <li>
                                        Programmed over 10+ frontend components
                                        using ReactJs and Material UI,
                                        implemented authentication and
                                        authorization protocols using JSON web
                                        tokens (JWT), and designed over 10+
                                        RESTful APIs using Node.js.
                                    </li>
                                    <li>
                                        Working on data-fetching APIs to
                                        efficiently retrieve and process over 10
                                        million records using Node.js Streams
                                        and pagination techniques, from the
                                        PostgreSQL database.
                                    </li>
                                    <li>
                                        Automated application development
                                        processes with Docker containers,
                                        achieving a 50% decrease in development
                                        environment setup time, and configured
                                        Nginx as a reverse proxy and load
                                        balancer to manage traffic efficiently.
                                    </li>
                                </ul>
                            </CardContent>
                            <CardContent className="card-techs card-details">
                                <div>HTML</div>
                                <div>CSS</div>
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
                        <p className="card-date">10.2022 - 04.2023</p>
                        <p>Rostock, Germany</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={9} className="card-right">
                        <Card>
                            <CardContent header="Research Assistant - University of Rostock" />
                            <CardContent className="description card-details">
                                <ul id="list">
                                    <li>
                                        Development and maintenance of reliable
                                        web-based system for research projects
                                        using ReactJs, NodeJs, and PostgreSQL
                                    </li>
                                    <li>
                                        Designed, developed, tested, and
                                        maintained applications throughout the
                                        Software Development Life Cycle (SDLC),
                                        ensuring adherence to Agile
                                        methodologies and delivering
                                        high-quality, scalable solutions in line
                                        with industry best practices.
                                    </li>
                                    <li>
                                        Utilized the latest tech stack,
                                        including WSL, Docker, and other modern
                                        tools, to ensure a smooth and efficient
                                        workflow for software development and
                                        deployment processes.
                                    </li>
                                </ul>
                            </CardContent>
                            <CardContent className="card-techs card-details">
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>React Js</div>
                                <div>React Flow Library</div>
                                <div>Material UI</div>
                                <div>Semantic UI</div>
                                <div>Redux Toolkit</div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} className="exp-card">
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={3} lg={3} className="card-left">
                        <p className="card-date">10.2022 - 04.2023</p>
                        <p>Karachi, Pakistan</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={9} className="card-right">
                        <Card>
                            <CardContent header="Software Engineer - TPS Worldwide" />
                            <CardContent className="description card-details">
                                <ul id="list">
                                    <li>
                                        Worked as a part of the Product
                                        Development Team to develop reliable and
                                        sustainable e-banking and Payment
                                        solutions using C++, Node.js, and Oracle
                                        Database.
                                    </li>
                                    <li>
                                        Developed APIs and transaction workflows
                                        for the banking middleware IRIS and
                                        SPARROW based on ISO 20022, and
                                        integrated them with the existing
                                        banking middleware architecture.
                                    </li>
                                    <li>
                                        Collaborated with the QA and
                                        Implementation team to test and
                                        integrate the new features and modules
                                        along the pre-existing code base.
                                    </li>
                                    <li>
                                        Wrote clean, adherent code following
                                        industry best practices, and facilitated
                                        peer reviews by creating and managing
                                        pull requests in Microsoft TFS.
                                    </li>
                                </ul>
                            </CardContent>
                            <CardContent className="card-techs card-details">
                                <div>C++</div>
                                <div>Node Js</div>
                                <div>SQL</div>
                                <div>Oracle</div>
                                <div>Dockers</div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} className="exp-card">
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={3} lg={3} className="card-left">
                        <p className="card-date">10.2020 - 08.2021</p>
                        <p>Karachi, Pakistan</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={9} className="card-right">
                        <Card>
                            <CardContent header="Software Engineer - Avanza Solutions" />
                            <CardContent className="description card-details">
                                <ul id="list">
                                    <li>
                                        As a member of the Software
                                        Implementation Team, built various
                                        financial solutions based on Avanza’s
                                        banking switch Rendezvous using C++ and
                                        SQL Server.
                                    </li>
                                    <li>
                                        Engineered financial and non-financial
                                        transactions workflows for banking
                                        systems using ISO 8583 standards for
                                        different channels including Internet
                                        banking, mobile banking, and ATM.
                                    </li>
                                    <li>
                                        Configured Cash and Cheque Deposit
                                        Machine System System for ATM, reducing
                                        manual processing time by 50%, for 3
                                        million+ customers of Meezan Bank.
                                    </li>
                                    <li>
                                        Communicated with partner bank’s IT
                                        teams to integrate and deploy the newly
                                        constructed modules with the
                                        pre-existing banking middleware.
                                    </li>
                                </ul>
                            </CardContent>
                            <CardContent className="card-techs card-details">
                                <div>C++</div>
                                <div>SQL</div>
                                <div>SQL Server</div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
};

export default WorkExp;
