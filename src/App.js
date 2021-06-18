import  React, { useState, useEffect } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Destinations from './Components/Destinations/Destinations';
import HomeComponent from './Components/Home_Component/HomeComponent';
import MyNav from './Components/Navbar/MyNav';
import { Tours } from './Components/Tours/Tours';
import { WhatWeOffer } from './Components/WhatWeOffer/WhatWeOffer';

import { Beach } from './Pages/Destinatios/AtherDestination/Beach';
import { FijiIslands } from './Pages/Destinatios/AtherDestination/FijiIslands';
import { ForestAdventure } from './Pages/Destinatios/AtherDestination/ForestAdventure';
import { MontBlanc } from './Pages/Destinatios/AtherDestination/MontBlanc';
import { Spring } from './Pages/Destinatios/AtherDestination/Spring';
import { TajMahal } from './Pages/Destinatios/AtherDestination/TajMahal';
import { California } from './Pages/Tours/PagesTours/California';
import { China } from './Pages/Tours/PagesTours/China';
import { Croatia } from './Pages/Tours/PagesTours/Croatia';
import { Hiking } from './Pages/Tours/PagesTours/Hiking';
import { Mountains } from './Pages/Tours/PagesTours/Mountains';
import { Mykonos } from './Pages/Tours/PagesTours/Mykonos';
import { PeytoLake } from './Pages/Tours/PagesTours/PeytoLake';
import { Sailing } from './Pages/Tours/PagesTours/Sailing';

import { Footer } from './Components/Footer/Footer'


function App() {
  const [ title, setTitle ] = useState('')
  useEffect( () => {
    setTitle( document.title = "zoom" )
  }, [title])

  return (
    <BrowserRouter basename='/zoom'>
        <MyNav />
        <Switch>
          <Route path='/' exact component={ HomeComponent } />

          <Route path='/Destinations' component={ Destinations } />
          <Route path='/Spring' component={ Spring } />
          <Route path='/MontBlanc' component={ MontBlanc } />
          <Route path='/ForestAdventure' component={ ForestAdventure } />
          <Route path='/FijiIslands' component={ FijiIslands } />
          <Route path='/TajMahal' component={ TajMahal } />
          <Route path='/Beach' component={ Beach } />

          <Route path='/Tours' component={ Tours } />
          <Route path='/Hiking' component={ Hiking } />
          <Route path='/PeytoLake' component={ PeytoLake } />
          <Route path='/China' component={ China } />
          <Route path='/Sailing' component={ Sailing } />
          <Route path='/Mykonos' component={ Mykonos } />
          <Route path='/Mountains' component={ Mountains } />
          <Route path='/Croatia' component={ Croatia } />
          <Route path='/California' component={ California } />

          <Route path='/WhatWeOffer' component={ WhatWeOffer } />

        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
