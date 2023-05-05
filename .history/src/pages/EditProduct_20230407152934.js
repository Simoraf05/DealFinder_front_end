import React, { useEffect, useState } from 'react'

const EditProduct = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/getCategories')
        .then(response => {
          setCategories(response.data.categories)

        });
    }, []);
    const dataArray = Object.entries(categories)
  return (
    <div>
        
    </div>
  )
}

export default EditProduct