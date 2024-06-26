import React from 'react'

const FiltringProducts = () => {
  return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                <button
                        class="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                <span>Show filter</span>
                </button>
                <div class="collapse card d-lg-block mb-5" id="navbarSupportedContent">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button
                                class="accordion-button text-dark bg-light"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#panelsStayOpen-collapseOne"
                                aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne"
                                >
                        Related items
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne">
                        <div class="accordion-body">
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-dark">Electronics </a></li>
                            <li><a href="#" class="text-dark">Home items </a></li>
                            <li><a href="#" class="text-dark">Books, Magazines </a></li>
                            <li><a href="#" class="text-dark">Men's clothing </a></li>
                            <li><a href="#" class="text-dark">Interiors items </a></li>
                            <li><a href="#" class="text-dark">Underwears </a></li>
                            <li><a href="#" class="text-dark">Shoes for men </a></li>
                            <li><a href="#" class="text-dark">Accessories </a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button
                                class="accordion-button text-dark bg-light"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#panelsStayOpen-collapseTwo"
                                aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseTwo"
                                >
                        Brands
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo">
                        <div class="accordion-body">
                        <div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked1" checked />
                            <label class="form-check-label" for="flexCheckChecked1">Mercedes</label>
                            <span class="badge badge-secondary float-end">120</span>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                            <label class="form-check-label" for="flexCheckChecked2">Toyota</label>
                            <span class="badge badge-secondary float-end">15</span>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked3" checked />
                            <label class="form-check-label" for="flexCheckChecked3">Mitsubishi</label>
                            <span class="badge badge-secondary float-end">35</span>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked4" checked />
                            <label class="form-check-label" for="flexCheckChecked4">Nissan</label>
                            <span class="badge badge-secondary float-end">89</span>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">Honda</label>
                            <span class="badge badge-secondary float-end">30</span>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">Suzuki</label>
                            <span class="badge badge-secondary float-end">30</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button
                                class="accordion-button text-dark bg-light"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#panelsStayOpen-collapseThree"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseThree"
                                >
                        Price
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree">
                        <div class="accordion-body">
                        <div class="range">
                            <input type="range" class="form-range" id="customRange1" />
                        </div>
                        <div class="row mb-3">
                            <div class="col-6">
                            <p class="mb-0">
                                Min
                            </p>
                            <div class="form-outline">
                                <input type="number" id="typeNumber" class="form-control" />
                                <label class="form-label" for="typeNumber">$0</label>
                            </div>
                            </div>
                            <div class="col-6">
                            <p class="mb-0">
                                Max
                            </p>
                            <div class="form-outline">
                                <input type="number" id="typeNumber" class="form-control" />
                                <label class="form-label" for="typeNumber">$1,0000</label>
                            </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-white w-100 border border-secondary">apply</button>
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button
                                class="accordion-button text-dark bg-light"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#panelsStayOpen-collapseFour"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseFour"
                                >
                        Size
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingThree">
                        <div class="accordion-body">
                        <input type="checkbox" class="btn-check border justify-content-center" id="btn-check1" checked autocomplete="off" />
                        <label class="btn btn-white mb-1 px-1" style="width: 60px;" for="btn-check1">XS</label>
                        <input type="checkbox" class="btn-check border justify-content-center" id="btn-check2" checked autocomplete="off" />
                        <label class="btn btn-white mb-1 px-1" style="width: 60px;" for="btn-check2">SM</label>
                        <input type="checkbox" class="btn-check border justify-content-center" id="btn-check3" checked autocomplete="off" />
                        <label class="btn btn-white mb-1 px-1" style="width: 60px;" for="btn-check3">LG</label>
                        <input type="checkbox" class="btn-check border justify-content-center" id="btn-check4" checked autocomplete="off" />
                        <label class="btn btn-white mb-1 px-1" style="width: 60px;" for="btn-check4">XXL</label>
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button
                                class="accordion-button text-dark bg-light"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#panelsStayOpen-collapseFive"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseFive"
                                >
                        Ratings
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingThree">
                        <div class="accordion-body">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                            <label class="form-check-label" for="flexCheckDefault">
                            <i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                            <label class="form-check-label" for="flexCheckDefault">
                            <i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-secondary"></i>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                            <label class="form-check-label" for="flexCheckDefault">
                            <i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-secondary"></i>
                            <i class="fas fa-star text-secondary"></i>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                            <label class="form-check-label" for="flexCheckDefault">
                            <i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-secondary"></i><i class="fas fa-star text-secondary"></i>
                            <i class="fas fa-star text-secondary"></i>
                            </label>
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default FiltringProducts