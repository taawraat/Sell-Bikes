import React from 'react'

function CustomerReview() {
    return (
        <div className='m-2'>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="card d-block bg-dark text-center  w-100" style={{ height: '500px' }}>
                            <img class="card-img-top rounded-circle mt-3" style={{ width: '15rem' }} src="/customer3.png" />
                            <div class="card-body d-block">
                                <h5 class="card-title display-4 font-weight-bold text-warning">Ishrak Abir</h5>
                                <p class="h4 text-light">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua."</p>
                                <p class="card-text"><span class="text-light">Last updated 3 mins ago</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card d-block bg-dark text-center  w-100" style={{ height: '500px' }}>
                            <img class="card-img-top rounded-circle mt-3" style={{ width: '15rem' }} src="/customer1.png" />
                            <div class="card-body d-block">
                                <h5 class="card-title display-4 font-weight-bold text-warning">Noman Siddik</h5>
                                <p class="h4 text-light">"Recently, I was persuaded to like a Facebook account because I received an email with a title: “I ask for your help for 10 seconds”. It was from a fitness coach whose services I had tried before and liked."</p>
                                <p class="card-text"><span class="text-light">Last updated 5 mins ago</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card d-block bg-dark text-center  w-100" style={{ height: '500px' }}>
                            <img class="card-img-top rounded-circle mt-3" style={{ width: '15rem' }} src="/customer2.png" />
                            <div class="card-body d-block">
                                <h5 class="card-title display-4 font-weight-bold text-warning">Emon Biswas</h5>
                                <p class="h4 text-light">"I was a happy former customer. It was no-brainer to ask for such a small favor."</p>
                                <p class="card-text"><span class="text-success">Active now</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default CustomerReview
