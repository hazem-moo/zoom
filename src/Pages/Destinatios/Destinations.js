import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody } from 'reactstrap'
import { dataDestination } from '../../Data/DataDestinations'

export const Destinations = () => {
    return (
        <section className='destinations container-sm'>
            <div className='row'>
                {
                    dataDestination.map(({ src, title, link, header }, idx) => {
                        return (
                            <div className='col-lg-4 col-md-6  overflow-hidden'>
                                <Card tag={ Link } key={ idx } to={ link } className='destination' onClick={ () => window.scrollTo( 0, 0 ) }>
                                    <div className='overlay'>   </div>
                                    <img src={ src } alt='' />
                                    <h3> { header } </h3>
                                    <p> { title } </p>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
