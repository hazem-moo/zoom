import React from 'react'
import { WhatWeOffering } from '../../Data/DataWhatWeOffer'
import './WhatWeOffer.css'

export const WhatWeOffer = () => {
    return (
        <section className='what-we-offer'>
            <div className='container'>
                <div className='row'>
                    {
                        WhatWeOffering.map( ( { header, src, title }, idx ) => {
                            return (
                                <div className='col-lg-4 col-md-6' key={ idx } >
                                    <div className='country'>
                                        <img src={ src } alt='' className='my-img' />
                                        <h4> { header } </h4>
                                        <p> { title } </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
