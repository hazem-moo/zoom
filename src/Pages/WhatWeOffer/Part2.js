import React from 'react'
import './WhatWeOffer.css'

export const Part2 = () => {
    return (
        <section className='part2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='info'>                         
                            <h3 > success percentages </h3>
                            <h6> Lorem ipsim dolor sit ametsis aliqueenean auctor </h6>
                            <p>
                                Lorem ipsum dolor sit amet. Lorem Ipsn gravida. Pro ain gravida nibh vel velit an auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum. Lorem ipsim dolor sit amet auctor ollicitudin
                            </p>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='part-progress'>
                            <div>
                                <h5> Value for Money </h5>
                                <span > 64% </span>
                            </div>
                            <div className='progress-info'>
                                <span></span>
                            </div>
                        </div>

                        <div className='part-progress'>
                            <div >
                                <h5> fast booking </h5>
                                <span > 90% </span>
                            </div>
                            <div className='progress-info'>
                                <span className='twe'></span>
                            </div>
                        </div>

                        <div className='part-progress'>
                            <div >
                                <h5> Beautiful Places </h5>
                                <span > 80% </span>
                            </div>
                            <div className='progress-info'>
                                <span className='three'></span>
                            </div>
                        </div>

                        <div className='part-progress'>
                            <div >
                                <h5> Support Team </h5>
                                <span > 85% </span>
                            </div>
                            <div className='progress-info'>
                                <span className='four'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
