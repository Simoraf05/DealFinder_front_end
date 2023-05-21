import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import { useState } from 'react'
import { MdClose } from "react-icons/md";

const SideBarSearch = () => {
    const [containerSearch, setContainerSearch] = useState(false)

    return (
        <div>
            hhhhh
            <MdClose
                                onClick={() => setSearchModal(false)}

            />
        </div>
    )
}

export default SideBarSearch