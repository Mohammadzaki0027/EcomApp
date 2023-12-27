
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'


const PagesRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signUp" element={< SignUp/>} />
    <Route path="/login" element={<Login />} />
  </Routes>
  )
}

export default PagesRoutes
