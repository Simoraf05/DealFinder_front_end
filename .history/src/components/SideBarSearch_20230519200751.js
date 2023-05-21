import React from 'react'
import SearchBar from './SearchBar'

const SideBarSearch = () => {
    return (
        <div>
            <a href="#first"><SearchBar></SearchBar></a>

            <div class='container__search'>
                <section id='first'>
                    <h1>First</h1>
                </section>
            </div>
        </div>
    )
}

export default SideBarSearch