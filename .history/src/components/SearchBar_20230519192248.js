import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const SearchBar = ({ setSearchSection }) => {
    const [search, setSearch] = useState('')
    const [resSearch, setResSearch] = useState([])
    const fetchData = () => {
        axios.post('http://127.0.0.1:8000/api/searchForProductByName', { title: search })
            .then(res => {
                console.log(res.data)
                setResSearch(res.data)
                console.log(resSearch)

            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div class="search-box">
                <button onClick={fetchData} class="btn-search"><i class="fas fa-search"></i></button>
                <input type="text" onChange={e => { setSearch(e.target.value) }} class="input-search" placeholder="Type to Search..." />
            </div>
            <div className='dropdown'>
                {
                    resSearch.map((item) => {
                        <div className='dropdown-row'>
                            {item.title}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SearchBar