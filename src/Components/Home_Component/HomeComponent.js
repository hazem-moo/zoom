import React, { Fragment } from 'react'
import { HeaderHome } from '../../Pages/Home_Page/HeaderHome'
import { Destinations as Destination } from '../../Pages/Destinatios/Destinations'
import { Tours } from '../../Pages/Tours/Tours'
import { WhatWeOffer as WhatWeOffers } from '../../Pages/WhatWeOffer/WhatWeOffer'

const HomeComponent = () => {
    return (
        <Fragment>
            <HeaderHome />
            <Destination />
            <Tours />
            <WhatWeOffers />
        </Fragment>
    )
}

export default HomeComponent