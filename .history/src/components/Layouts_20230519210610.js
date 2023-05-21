import React, { Fragment } from 'react'
import Routers from './Routers'
import Headrer from './Headrer'
import { useState } from 'react'
import SearchSection from './SearchSection'
import SideBarSearch from './SideBarSearch'

const Layouts = () => {
  const [searchSection,setSearchSection]  = useState(false)
  
  return (
    <div>
        <Fragment>
          <Headrer setSearchSection={setSearchSection}></Headrer>
          <SideBarSearch></SideBarSearch>

        </Fragment>
    </div>
  )
}

export default Layouts