import React from 'react'
import { Route, Routes } from "react-router";
import "../MainLandingPage/design.css"
import ShowCase from './ShowCase'


function Landing() {
  return (
    <>
    {/* <h1>Hello world</h1> */}
      
   
        <Routes>
          <Route exact path='/' element={<ShowCase/> } />
          {/*<Route path='/mlog-in' element={<MerchantLogIn/>} />
          <Route path='/alog-in' element={<AdminLogin/>} />
          <Route path='/clog-in' element={<ClerkLogin/>} />
          <Route path='/Register' element={<Register/>} />*/}

        </Routes>
    
      
    </>
  )
}

export default Landing
