import React from 'react'
import '../Tours.css'
import { LogoTours } from '../LogoTours'
import { FormOur } from './FormOur'

export const Croatia = () => {
    return (
        <>
        <LogoTours />
        <section className='tours container'>
               <h2> Croatia </h2>    
               <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis urna, fringilla et scelerisque cursus, lacinia eget elit. Sed gravida, felis at blandit dictum, lorem neque fermentum mi, non viverra libero dui quis quam. Mauris magna odio, sollicitudin vitae eleifend a, feugiat a sapien. Fusce eu tellus non tortor ornare bibendum
               </p>
               
               <div className='row info-tours'>
                   <div className='col-md-6'>
                       <h4> Destination </h4>
                   </div>
                   <div className='col-md-6'>
                       <p> Hiking in Iceland </p>
                       </div>

                       <div className='col-md-6'>
                           <h4> Departure </h4>
                       </div>
                       <div className='col-md-6'>
                           <p> Please arrive by 9:15 AM for a prompt departure at 9:30 AM. </p>
                       </div>

                       <div className='col-md-6'>
                           <h4> Departure Time	</h4>
                       </div>
                       <div className='col-md-6'>
                           <p> Approximately 8:30 PM. </p>
                       </div>

                       <div className='col-md-6'>
                           <h4> Dress Code	</h4>
                       </div>
                       <div className='col-md-6'>
                           <p> Casual. Comfortable athletic clothing, hiking shoes, hat and warm jacket. </p>
                       </div>

                       <div className='col-md-6'>
                           <h4> Included	</h4>
                       </div>
                       <div className='col-md-6'>
                           <span>  Personal Guide </span>
                           <span> Transportation </span>
                           <span>  Typical Souvenir </span>
                       </div>

                       <div className='col-md-6'>
                           <h4>  Typical Souvenir </h4>
                       </div>
                       <div className='col-md-6'>
                           <span> mistake </span>
                           <span>  All Museum Tickets </span>
                           <span> Meals </span>
                       </div>
                       
               </div>

               <FormOur />
           </section>

       </>
    )
}
