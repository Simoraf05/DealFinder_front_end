import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import { useState } from 'react'
import { MdClose } from "react-icons/md";

const SideBarSearch = ({setShowSearch}) => {

    return (
        <div>
            hhhhh
            <MdClose
            onClick={() => setShowSearch(false)}

            />
        </div>
    )
}

export default SideBarSearch