import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import { useState } from 'react'

const SideBarSearch = () => {
    const [containerSearch, setContainerSearch] = useState(false)

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