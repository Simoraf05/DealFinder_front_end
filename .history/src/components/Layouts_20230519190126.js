import React, { Fragment } from 'react'
import Routers from './Routers'
import Headrer from './Headrer'
import { useState } from 'react'

const Layouts = () => {
  const [searchSection,setSearchSection]  = useState(false)

  return (
    <div>
        <Fragment>
          <Headrer></Headrer>
        </Fragment>
    </div>
  )
}

export default Layouts