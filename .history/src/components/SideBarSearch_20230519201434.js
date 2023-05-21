import React from 'react'
import SearchBar from './SearchBar'

const SideBarSearch = () => {
    return (
        <div>
            <a href="#first">
            <div class="search-box">
                <button onClick={fetchData} class="btn-search"><i class="fas fa-search"></i></button>
                <input type="text" onChange={e => { setSearch(e.target.value) }} class="input-search" placeholder="Type to Search..." />
            </div>
            </a>
            <div class='container__search'>
                <section id='first'>
                    <h1>First</h1>
                </section>
            </div>
        </div>
    )
}

export default SideBarSearch