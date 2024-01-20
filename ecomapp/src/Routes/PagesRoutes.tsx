
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import PrivateRoutes from './ProtectedRoutes'


const PagesRoutes = () => {
  return (
    <Routes>
    <Route  element={<PrivateRoutes />} >
    <Route element={<Home/>} path="/" />
    </Route>
    <Route path="/signUp" element={< SignUp/>} />
    <Route path="/login" element={<Login />} />
  </Routes>
  )
}

export default PagesRoutes
