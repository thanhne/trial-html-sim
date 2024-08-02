<template>
    <section class="section2 my-5">
        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="text-secondary nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                    type="button" role="tab" aria-controls="home" aria-selected="true" style="font-weight: 500;">Local
                    eSIMs</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="text-secondary nav-link " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                    type="button" role="tab" aria-controls="profile" aria-selected="false"
                    style="font-weight: 500;">Regional eSIMs</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="text-secondary nav-link " id="contact-tab" data-bs-toggle="tab"
                    data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"
                    style="font-weight: 500;">Global eSIMs</button>
            </li>
        </ul>
        <div class="tab-content bg-light" id="nav-tabContent">
            <div class="container">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="d-flex justify-content-center align-items-center py-5">
                            <div class="" style="width: 50px; height: 37.5px;">
                                <img src="@/assets/images/japanese.png" alt="" class="w-100 h-100 object-fit-cover">
                            </div>
                            <div class="mx-3">
                                <h3 class="m-0">Japan</h3>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row gy-5">
                                <div class="col-md-6 col-lg-4">
                                    <div class="bg-danger rounded text-white px-4">
                                        <div class="d-flex justify-content-between py-5 position-relative">
                                            <div>
                                                <p class="my-0">Moshi Moshi</p>
                                            </div>
                                            <div
                                                class="bg-white border position-absolute rounded bottom-0 end-0 translate-middle-y w-50 h-75">
                                                <img src="@/assets/images/moshi-moshi.png" alt=""
                                                    class="w-100 h-100 object-fit-cover rounded">
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">COVERAGE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">Japan</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">DATA</p>
                                            </div>
                                            <div>
                                                <p class="my-0">1 GB</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">VALIDITY</p>
                                            </div>
                                            <div>
                                                <p class="my-0">7 Days</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">PRICE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">$4.50 USD</p>
                                            </div>
                                        </div>
                                        <div class="py-3 border-top">
                                            <router-link to="/sim-detail"><button class="w-100 p-2 rounded bg-danger border text-white">BUY
                                                NOWAA</button></router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="bg-danger rounded text-white px-4">
                                        <div class="d-flex justify-content-between py-5 position-relative">
                                            <div>
                                                <p class="my-0">Moshi Moshi</p>
                                            </div>
                                            <div
                                                class="bg-white border position-absolute rounded bottom-0 end-0 translate-middle-y w-50 h-75">
                                                <img src="@/assets/images/moshi-moshi.png" alt=""
                                                    class="w-100 h-100 object-fit-cover rounded">
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">COVERAGE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">Japan</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">DATA</p>
                                            </div>
                                            <div>
                                                <p class="my-0">1 GB</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">VALIDITY</p>
                                            </div>
                                            <div>
                                                <p class="my-0">7 Days</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">PRICE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">$4.50 USD</p>
                                            </div>
                                        </div>
                                        <div class="py-3 border-top">
                                            <button class="w-100 p-2 rounded bg-danger border text-white">BUY
                                                NOW</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="bg-danger rounded text-white px-4">
                                        <div class="d-flex justify-content-between py-5 position-relative">
                                            <div>
                                                <p class="my-0">Moshi Moshi</p>
                                            </div>
                                            <div
                                                class="bg-white border position-absolute rounded bottom-0 end-0 translate-middle-y w-50 h-75">
                                                <img src="@/assets/images/moshi-moshi.png" alt=""
                                                    class="w-100 h-100 object-fit-cover rounded">
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">COVERAGE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">Japan</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">DATA</p>
                                            </div>
                                            <div>
                                                <p class="my-0">1 GB</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">VALIDITY</p>
                                            </div>
                                            <div>
                                                <p class="my-0">7 Days</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">PRICE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">$4.50 USD</p>
                                            </div>
                                        </div>
                                        <div class="py-3 border-top">
                                            <button class="w-100 p-2 rounded bg-danger border text-white">BUY
                                                NOW</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="bg-danger rounded text-white px-4">
                                        <div class="d-flex justify-content-between py-5 position-relative">
                                            <div>
                                                <p class="my-0">Moshi Moshi</p>
                                            </div>
                                            <div
                                                class="bg-white border position-absolute rounded bottom-0 end-0 translate-middle-y w-50 h-75">
                                                <img src="@/assets/images/moshi-moshi.png" alt=""
                                                    class="w-100 h-100 object-fit-cover rounded">
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">COVERAGE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">Japan</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">DATA</p>
                                            </div>
                                            <div>
                                                <p class="my-0">1 GB</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">VALIDITY</p>
                                            </div>
                                            <div>
                                                <p class="my-0">7 Days</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">PRICE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">$4.50 USD</p>
                                            </div>
                                        </div>
                                        <div class="py-3 border-top">
                                            <button class="w-100 p-2 rounded bg-danger border text-white">BUY
                                                NOW</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="bg-danger rounded text-white px-4">
                                        <div class="d-flex justify-content-between py-5 position-relative">
                                            <div>
                                                <p class="my-0">Moshi Moshi</p>
                                            </div>
                                            <div
                                                class="bg-white border position-absolute rounded bottom-0 end-0 translate-middle-y w-50 h-75">
                                                <img src="@/assets/images/moshi-moshi.png" alt=""
                                                    class="w-100 h-100 object-fit-cover rounded">
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">COVERAGE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">Japan</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">DATA</p>
                                            </div>
                                            <div>
                                                <p class="my-0">1 GB</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">VALIDITY</p>
                                            </div>
                                            <div>
                                                <p class="my-0">7 Days</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">PRICE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">$4.50 USD</p>
                                            </div>
                                        </div>
                                        <div class="py-3 border-top">
                                            <button class="w-100 p-2 rounded bg-danger border text-white">BUY
                                                NOW</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="bg-danger rounded text-white px-4">
                                        <div class="d-flex justify-content-between py-5 position-relative">
                                            <div>
                                                <p class="my-0">Moshi Moshi</p>
                                            </div>
                                            <div
                                                class="bg-white border position-absolute rounded bottom-0 end-0 translate-middle-y w-50 h-75">
                                                <img src="@/assets/images/moshi-moshi.png" alt=""
                                                    class="w-100 h-100 object-fit-cover rounded">
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">COVERAGE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">Japan</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">DATA</p>
                                            </div>
                                            <div>
                                                <p class="my-0">1 GB</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">VALIDITY</p>
                                            </div>
                                            <div>
                                                <p class="my-0">7 Days</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">PRICE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">$4.50 USD</p>
                                            </div>
                                        </div>
                                        <div class="py-3 border-top">
                                            <button class="w-100 p-2 rounded bg-danger border text-white">BUY
                                                NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-5">
                            <div class="row justify-content-center">
                                <div class="col-md-4">
                                    <button class="bg-secondary text-white w-100 border-0 rounded p-2">SHOW 200+
                                        COUNTRIES</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="d-flex justify-content-center align-items-center py-5">
                            <div class="mx-3">
                                <h3 class="m-0">Regions</h3>
                            </div>
                        </div>
                        <div class="pb-5">
                            <div class="row gy-4">
                                <div class="col-lg-6">
                                    <div class="bg-white rounded d-flex p-3">
                                        <div class="col-1"><img src="" alt="" class="w-100 h-100 object-fit-cover">
                                        </div>
                                        <div class="col-11 ps-3 d-flex justify-content-between">
                                            <div>Africa</div>
                                            <div><i class="fa-solid fa-chevron-down text-muted"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="bg-white rounded d-flex p-3">
                                        <div class="col-1"><img src="" alt="" class="w-100 h-100 object-fit-cover">
                                        </div>
                                        <div class="col-11 ps-3 d-flex justify-content-between">
                                            <div>Asia</div>
                                            <div><i class="fa-solid fa-chevron-down text-muted"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="bg-white rounded d-flex p-3">
                                        <div class="col-1"><img src="" alt="" class="w-100 h-100 object-fit-cover">
                                        </div>
                                        <div class="col-11 ps-3 d-flex justify-content-between">
                                            <div>Caribbean Islands</div>
                                            <div><i class="fa-solid fa-chevron-down text-muted"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="bg-white rounded d-flex p-3">
                                        <div class="col-1"><img src="" alt="" class="w-100 h-100 object-fit-cover">
                                        </div>
                                        <div class="col-11 ps-3 d-flex justify-content-between">
                                            <div>Europe</div>
                                            <div><i class="fa-solid fa-chevron-down text-muted"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="bg-white rounded d-flex p-3">
                                        <div class="col-1"><img src="" alt="" class="w-100 h-100 object-fit-cover">
                                        </div>
                                        <div class="col-11 ps-3 d-flex justify-content-between">
                                            <div>Latin America</div>
                                            <div><i class="fa-solid fa-chevron-down text-muted"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="bg-white rounded d-flex p-3">
                                        <div class="col-1"><img src="" alt="" class="w-100 h-100 object-fit-cover">
                                        </div>
                                        <div class="col-11 ps-3 d-flex justify-content-between">
                                            <div>Middle East and North Africa</div>
                                            <div><i class="fa-solid fa-chevron-down text-muted"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="bg-white rounded d-flex p-3">
                                        <div class="col-1"><img src="" alt="" class="w-100 h-100 object-fit-cover">
                                        </div>
                                        <div class="col-11 ps-3 d-flex justify-content-between">
                                            <div>North America</div>
                                            <div><i class="fa-solid fa-chevron-down text-muted"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade " id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div class="py-5">
                            <div class="row bg-light">
                                <div class="col-lg-4 mx-auto">
                                    <div class="d-flex rounded border mx-md-3 mx-lg-2">
                                        <div class="col-6 text-center py-3 bg-danger rounded-start">Data</div>
                                        <div class="col-6 text-center py-3 bg-white border-start rounded-end">Data /
                                            Calls / Texts</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container pb-5">
                            <div class="row gy-5">
                                <div class="col-md-6 col-lg-4 px-0 px-md-3">
                                    <div class="bg-primary rounded text-white px-4">
                                        <div class="d-flex justify-content-between py-5 position-relative">
                                            <div>
                                                <p class="my-0">Moshi Moshi</p>
                                            </div>
                                            <div
                                                class="border-0 position-absolute rounded bottom-0 end-0 translate-middle-y w-50 h-75">
                                                <img src="./assets/images/discovery-sim.png" alt=""
                                                    class="w-100 h-100 object-fit-cover">
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">COVERAGE</p>
                                            </div>
                                            <div class="border rounded">
                                                <p class="my-0 px-5 py-1">Japan</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">DATA</p>
                                            </div>
                                            <div>
                                                <p class="my-0">1 GB</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">VALIDITY</p>
                                            </div>
                                            <div>
                                                <p class="my-0">7 Days</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">PRICE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">$4.50 USD</p>
                                            </div>
                                        </div>
                                        <div class="py-3 border-top">
                                            <button class="w-100 p-2 rounded bg-primary border text-white">BUY
                                                NOW</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 px-0 px-md-3">
                                    <div class="bg-primary rounded text-white px-4">
                                        <div class="d-flex justify-content-between py-5 position-relative">
                                            <div>
                                                <p class="my-0">Moshi Moshi</p>
                                            </div>
                                            <div
                                                class="border-0 position-absolute rounded bottom-0 end-0 translate-middle-y w-50 h-75">
                                                <img src="./assets/images/discovery-sim.png" alt=""
                                                    class="w-100 h-100 object-fit-cover">
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">COVERAGE</p>
                                            </div>
                                            <div class="border rounded">
                                                <p class="my-0 px-5 py-1">Japan</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">DATA</p>
                                            </div>
                                            <div>
                                                <p class="my-0">1 GB</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">VALIDITY</p>
                                            </div>
                                            <div>
                                                <p class="my-0">7 Days</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">PRICE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">$4.50 USD</p>
                                            </div>
                                        </div>
                                        <div class="py-3 border-top">
                                            <button class="w-100 p-2 rounded bg-primary border text-white">BUY
                                                NOW</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 px-0 px-md-3">
                                    <div class="bg-primary rounded text-white px-4">
                                        <div class="d-flex justify-content-between py-5 position-relative">
                                            <div>
                                                <p class="my-0">Moshi Moshi</p>
                                            </div>
                                            <div
                                                class="border-0 position-absolute rounded bottom-0 end-0 translate-middle-y w-50 h-75">
                                                <img src="./assets/images/discovery-sim.png" alt=""
                                                    class="w-100 h-100 object-fit-cover">
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">COVERAGE</p>
                                            </div>
                                            <div class="border rounded">
                                                <p class="my-0 px-5 py-1">Japan</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">DATA</p>
                                            </div>
                                            <div>
                                                <p class="my-0">1 GB</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">VALIDITY</p>
                                            </div>
                                            <div>
                                                <p class="my-0">7 Days</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">PRICE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">$4.50 USD</p>
                                            </div>
                                        </div>
                                        <div class="py-3 border-top">
                                            <button class="w-100 p-2 rounded bg-primary border text-white">BUY
                                                NOW</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 px-0 px-md-3">
                                    <div class="bg-primary rounded text-white px-4">
                                        <div class="d-flex justify-content-between py-5 position-relative">
                                            <div>
                                                <p class="my-0">Moshi Moshi</p>
                                            </div>
                                            <div
                                                class="border-0 position-absolute rounded bottom-0 end-0 translate-middle-y w-50 h-75">
                                                <img src="./assets/images/discovery-sim.png" alt=""
                                                    class="w-100 h-100 object-fit-cover">
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">COVERAGE</p>
                                            </div>
                                            <div class="border rounded">
                                                <p class="my-0 px-5 py-1">Japan</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">DATA</p>
                                            </div>
                                            <div>
                                                <p class="my-0">1 GB</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">VALIDITY</p>
                                            </div>
                                            <div>
                                                <p class="my-0">7 Days</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">PRICE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">$4.50 USD</p>
                                            </div>
                                        </div>
                                        <div class="py-3 border-top">
                                            <button class="w-100 p-2 rounded bg-primary border text-white">BUY
                                                NOW</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 px-0 px-md-3">
                                    <div class="bg-primary rounded text-white px-4">
                                        <div class="d-flex justify-content-between py-5 position-relative">
                                            <div>
                                                <p class="my-0">Moshi Moshi</p>
                                            </div>
                                            <div
                                                class="border-0 position-absolute rounded bottom-0 end-0 translate-middle-y w-50 h-75">
                                                <img src="./assets/images/discovery-sim.png" alt=""
                                                    class="w-100 h-100 object-fit-cover">
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">COVERAGE</p>
                                            </div>
                                            <div class="border rounded">
                                                <p class="my-0 px-5 py-1">Japan</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">DATA</p>
                                            </div>
                                            <div>
                                                <p class="my-0">1 GB</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">VALIDITY</p>
                                            </div>
                                            <div>
                                                <p class="my-0">7 Days</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">PRICE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">$4.50 USD</p>
                                            </div>
                                        </div>
                                        <div class="py-3 border-top">
                                            <button class="w-100 p-2 rounded bg-primary border text-white">BUY
                                                NOW</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 px-0 px-md-3">
                                    <div class="bg-primary rounded text-white px-4">
                                        <div class="d-flex justify-content-between py-5 position-relative">
                                            <div>
                                                <p class="my-0">Moshi Moshi</p>
                                            </div>
                                            <div
                                                class="border-0 position-absolute rounded bottom-0 end-0 translate-middle-y w-50 h-75">
                                                <img src="./assets/images/discovery-sim.png" alt=""
                                                    class="w-100 h-100 object-fit-cover">
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">COVERAGE</p>
                                            </div>
                                            <div class="border rounded">
                                                <p class="my-0 px-5 py-1">Japan</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt=""></div>
                                                <p class="my-0">DATA</p>
                                            </div>
                                            <div>
                                                <p class="my-0">1 GB</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">VALIDITY</p>
                                            </div>
                                            <div>
                                                <p class="my-0">7 Days</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between py-3 border-top">
                                            <div class="d-flex">
                                                <div><img src="" alt="">icon</div>
                                                <p class="my-0">PRICE</p>
                                            </div>
                                            <div>
                                                <p class="my-0">$4.50 USD</p>
                                            </div>
                                        </div>
                                        <div class="py-3 border-top">
                                            <button class="w-100 p-2 rounded bg-primary border text-white">BUY
                                                NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>
