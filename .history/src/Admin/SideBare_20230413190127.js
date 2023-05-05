import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import '../styles/sidebar.css'
const SideBare = () => {
    const { collapseSidebar } = useProSidebar();

  return (
    <div className='sidebar__'>
    <Sidebar>
    <Menu>
        <SubMenu label="Charts">
        <MenuItem> Pie charts </MenuItem>
        <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
    </Menu>
    </Sidebar>;
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
  )
}

export default SideBare