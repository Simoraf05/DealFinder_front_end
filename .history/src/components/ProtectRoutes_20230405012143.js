import React from 'react'

const ProtectRoutes = () => {
    const currentUser = localStorage.getItem('user')
    const location = useLocation();
    return(
        currentUser ? <Outlet/> :  <Navigate to='/login' state={{path:location.pathname}}/>
    )
}

export default ProtectRoutes