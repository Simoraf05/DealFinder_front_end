import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import { useState } from 'react'

const SideBarSearch = () => {
    const [search, setSearch] = useState('')
    const [resSearch, setResSearch] = useState([])
    const [containerSearch, setContainerSearch] = useState(false)

    const fetchData = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/searchForProductByName', { title: search })
            .then(res => {
                setResSearch(res.data)
                console.log(resSearch)
                setContainerSearch(true)
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
        <SearchBar setContainerSearch={setContainerSearch}></SearchBar>
            {
                containerSearch ?
                <div class='container__search'>

            </div>
            :
            <></>
            }
        </div>
    )
}

export default SideBarSearch