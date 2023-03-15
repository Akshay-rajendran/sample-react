
import Card from './components/card'
import './App.css'
import CardContainer from './components/CardContainer'
import Counter from './components/Counter'
import Login from './components/Login'
import Signup from './components/Signup'
import Effect from './components/Effect'
import Parent from './components/Parent'

import { BrowserRouter, Route, Routes } from 'react-router-dom' //for using this install this from npm using "npm i react-router-dom@6" used for to switch component to component when react running

function App() {
  return (
    <div className='card'>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Effect />} />
          <Route path='Signup' element={<Signup />} />
          <Route path='Login' element={<Login />} />
          <Route path='Card' element={<Card />} />
          <Route path='Counter' element={<Counter />} />
          <Route path='CardContainer' element={<CardContainer />} />
          <Route path='Parent' element={<Parent>
                                         <p>This Is Child</p>
                                         <p>this is child 2</p>
                                         <Counter/>
                                       </Parent>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


// in parent the p tag is passing as props so we have to access that in the parent in the component as argument of the function there 