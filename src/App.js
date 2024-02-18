import './App.css';
import 'semantic-ui-css/semantic.min.css'

//Import Components
import About from './pages/about/About';
import WorkExp from './pages/workExp/WorkExp.jsx'
import SideNavbar from './components/Navbar/SideNavbar';
import {BrowserRouter} from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <AnimatedCursor 
          innerSize={20}
          outerSize={100}
          color='253, 223, 140'
          outerAlpha={0.1}
          innerScale={0.7}
          outerScale={1}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={12} md={12} lg={5}>
                  <SideNavbar></SideNavbar>
              </Grid>
              <Grid xs={12} sm={12} md={12} lg={7}>
                  <About></About>
                  <WorkExp></WorkExp>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
