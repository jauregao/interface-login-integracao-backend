import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'

function MainRoutes() {
  return (
    <Routes>
      <Route path='/main' element={<Main/>}>
      </Route>
    </Routes>
  )
}

export default MainRoutes
