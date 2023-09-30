import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePageClient from "../layout/HomePageClient"
import LoginPage from "../authen/Login"
import Profile from "../layout/Profile"
import DotThi from "../layout/DotThi"
import Register from "../authen/Register"
const RouterPage = () => {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<HomePageClient />} />
                    <Route path="/user/login" element={<LoginPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dotthi" element={<DotThi />} />
                    <Route path="/user/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RouterPage