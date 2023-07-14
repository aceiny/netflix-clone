import React from 'react'
import Login from './componants/auth/login/login'
import Signup from './componants/auth/signup/signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp1_3 from './componants/auth/signup/comps/1'
import SignUp2_3 from './componants/auth/signup/comps/2'
import SignUp3_3 from './componants/auth/signup/comps/3'
import SignupPlan from './componants/auth/signup/comps/plan'
import MainBrows from './componants/browse/main'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element ={<Signup/>}/>
      <Route path='/signup/registration' element={<SignUp1_3/>}/>
      <Route path='signup/regform' element={<SignUp2_3/>}/>
      <Route path='/signup'element={<SignUp3_3/>}/>
      <Route path='/signup/planform' element={<SignupPlan/>}/>
      <Route path='/browse' element = {<MainBrows/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
