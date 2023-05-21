import React, { Fragment } from 'react'
import Routers from './Routers'
import Headrer from './Headrer'
import { useState } from 'react'
import SearchSection from './SearchSection'
import SideBarSearch from './SideBarSearch'

const Layouts = () => {
  
  return (
    <div>
        <Fragment>
          <Headrer setSearchSection={setSearchSection}></Headrer>
          <div><Routers></Routers></div>
        </Fragment>
    </div>
  )
}

export default Layouts