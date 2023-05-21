import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import { useState } from 'react'
import { MdClose } from "react-icons/md";

const SideBarSearch = ({setShowSearch}) => {

    return (
        <div>
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
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
                        <div
                            className="search-result-item"
                            key={item.id}
                        >
                            <div className="image-container">
                                <img
                                    src={
                                        process.env
                                            .REACT_APP_STRIPE_APP_DEV_URL +
                                        item.attributes.image.data[0].attributes
                                            .url
                                    }
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    dhkdhuhv
                                </span>
                                <span className="desc">
                                    lifhdkvkjvbkjdbvkdvb
                                </span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SideBarSearch