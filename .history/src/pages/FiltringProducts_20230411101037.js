import React, { useEffect, useState } from 'react'
import '../styles/filtring.css'
import ReactSlider from 'react-slider'
import axios from 'axios';


const FiltringProducts = () => {
    const [title,setTitle] = useState('')
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/getCategories')
        .then(response => {
          setCategories(response.data.categories)

        });
    }, []);
    const dataArray = Object.entries(categories)


    const dataFetch=(e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/filtring',name)
        .then(res=>{
            console.log(res)
        })
    }


  return (
    <div>
        <div class="container">
            <div class="row" id="search">
                <form id="search-form" onSubmit={dataFetch} >
                    <div class="form-group col-xs-9">
                        <input class="form-control" name='title' onChange={e=>{setTitle(e.target.value)}} type="text" placeholder="Search" />
                    </div>
                    <div class="form-group col-xs-3">
                        <button type="submit"  class="btn btn-block btn-primary">Search</button>
                    </div>
                </form>
            </div>
            <div class="row" id="filter">
                <form>
                    <div class="form-group col-sm-3 col-xs-6">
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track example-track-0"
                            defaultValue={[0, 100]}
                            ariaLabel={['Lower thumb', 'Upper thumb']}
                            ariaValuetext={state => `Thumb value ${state.valueNow}`}
                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                            pearling
                            minDistance={10}
                        />
                    </div>
                    <div class="form-group col-sm-3 col-xs-6">
                        <select data-filter="model" class="filter-model filter form-control">
                            <option value="">Select Model</option>
                            <option value="">Show All</option>
                        </select>
                    </div>
                    <div class="form-group col-sm-3 col-xs-6">
                        <select data-filter="type" class="filter-type filter form-control">
                        <option selected disabled className='bg-light'>Select Category</option>
                            <hr></hr>
                            {
                                dataArray.map(item=>(
                                    <option value={item[1]}>{item[1]}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div class="form-group col-sm-3 col-xs-6">
                        <select data-filter="price" class="filter-price filter form-control">
                            <option selected disabled className='bg-light'>Select Price Range</option>
                            <option value="">+ / -</option>
                            <option value="">- / +</option>

                        </select>
                    </div>
                </form>
            </div>
            <div class="row" id="products">
                
            </div>
        </div>
    </div>
  )
}

export default FiltringProducts