import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import SingIn from './pages/SingIn'

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SingIn/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>
  )
}

export default MainRoutes
