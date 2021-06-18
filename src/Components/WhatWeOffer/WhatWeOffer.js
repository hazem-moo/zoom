import React from 'react'
import { WhatWeOffer as WhatWeOffers } from '../../Pages/WhatWeOffer/WhatWeOffer' 
import { LogoWhatWeOffer } from '../../Pages/WhatWeOffer/LogoWhatWeOffer'
import { Part2 } from '../../Pages/WhatWeOffer/Part2'
import { Part3 } from '../../Pages/WhatWeOffer/Part3'

export const WhatWeOffer = () => {
    return (
        <>
        <LogoWhatWeOffer />
        <WhatWeOffers />
        <Part2 />
        <Part3 />
        </>
    )
}
