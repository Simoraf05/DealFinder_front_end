import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import { useState } from 'react'
import { MdClose } from "react-icons/md";
import "../styles/sidebarsearch.css"
import { useEffect } from 'react';

const SideBarSearch = ({ setShowSearch }) => {
    const [search, setSearch] = useState('')
    const [resSearch, setResSearch] = useState([])

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/searchForProductByName', { title: search })
            .then(res => {
                setResSearch(res.data)
                console.log(resSearch)
                setShowSearch(true)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <div className="search-modal">
                <div className="form-field">
                    <input
                        autoFocus
                        type="text"
                        placeholder="Search for products"
                        onChange={e => { setSearch(e.target.value) }}
                    />
                    <MdClose
                        className="close-btn"
                        onClick={() => setShowSearch(false)}
                    />
                </div>
                <div className="search-result-content">

                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                    <div className="search-results">
                    {resSearch?.resSearch?.map((item) => (
                        <div
                            className="search-result-item"
                            key={item.id}
                        >
                            <div className="image-container">
                                <img
{`http://localhost:8000/` + item.image}
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item.attributes.title}
                                </span>
                                <span className="desc">
                                    {item.attributes.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarSearch