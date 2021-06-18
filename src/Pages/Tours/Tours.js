import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardImg } from 'reactstrap'
import { minTours } from '../../Data/DataTours'
import './Tours.css'
                                                                                            
export const Tours = () => {
    return (
        <section className='min-tours container'>
            <div className='row '>
                    {
                        minTours.map( ( { src, header, price, day, link }, Idx ) => {
                            return (
                                <div className='col-lg-3 col-md-6 ' key={ Idx }>
                                    <Card to={ link } tag={ Link } className='overflow-hidden' onClick={ () => window.scrollTo( 0, 0 )}>
                                        <CardImg src={ src } alt='' className='w-100' />
                                        <CardBody>
                                            <h4> { header } </h4>
                                            <p> ${ price } </p>
                                            <span> { day }days </span>
                                        </CardBody>
                                    </Card>
                                </div>
                            )
                        })
                    }
            </div>
            
        </section>
    )
}
