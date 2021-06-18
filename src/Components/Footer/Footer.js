import React from 'react'
import './Footeer.css'
import { Link } from 'react-router-dom'


export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='footer-info'>
                            <Link to='/' className='brand' onClick={ () => window.scrollTo( 0, 0  )}> zoom </Link>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipi. Suspend isse ultrices hendrerit nunc vitae vel a sodales. Ac lectus vel risus suscipit venenatis.
                            </p>
                            <p>
                            Strömgatan 18, Stockholm, <br></br>
                            Sweden(+46) 322.170.71 <br></br>
                            roam@qodeinteractive.com
                            </p>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='my-links'>
                            <h2> links </h2>
                            <Link to='/Destinations' onClick={ () => window.scrollTo( 0, 0 ) }> destinations </Link>
                            
                            <Link to='/Tours' onClick={ () => window.scrollTo( 0, 0 ) }> tours </Link>
                            
                            <Link to='/WhatWeOffer' onClick={ () => window.scrollTo( 0, 0 ) }> what we offer </Link>
                        </div>
                    </div>
                        
                </div>
            </div>
            
        </footer>
    )
}
