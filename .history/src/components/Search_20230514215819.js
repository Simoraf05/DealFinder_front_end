import React from 'react'
import { useLocation } from 'react-router-dom'

const Search = () => {
  return (
    <div className='search__model'>
        <div className='form__field'>
            <input type='text' autoFocus placeholder='Search For Products'/>
        </div>
    </div>
  )
}

export default Search