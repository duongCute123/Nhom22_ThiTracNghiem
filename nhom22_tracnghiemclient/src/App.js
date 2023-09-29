import Login from "./component/authen/Login"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Register from "./component/authen/Register"
import './App.css'
import Contact from "./component/layout/Contact"
import HomePage from "./component/layout/Homepage"
import ListDeThiTHPTQG from "./component/layout/Listdethithptqg"
import HienThiKetQua from "./component/layout/Hienthiketqua"
import { useContext, useEffect } from "react"
import { AuthenContext } from "./component/context/AuthenContext"
import Profile from "./component/layout/Profile"
import New from "./component/layout/New"
import Test from "./component/layout/Test"
import LoginPage from "./component/authen/Login"
const App = () => {
  return (
    <div className="" style={{ width: "100%" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thi" element={<ListDeThiTHPTQG />} />
          <Route path="/ketqua" element={<HienThiKetQua />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new" element={<New />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App