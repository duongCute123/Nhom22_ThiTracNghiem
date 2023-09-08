import Login from "./component/authen/Login"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Register from "./component/authen/Register"
import './App.css'
import Contact from "./component/layout/Contact"
import HomePage from "./component/layout/Homepage"
import { Menu } from "@mui/material"
import Menus from "./component/menu/Menu"
import ListDeThiTHPTQG from "./component/layout/Listdethithptqg"
import HienThiKetQua from "./component/layout/Hienthiketqua"
import { useContext } from "react"
import { AuthenContext } from "./component/context/AuthenContext"
import Profile from "./component/layout/Profile"
import New from "./component/layout/New"
import Test from "./component/layout/Test"
const App = () => {
  const { exit, setExit } = useContext(AuthenContext)
  setExit(true)
  console.log(exit);
  return (
    <div className="" style={{ width: "100%" }}>
      <BrowserRouter>
        <Menus />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
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