import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { MdClose } from "react-icons/md";
import "../styles/sidebarsearch.css"
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SideBarSearch = ({ setShowSearch }) => {
    const [search, setSearch] = useState('')
    const [resSearch, setResSearch] = useState([])
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/searchForProductByName', { title: search })
            .then(res => {
                setResSearch(res.data)
                setShowSearch(true)
                console.log()
            }).catch(err => {
                console.log(err)
            })
    }, [search])
    const navigate = useNavigate()
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
                        {
                            resSearch.length === 0 ?
                                <div className="not-founf-msg">
                                    No products found.
                                </div>
                                :
                                resSearch.map((item) => (
                                    <Link
                                        className="search-result-item"
                                        key={item.id}
                                        onClick={()=>{setShowSearch(false)}}
                                        to='/productD' state={item}
                                    >
                                        <div className="image-container">
                                            <img
                                                src={`http://localhost:8000/` + item.image}
                                            />
                                        </div>
                                        <div className="prod-details">
                                            <span className="name">
                                                {item.title}
                                            </span>
                                            <span className="desc">
                                                {item.description}
                                            </span>
                                        </div>
                                    </Link>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarSearch