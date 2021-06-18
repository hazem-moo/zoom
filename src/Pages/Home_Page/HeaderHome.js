import React, { useState } from 'react'
import { Carousel, CarouselCaption, CarouselItem } from 'reactstrap'
import './Home.css'
import Img1 from '../../Imgs/1.jpg'
import Img2 from '../../Imgs/2.jpg'
import Img3 from '../../Imgs/3.jpg'
import { Link } from 'react-router-dom'

import { dataHome } from '../../Data/DataHome'

const items = [
    {
        src :Img1,
        caption : 'The Mountaintops',
        altText : ""
    },
    {
        src :Img2,
        altText : '',
        caption : "The Mountaintops"
    },
    {
        src :Img3,
        altText : '',
        caption : "The Mountaintops"
    }
]
export const HeaderHome = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
            <div className='overlay'></div>
          <img src={item.src} alt='' />
          <CarouselCaption captionText='' captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
            {slides}
            <Link className='slide-control left' onClick={ previous } >
              <i className='fas fa-chevron-left '></i>
            </Link>
            
            <Link className='slide-control right' onClick={ previous } >
              <i className='fas fa-chevron-right '></i>
            </Link>
        </Carousel>

       {/* start home inforamtion */}

       <section className="text-center home-info" >
        <div className='container' >
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <article className='info'>
                <h4 > thai island jungle </h4>
                <h5> jason andrews </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur iscing elit. Etiam fermentum nulla ac tincidunt. Sed volutpat semper elit quis.
                </p>
              </article>
            </div>

            <div className='col-lg-4 col-md-6'>
              <article className='info'>
                <h4 > kayaking thailand </h4>
                <h5> jessie howard </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur iscing elit. Etiam fermentum nulla ac tincidunt. Sed volutpat semper elit quis.
                </p>
              </article>
            </div>

            <div className='col-lg-4'>
              <article className='info'>
                <h4 > niagara falls </h4>
                <h5> steven jackson </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur iscing elit. Etiam fermentum nulla ac tincidunt. Sed volutpat semper elit quis.
                </p>
              </article>
            </div>


          </div>
        </div>
       </section>

       { /***********  start home info   **************/ }

        <div className='home-infomation container text-center'>
          <div className='row'>
            {
              dataHome.map( ( { icon, title, header }, idx ) => {
                return (  
                  <div className='col-lg-3 col-md-6 ' key={ idx } >
                    <div className='info2'>
                      <div className='icon rounded-circle mx-auto mb-3'>
                        <i className={ icon }></i>
                      </div>
                        <h4 > { header } </h4>
                        <p> { title } </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

      </>
    )
}
