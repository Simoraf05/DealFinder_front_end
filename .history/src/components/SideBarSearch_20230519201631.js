import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import { useState } from 'react'

const SideBarSearch = () => {
    const [search, setSearch] = useState('')
    const [resSearch, setResSearch] = useState([])
    const [containerSearch, setContainerSearch] = useState(')

    const fetchData = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/searchForProductByName', { title: search })
            .then(res => {
                setResSearch(res.data)
                console.log(resSearch)
            }).catch(err => {
                console.log(err)
            })
    }
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