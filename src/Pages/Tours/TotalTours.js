import React from 'react'
import './Tours.css'
import { TotalTours as total } from '../../Data/DataTours'
import { Card, CardImg, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'

export const TotalTours = () => {
    return (
        <section className='min-tours container'>
            <div className='row'>
                {
                    total.map( ( { src, header, price, day, link }, Idx ) => {
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
