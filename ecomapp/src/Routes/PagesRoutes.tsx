
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

const PagesRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={< Home/>} />
    <Route path="/login" element={<Home />} />
  </Routes>
  )
}

export default PagesRoutes
