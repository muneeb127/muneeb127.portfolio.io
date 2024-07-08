import React from 'react'
import './workExp.css'
import { CardContent, Card, Icon } from 'semantic-ui-react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

const WorkExp = () => {
  return (
    <section id='work-exp'>
       <Box sx={{ flexGrow: 1 }} className="exp-card">
        <Grid container spacing={2}>
          <Grid xs={12} sm={12} md={12} lg={3} className='card-left'>
            <p className='card-date'>10.2022 - Present</p>
            <p>Rostock, Germany</p>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={9} className='card-right'>
            <Card>
              <CardContent header='Work Student Software Engineer - Fraunhofer IGD'>
              </CardContent>
              <CardContent className='description card-details'>
                <ul id='list'>
                  <li>
                    Development and maintenance of reliable web-based system for research projects
                    using ReactJs, NodeJs, and PostgreSQL
                  </li>
                  <li>
                    Application design and development, code testing, and maintenance
                  </li>
                  <li>
                    Utilization of the latest tech stack including WSL, Dockers, etc for smooth workflow
                  </li>
                </ul>
              </CardContent>
              <CardContent className='card-techs card-details'>
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
          <Grid xs={12} sm={12} md={12} lg={3} className='card-left'>
            <p className='card-date'>10.2022 - 04.2023</p>
            <p>Rostock, Germany</p>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={9} className='card-right'>
            <Card>
              <CardContent header='Research Assistant - University of Rostock' />
              <CardContent className='description card-details'>
                <ul id='list'>
                  <li>
                    Development and maintenance of reliable web-based system for research projects
                    using ReactJs, NodeJs, and PostgreSQL
                  </li>
                  <li>
                    Application design and development, code testing, and maintenance
                  </li>
                  <li>
                  Utilization of the latest tech stack including WSL, Dockers, etc for smooth workflow
                  </li>
                </ul>
              </CardContent>
              <CardContent className='card-techs card-details'>
                <div>HTML</div>
                <div>CSS</div>
                <div>React Js</div>
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
          <Grid xs={12} sm={12} md={12} lg={3} className='card-left'>
            <p className='card-date'>10.2022 - 04.2023</p>
            <p>Rostock, Germany</p>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={9} className='card-right'>
            <Card>
              <CardContent header='Software Engineer - TPS Worldwide' />
              <CardContent className='description card-details'>
                <ul id='list'>
                  <li>
                    Development of reliable and sustainable e-Banking and Payment solutions using
                    C++, NodeJS, SQL, Oracle
                  </li>
                  <li>
                    Integration and testing of modules with the existing banking middleware
                    architecture
                  </li>
                  <li>
                    Adherent to standards and best practices around the development process, coding,
                    and peer reviews
                  </li>
                  <li>
                    Database design and development
                  </li>
                  <li>
                    Followed the Agile/Scrum methodology and practices
                  </li>
                </ul>
              </CardContent>
              <CardContent className='card-techs card-details'>
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
          <Grid xs={12} sm={12} md={12} lg={3} className='card-left'>
            <p className='card-date'>10.2020 - 08.2021</p>
            <p>Karachi, Pakistan</p>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={9} className='card-right'>
            <Card>
              <CardContent header='Software Engineer - Avanza Solutions' />
              <CardContent className='description card-details'>
                <ul id='list'>
                  <li>
                    Development and management of e-banking solutions using C++, SQL
                  </li>
                  <li>
                  Development of financial and non-financial transactions for banking systems using
                  ISO 8583 standard for different channels including Internet Banking, Mobile
                  Banking, ATMS and others
                  </li>
                  <li>
                    Database design and development
                  </li>
                  <li>
                    Implementation and deployment of projects on live production environment servers
                  </li>
                </ul>
              </CardContent>
              <CardContent className='card-techs card-details'>
                <div>C++</div>
                <div>SQL</div>
                <div>SQL Server</div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </section>
  )
}

export default WorkExp