import React from 'react'

const AddProduct = () => {


    const [categories, setCategories] = useState([]);
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/getCategories')
        .then(response => {
          setCategories(response.data.categories)

        });
    }, []);
    const dataArray = Object.entries(categories)
  return (
    <div>AddProduct</div>
  )
}

export default AddProduct