import React, { Fragment } from 'react'
import { Destinations as Destination } from '../../Pages/Destinatios/Destinations'
import { LogoDestinations } from '../../Pages/Destinatios/LogoDestinations'
import { TotalDestination } from '../../Pages/Destinatios/TotalDestination'

const Destinations = () => {
    return (
        <Fragment>
            <LogoDestinations />
            <Destination />
            <TotalDestination />
        </Fragment>
    )
}

export default Destinations
