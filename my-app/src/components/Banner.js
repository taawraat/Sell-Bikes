import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col rounded-start-3" id="banner-text">
                                    <div class="card-body" id="banner-card">
                                        <h1 class="card-title text-success-emphasis fw-bold">Need a motorcycle?</h1>
                                        <hr class="border border-success border-3 opacity-75"></hr>
                                        <p class="card-text">Biking is not just a passion, it is a lifestyle. No other joy on the planet can compare the joy of hitting the long winding highways on the bike.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <img style={{height: 530, width: 900}} src="/bannerpic1.jpg" class="rounded-end-3" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col rounded-start-3" id="banner-text">
                                    <div class="card-body" id="banner-card">
                                        <h1 class="card-title text-success-emphasis fw-bold">Checkout our best models.</h1>
                                        <hr class="border border-success border-3 opacity-75"></hr>
                                        <p class="card-text">Such happiness can't be put in words, however, we've tried to capture its essence in these quotes so here are the some of the best biker quotes and sayings that any biker or motorcyclist can live by.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <img style={{height: 530, width: 900}} src="/bannerpic3.jpg" class="w-100 rounded-end-3" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col rounded-start-3" id="banner-text">
                                    <div class="card-body" id="banner-card">
                                        <h1 class="card-title text-success-emphasis fw-bold">Best Services you can get.</h1>
                                        <hr class="border border-success border-3 opacity-75"></hr>
                                        <p class="card-text">Motorcycling culture is something that riders enjoy no matter how different they are in terms of religion, gender, language, race, or skin color. Motorcycles are fun and it’s a fact.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <img style={{height: 530, width: 900}} src="/bannerpic2.jpg" class="w-100 rounded-end-3" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Banner
