import React from 'react'

const Search = () => {
    const navigate = useNavigate
  return (
    <div className='search__model'>
        <div className='form__field'>
            <input type='text' autoFocus placeholder='Search For Products'/>
        </div>
    </div>
  )
}

export default Search