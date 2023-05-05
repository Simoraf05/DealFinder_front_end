import React from 'react'

const Sel_Product = () => {
    const [currentUser,setCurrentUser] = useState([])
  
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCurrentUser(user);
    }, []);


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
  return (
    <div>Sel_Product</div>
  )
}

export default Sel_Product