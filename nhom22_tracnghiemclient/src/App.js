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
const App = () => {
  const { exit } = useContext(AuthenContext)
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
          {
            exit === true ?
              <Route path="/ketqua" element={<HienThiKetQua />} />
              :
              <Route path="/thi" element={<ListDeThiTHPTQG />} />
          }
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App