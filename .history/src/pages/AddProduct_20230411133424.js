import React from 'react'

const AddProduct = () => {

    const [currentUser,setCurrentUser] = useState([])
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(0.00)
    const [shipping_options,setShipping_option] = useState('')
    const [image, setImage] = useState([]);
    const [category,setCategory] = useState('')
    const [myProducts,setMyProducts] = useState([])
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCurrentUser(user);
    }, []);

    const handelImage=(file)=>{
        setImage(file[0])
    }

    const sellProduct =  (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('shipping_options', shipping_options);
      formData.append('image', image);
      formData.append('category', category);
      formData.append('seller_id', currentUser.id);
  
      try {
        const response = axios.post('http://127.0.0.1:8000/api/addProduct',formData);
        console.log(response)
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      } catch (error) {
        toast.warn('error', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    };
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

export default AddProduct