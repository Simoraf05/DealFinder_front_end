import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const SearchBar = ({setSearchSection}) => {
    const [search, setSearch] = useState('')

    const fetchData = () => {
        axios.post('http://127.0.0.1:8000/api/searchForProductByName', { title: search })
            .then(res => {
                console.log(res.data)
                if(search){
                    setSearchSection(true)
                }
                else{
                    setSearchSection(false)
                }
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
                <div></div>
            </div>
        </div>
    )
}

export default SearchBar