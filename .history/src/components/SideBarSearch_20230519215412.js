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
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setShowSearch(false)}
                />
            </div>
            <div className="search-result-content">
                {!data?.data?.length && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                )}
                <div className="search-results">
                    {data?.data?.map((item) => (
                        <div
                            className="search-result-item"
                            key={item.id}
                            onClick={() => {
                                navigate("/product/" + item.id);
                                setSearchModal(false);
                            }}
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