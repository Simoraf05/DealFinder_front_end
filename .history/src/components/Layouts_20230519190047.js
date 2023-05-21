import React, { Fragment } from 'react'
import Routers from './Routers'
import Headrer from './Headrer'

const Layouts = () => {
  const [searchSection,setSearchSection]
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