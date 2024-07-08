import React from "react";
import "./skillset.css";
import { CardContent, Card } from "semantic-ui-react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import htmlLogo from "../../imgs/skills/html.png";
import cssLogo from "../../imgs/skills/css.png";
import jsLogo from "../../imgs/skills/js.png";
import cLogo from "../../imgs/skills/c.png";
import cplusLogo from "../../imgs/skills/c++.png";
import reactLogo from "../../imgs/skills/react.png";
import nodeLogo from "../../imgs/skills/node.png";
import exLogo from "../../imgs/skills/ex.png";
import sqlserverLogo from "../../imgs/skills/sqlserver.png";
import postgresLogo from "../../imgs/skills/postgres.png";
import mongoLogo from "../../imgs/skills/mongo.png";
import dockersLogo from "../../imgs/skills/dockers.png";
import dockercomposeLogo from "../../imgs/skills/docker-compose.png";
import gitLogo from "../../imgs/skills/git.png";
import githubLogo from "../../imgs/skills/github.png";
import linuxLogo from "../../imgs/skills/linux.png";
import travisLogo from "../../imgs/skills/travis.png";

const Skillset = () => {
    return (
        <section id="skillset">
            {/* <h1>Skill Set</h1> */}
            <Box sx={{ flexGrow: 1 }} className="skill-card">
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={3} lg={3} className="skill-left">
                        <p className="skill-type">Programming Languages</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={9} className="skill-right">
                        <Card>
                            <CardContent className="card-skills">
                                {/* <img src="../../imgs/skills/html.jpg" alt="HTML logo" /> */}
                                <div>
                                    <img
                                        className="skill-logo"
                                        src={htmlLogo}
                                        title="HTML"
                                        alt="HTML logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="skill-logo"
                                        src={cssLogo}
                                        title="CSS"
                                        alt="CSS logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="skill-logo"
                                        src={jsLogo}
                                        title="JS"
                                        alt="JS logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="skill-logo"
                                        src={cLogo}
                                        title="C"
                                        alt="C logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="skill-logo"
                                        src={cplusLogo}
                                        title="C++"
                                        alt="C++ logo"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} className="skill-card">
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={3} lg={3} className="skill-left">
                        <p className="skill-type">Libraries</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={9} className="skill-right">
                        <Card>
                            <CardContent className="card-skills">
                                {/* <img src="../../imgs/skills/html.jpg" alt="HTML logo" /> */}
                                <div>
                                    <img
                                        className="skill-logo"
                                        src={reactLogo}
                                        title="REACT JS"
                                        alt="REACT JS logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="skill-logo"
                                        title="NODE JS"
                                        src={nodeLogo}
                                        alt="NODE logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="skill-logo"
                                        title="EXPRESS JS"
                                        src={exLogo}
                                        alt="EXPRESS logo"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} className="skill-card">
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={3} lg={3} className="skill-left">
                        <p className="skill-type">Databases</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={9} className="skill-right">
                        <Card>
                            <CardContent className="card-skills">
                                {/* <img src="../../imgs/skills/html.jpg" alt="HTML logo" /> */}
                                <div>
                                    <img
                                        className="skill-logo"
                                        title="SQL SERVER"
                                        src={sqlserverLogo}
                                        alt="SQLSERVER logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="skill-logo"
                                        title="POSTGRESQL"
                                        src={postgresLogo}
                                        alt="POSTGRESQL logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="skill-logo"
                                        title="MONGO DB"
                                        src={mongoLogo}
                                        alt="MONGO logo"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} className="skill-card">
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={3} lg={3} className="skill-left">
                        <p className="skill-type">Tools</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={9} lg={9} className="skill-right">
                        <Card>
                            <CardContent className="card-skills">
                                <div>
                                    <img
                                        className="skill-logo"
                                        title="DOCKERS"
                                        src={dockersLogo}
                                        alt="DOCKERS logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="skill-logo"
                                        title="DOCKER-COMPOSE"
                                        src={dockercomposeLogo}
                                        alt="DOCKER-COMPOSE logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="skill-logo"
                                        title="TRAVIS CI"
                                        src={travisLogo}
                                        alt="TRAVIS CI logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="skill-logo"
                                        title="GIT"
                                        src={gitLogo}
                                        alt="GIT logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="skill-logo"
                                        title="GITHUB"
                                        src={githubLogo}
                                        alt="GITHUB logo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="skill-logo"
                                        title="LINUX"
                                        src={linuxLogo}
                                        alt="LINUX logo"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
};

export default Skillset;
