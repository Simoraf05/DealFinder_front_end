import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar,SubMenu } from 'react-pro-sidebar';
import '../styles/sidebar.css'
const SideBare = () => {
    const { collapseSidebar } = useProSidebar();

  return (
    <div className='sidebar__'>
<div class="sidebar">
	<div class="sidebar-brand">
		<h2><span class="fa fa-user-o"> </span> Learn Programming</h2>
	</div>

	<div class="sidebar-menu">
		<ul>
			<li><a href="#" class="active"><span class="fa fa-home"></span><span>Accueil</span></a></li>
			<li><a href="#"><span class="fa fa-tasks"></span><span>Taches</span></a></li>
			<li><a href="#"><span class="fa fa-th-large"></span><span>Blog</span></a></li>
			<li><a href="#"><span class="fa fa-line-chart"></span><span>Statistiques</span></a></li>
			<li><a href="#"><span class="fa fa-address-book"></span><span>A-propos</span></a></li>
			<li><a href="#"><span class="fa fa-clipboard"></span><span>Projets</span></a></li>
			<li><a href="#"><span class="fa fa-money"></span><span>Bilans</span></a></li>
			<li><a href="#"><span class="fa fa-registered"></span><span>Enregistrement</span></a></li>
			<li><a href="#"><span class="fa fa-user"></span><span>Contact</span></a></li>
		</ul>
	</div>
</div>
    </div>
  )
}

export default SideBare