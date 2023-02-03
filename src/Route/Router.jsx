import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '../layout/navbar/navbar'
import { Footer} from '../layout/footer/footer'

import { Home } from '../pages/home/home'
import { Contato } from '../pages/contato/contato'
import { Sobre } from '../pages/sobre/sobre'

import { Page1 } from '../pages/page/page1'
import { Page2 } from '../pages/page/page2'
import { Page3 } from '../pages/page/page3'
import { Page4 } from '../pages/page/page4'
import { Experiencia } from '../pages/experiencia/experiencia'


export const Router=()=>{
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sobre' element={<Sobre/>}/>

            <Route path='/contatos' element={<Contato/>}/>
             <Route path='/experiencia' element={<Experiencia/>}/>

            <Route path='/paga1' element={<Page1/>}/>
            <Route path='/paga2' element={<Page2/>}/>
            <Route path='/paga3' element={<Page3/>}/>
            <Route path='/paga4' element={<Page4/>}/>


        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}