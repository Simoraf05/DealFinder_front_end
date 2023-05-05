import React from 'react'

const MyProducts = () => {
  return (
    <div>
                            <div>

<div class="row">
{
  myProducts.map((item)=>(
    <div class="col-lg-4 col-md-6 col-sm-6 d-flex">
    <div class="card w-100 my-2 shadow-2-strong">
      <img src={`http://localhost:8000/`+item.image} class="card-img-top"  />
      <div class="card-body d-flex flex-column">
        <div className='row'>
          <h5 className='col-lg-8 col-md-2 col-sm-4 d-flex'>Title :</h5>
          <p className='col-4'>{item.title}</p>
        </div>
        <div className='row'>
          <h5 className='col-lg-8 col-md-2 col-sm-4 d-flex'>Price :</h5>
          <p className='col-4'>${item.price}</p>
        </div>
        <div className='row'>
          <h5 className='col-lg-8 col-md-2 col-sm-4 d-flex'>description :</h5>
          <p className='col-4'>{item.description}</p>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
            <button type="button" onClick={()=>{deleteProduct(item.id)}} class="btn btn-danger">Delete</button>
            <button type="button" class="btn btn-success">Edite</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  ))
}
</div>
</div>
}

</div>
</div>
    </div>
  )
}

export default MyProducts