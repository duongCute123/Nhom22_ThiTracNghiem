import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./component/authen/LoginPage"
import HomePageClient from "./component/layout/HomePageClient"
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePageClient />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App