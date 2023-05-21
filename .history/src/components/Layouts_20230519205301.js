import React, { Fragment } from 'react'
import Routers from './Routers'
import Headrer from './Headrer'
import { useState } from 'react'

const Layouts = () => {
  
  return (
    <div>
        <Fragment>
          <Headrer></Headrer>
          <div><Routers></Routers></div>
        </Fragment>
    </div>
  )
}

export default Layouts