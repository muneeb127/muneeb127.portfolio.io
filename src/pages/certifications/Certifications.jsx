import React from "react";
import { Link } from "react-router-dom";
import "./certifications.css";
import { CardContent, Card, Icon } from "semantic-ui-react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { yellow } from "@mui/material/colors";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import nodeCert from "../../imgs/certs/node-2.jpg";
import dockerCert from "../../imgs/certs/docker-2.jpg";
import microserviceCert from "../../imgs/certs/microservices.jpg";
import aws from "../../imgs/certs/aws.jpg";

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
                            md={3}
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
                            md={9}
                            lg={9}
                            className="card-right"
                        >
                            <Card>
                                <CardContent header="The Complete Node.js Developer Course"></CardContent>
                                <CardContent className="description card-details">
                                    <p>
                                        Instructors: Andrew Mead, Rob Percival
                                    </p>
                                    <OpenInNewIcon fontSize="large"></OpenInNewIcon>
                                    <CheckCircleIcon
                                        color="success"
                                        fontSize="large"
                                    ></CheckCircleIcon>
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
                            md={3}
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
                            md={9}
                            lg={9}
                            className="card-right"
                        >
                            <Card>
                                <CardContent header="Docker and Kubernetes: The Complete Guide"></CardContent>
                                <CardContent className="description card-details">
                                    <p>Instructors: Stephen Grider</p>
                                    <OpenInNewIcon fontSize="large"></OpenInNewIcon>
                                    <CheckCircleIcon
                                        color="success"
                                        fontSize="large"
                                    ></CheckCircleIcon>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }} className="exp-card">
                    <Grid container spacing={2}>
                        <Grid
                            xs={12}
                            sm={12}
                            md={3}
                            lg={3}
                            className="card-left"
                        >
                            <img
                                width={160}
                                className="skill-logo"
                                title="Microservice"
                                src={microserviceCert}
                                alt="Microservices certification"
                                style={{ borderRadius: "10px" }}
                            />
                        </Grid>
                        <Grid
                            xs={12}
                            sm={12}
                            md={9}
                            lg={9}
                            className="card-right"
                        >
                            <Card>
                                <CardContent header="Microservices with Node JS and React"></CardContent>
                                <CardContent className="description card-details">
                                    <p>Instructors: Stephen Grider</p>
                                    <OpenInNewIcon fontSize="large"></OpenInNewIcon>
                                    <AccessTimeFilledIcon
                                        fontSize="large"
                                        sx={{ color: yellow[500] }}
                                    ></AccessTimeFilledIcon>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }} className="exp-card">
                    <Grid container spacing={2}>
                        <Grid
                            xs={12}
                            sm={12}
                            md={3}
                            lg={3}
                            className="card-left"
                        >
                            <img
                                width={160}
                                className="skill-logo"
                                title="AWS"
                                src={aws}
                                alt="AWS certification"
                                style={{ borderRadius: "10px" }}
                            />
                        </Grid>
                        <Grid
                            xs={12}
                            sm={12}
                            md={9}
                            lg={9}
                            className="card-right"
                        >
                            <Card>
                                <CardContent header="Ultimate AWS Certified Cloud Practitioner"></CardContent>
                                <CardContent className="description card-details">
                                    <p>Instructors: Stephane Maarik</p>
                                    <OpenInNewIcon fontSize="large"></OpenInNewIcon>
                                    <AccessTimeFilledIcon
                                        fontSize="large"
                                        sx={{ color: yellow[500] }}
                                    ></AccessTimeFilledIcon>
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
