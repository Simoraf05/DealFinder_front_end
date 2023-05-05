import React from 'react'
import SideBare from './SideBare'

const Dashboard = () => {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    let searchBtn = document.querySelector(".bx-search");

    btn.onclick = function(){
        sidebar.classList.toggle("active");
    }
    searchBtn.onclick = function(){
        sidebar.classList.toggle("active");
    }
  return (
    <div>
        <SideBare/>
        <div>
            ii
        </div>
    </div>
  )
}

export default Dashboard