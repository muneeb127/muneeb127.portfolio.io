import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sideNavbar.css";

import { Menu } from "semantic-ui-react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";

const SideNavbar = () => {
    const [activeItem, setActiveItem] = useState("About");
    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    };

    return (
        <div className="sidebar">
            <div className="main-headers">
                <h1>Muneeb Ahmed Khan</h1>
                <h2>SOFTWARE ENGINEER</h2>
                <p>I turn ideas into digital realities.</p>
            </div>
            <Menu className="sidenav-menu" fluid vertical tabular>
                <Menu.Item
                    name="About"
                    href="#about"
                    active={activeItem === "About"}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name="Work Experience"
                    href="#work-exp"
                    active={activeItem === "Work Experience"}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name="Skill Set"
                    href="#skillset"
                    active={activeItem === "Skill Set"}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name="Projects"
                    href="#projects"
                    active={activeItem === "Projects"}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name="Certifications"
                    href="#certifications"
                    active={activeItem === "Certifications"}
                    onClick={handleItemClick}
                />
            </Menu>
            <div className="sidebar-footer">
                <Link target={"_blank"} to="https://github.com/muneeb127/">
                    <GitHubIcon
                        fontSize="large"
                        sx={{ color: "white", mr: 2 }}
                    ></GitHubIcon>
                </Link>
                <Link
                    target={"_blank"}
                    to="https://www.linkedin.com/in/muneeb-ahmed-khan-5488a9199/"
                >
                    <LinkedInIcon
                        fontSize="large"
                        sx={{ color: "white", mr: 2 }}
                    ></LinkedInIcon>
                </Link>
                <Link target={"_blank"} to="https://leetcode.com/u/muneeb127/">
                    <CodeIcon
                        fontSize="large"
                        sx={{ color: "white", mr: 2 }}
                    ></CodeIcon>
                </Link>
            </div>
        </div>
    );
};

export default SideNavbar;
