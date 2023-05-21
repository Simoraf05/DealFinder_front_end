import React from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate()
  return (
    <div className='search__model'>
        <div className='form__field'>
            <input type='text' autoFocus placeholder='Search For Products'/>
        </div>
    </div>
  )
}

export default Search