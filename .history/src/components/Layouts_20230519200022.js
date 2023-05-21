import React, { Fragment } from 'react'
import Routers from './Routers'
import Headrer from './Headrer'
import { useState } from 'react'
import SearchSection from './SearchSection'

const Layouts = () => {
  const [searchSection,setSearchSection]  = useState(false)
  
  return (
    <div>
        <Fragment>
          <Headrer setSearchSection={setSearchSection}></Headrer>
          
            {
              searchSection ? <SearchSection></SearchSection> : <div><Routers></Routers></div>
            }
        </Fragment>
    </div>
  )
}

export default Layouts