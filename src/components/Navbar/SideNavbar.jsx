import React, {useState} from 'react';
import './sideNavbar.css';

import { Grid, Menu, Segment } from 'semantic-ui-react'


const SideNavbar = () => {
  const [activeItem, setActiveItem] = useState('About');
  const handleItemClick = (e, {name} ) =>{ 
    setActiveItem(name);
  }
  
  return (
    <div className='sidebar'>
      <div className='main-headers'>
        <h1>Muneeb Ahmed Khan</h1>
        <h2>SOFTWARE ENGINEER</h2>
        <p>I turn ideas into digital realities.</p>
      </div>
      <Menu className='sidenav-menu' fluid vertical tabular >
        <Menu.Item
          name='About'
          href='#about'
          active={activeItem === 'About'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Work Experience'
          href='#work-exp'
          active={activeItem === 'Work Experience'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Projects'
          href='#projects'
          active={activeItem === 'Projects'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Tools'
          active={activeItem === 'Tools'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Now'
          active={activeItem === 'Now'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={handleItemClick}
        />
      </Menu>
    </div>
  )
}

export default SideNavbar