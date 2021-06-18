import React from 'react'
import '../Tours.css'
import Img26 from '../../../Imgs/26.jpg'
import Img25 from '../../../Imgs/25.jpg'
import Img24 from '../../../Imgs/24.jpg'

export const FormOur = () => {
    return (
        <section className='from-our container'>
            <h2> From Our Gallery </h2>
            <p> 
                Be our gest and see it for your self </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est.
            </p>

            <div className="row info mt-4 ">
                <div className='col-lg-4 col-md-6'>
                    <div className='info-img'>
                        <img className='d-block' src={ Img24 } alt='' />
                    </div>
                </div>
                
                <div className='col-lg-4 col-md-6'>
                    <div className='info-img'>
                        <img className='d-block' src={ Img25 } alt='' />
                    </div>
                </div>
                
                <div className='col-lg-4 '>
                    <div className='info-img'>
                        <img className='d-block' src={ Img26 } alt='' />
                    </div>
                </div>
                
            </div>
        </section>
    )
}
