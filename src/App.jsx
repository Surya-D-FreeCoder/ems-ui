import React from 'react'
import './App.css'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'


function App() {

  return (
      <BrowserRouter>
        <Header/>

          <Routes>
            <Route path='/' element = {<ListEmployeeComponents/>}></Route>
            <Route path='/employees' element = {<ListEmployeeComponents/>}></Route>
            <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>
            <Route path='/edit-employee/:id' element ={<EmployeeComponent />}></Route>
          </Routes>
          
        <Footer/>
      </BrowserRouter>
  )
}

export default App
