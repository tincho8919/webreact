
import React from "react";
import { Routes, Route, Redirect} from 'react-router-dom'
import HOME from './componentes/HOME'
import NAVBAR from './componentes/NAVBAR';
import FLIGHTS from './componentes/FLIGHTS';
import HOTELS from './componentes/HOTELS';
import LOGIN from './componentes/LOGIN';
import FOOTER from "./componentes/FOOTER";
import PRODUCTS from "./componentes/PRODUCTS";



    function App() {
      return (
        <>

        <NAVBAR />

        <Routes>

        <Route index element={ <HOME /> }></Route>
        <Route path='/home' element={ <HOME /> }></Route>
        <Route path='/flights' element={ <FLIGHTS /> }></Route>
        <Route path='/hotels' element={ <HOTELS /> }></Route>
        <Route path='/login' element={ <LOGIN  /> }></Route>
        <Route path='/products' element={ <PRODUCTS  /> }></Route>
        </Routes>
    
        <FOOTER />
    
    
        </>
      );
    }
    
    


export default App;
