import React, { useState } from "react";
import "./sideNavbar.css";

import { Menu } from "semantic-ui-react";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

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
                <FacebookIcon fontSize="large" color="white"></FacebookIcon>
                <GitHubIcon fontSize="large"></GitHubIcon>
                <LinkedInIcon fontSize="large"></LinkedInIcon>
                <InstagramIcon fontSize="large"></InstagramIcon>
            </div>
        </div>
    );
};

export default SideNavbar;
