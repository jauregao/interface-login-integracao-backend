import { Navigate, Outlet, Routes, Route } from 'react-router-dom'
import useAuth from './hooks/useAuth'
import Main from './pages/Main'
import SingIn from './pages/SingIn'
import TeacherDetail from './pages/TeacherDetail'

type Props = {
  redirectTo: string
}

function ProtectedRoutes({ redirectTo }: Props) {
  const { handleGetToken } = useAuth()

  return handleGetToken() ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SingIn/>}/>

      <Route element={<ProtectedRoutes redirectTo='/' />}>
        <Route path='/main' element={<Main/>}/>
        <Route path='/teacher-detail' element={<TeacherDetail/>}/>
      </Route>
    </Routes>
  )
}

export default MainRoutes
