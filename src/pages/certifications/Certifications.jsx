import React from "react";
import { Link } from "react-router-dom";
import "./certifications.css";
import { CardContent, Card, Icon } from "semantic-ui-react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import nodeCert from "../../imgs/certs/node-2.jpg";
import dockerCert from "../../imgs/certs/docker-2.jpg";

const Certifications = () => {
    return (
        <section id="certifications">
            <Link
                target={"_blank"}
                to="https://www.udemy.com/certificate/UC-7dda1759-f2a1-4f04-8ec9-0033bf13b243/"
            >
                <Box sx={{ flexGrow: 1 }} className="exp-card">
                    <Grid container spacing={2}>
                        <Grid
                            xs={12}
                            sm={12}
                            md={12}
                            lg={3}
                            className="card-left"
                        >
                            <img
                                width={160}
                                className="skill-logo"
                                title="NODE"
                                src={nodeCert}
                                alt="Node certification"
                                style={{ borderRadius: "10px" }}
                            />
                        </Grid>
                        <Grid
                            xs={12}
                            sm={12}
                            md={12}
                            lg={9}
                            className="card-right"
                        >
                            <Card>
                                <CardContent header="The Complete Node.js Developer Course"></CardContent>
                                <CardContent className="description card-details">
                                    <p>
                                        Instructors: Andrew Mead, Rob Percival
                                    </p>
                                    <OpenInNewIcon></OpenInNewIcon>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Link>
            <Link
                target={"_blank"}
                to="https://www.udemy.com/certificate/UC-246a8121-0a2e-4d67-9e94-2512fde27aff/"
            >
                <Box sx={{ flexGrow: 1 }} className="exp-card">
                    <Grid container spacing={2}>
                        <Grid
                            xs={12}
                            sm={12}
                            md={12}
                            lg={3}
                            className="card-left"
                        >
                            <img
                                width={160}
                                className="skill-logo"
                                title="Docker"
                                src={dockerCert}
                                alt="Docker certification"
                                style={{ borderRadius: "10px" }}
                            />
                        </Grid>
                        <Grid
                            xs={12}
                            sm={12}
                            md={12}
                            lg={9}
                            className="card-right"
                        >
                            <Card>
                                <CardContent header="Docker and Kubernetes: The Complete Guide"></CardContent>
                                <CardContent className="description card-details">
                                    <p>Instructors: Stephen Grider</p>
                                    <OpenInNewIcon></OpenInNewIcon>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Link>
        </section>
    );
};

export default Certifications;
