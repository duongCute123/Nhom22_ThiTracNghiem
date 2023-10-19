import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePageClient from "../layout/HomePageClient"
import LoginPage from "../authen/Login"
import ProfilePage from "../Interviewer/ProfilePage"
import DotThi from "../layout/DotThi"
import Register from "../authen/Register"
import QuanLyUngVien from "../HRM/QuanLyUngVienPage"
import ConfigRouter from "../../ConfigRoutes"
import Main from "../Interviewer/Main"
import AddUserPage from "../Interviewer/AddUserPage"
import ListAccountPage from "../Interviewer/ListAccountpage"
import Test from "../layout/Test"
import EditAccount from "../Interviewer/EditAccount"
import CategoryExamPage from "../Interviewer/CatergoryExamPage"
import AddCategoryPage from "../Interviewer/AddCategoryPage"
import EditCategoryPage from "../Interviewer/EditCategoryPage"
import Profile from "../layout/Profile"
import { useContext } from "react"
import { AuthenContext } from "../context/AuthenContext"
const USER_TYPES = {
    USER_INTERVIEWER: "Interviewer",
    USER_HR: "HRM",
    USER_UV: "Interviewee"
}
const RouterPage = (props) => {
    const { auth } = useContext(AuthenContext)
    const { isLogin } = useContext(AuthenContext)
    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Test />} />
                    <Route path="/user/homepage" element={<UVElement auth={auth}>
                        <HomePageClient />
                    </UVElement>} />
                    <Route path="/user/login" element={
                        <LoginPage />
                    } />
                    <Route path="/user/dotthi" element={
                        <UVElement auth={auth}>
                            <DotThi />
                        </UVElement>
                    } />
                    <Route path="/user/profile" element={
                        <UVElement auth={auth}>
                            <Profile />
                        </UVElement>
                    } />
                    <Route path="*" element={<div>Page Not 404</div>} />
                    <Route path="/user/register" element={
                        <InterviewElement auth={auth}>
                            <Register />
                        </InterviewElement>
                    } />
                    <Route path="/iterviewer/homepage" element={<ConfigRouter />}>
                        <Route index element={
                            <InterviewElement auth={auth}>
                                {
                                    isLogin === true ? <Main /> : <Route path="/user/login" element={
                                        <LoginPage />
                                    } />
                                }
                            </InterviewElement>
                        } />
                    </Route>
                    <Route path="/iterviewer/profile" element={<ConfigRouter />}>
                        <Route index element={
                            <InterviewElement auth={auth}>
                                <ProfilePage />
                            </InterviewElement>
                        } />
                    </Route>
                    <Route path="/iterviewer/list-category" element={<ConfigRouter />}>
                        <Route index element={
                            <InterviewElement auth={auth}>
                                <CategoryExamPage />
                            </InterviewElement>
                        } />
                    </Route>
                    <Route path="/iterviewer/add-exam" element={<ConfigRouter />}>
                        <Route index element={
                            <InterviewElement auth={auth}>
                                <AddCategoryPage />
                            </InterviewElement>
                        } />
                    </Route>
                    <Route path="/iterviewer/addAccount" element={<ConfigRouter />}>
                        <Route index element={
                            <InterviewElement auth={auth}>
                                <AddUserPage />
                            </InterviewElement>
                        } />
                    </Route>
                    <Route path="/iterviewer/listAccount" element={<ConfigRouter />}>
                        <Route index element={
                            <InterviewElement auth={auth}>
                                <ListAccountPage />
                            </InterviewElement>
                        } />
                    </Route>
                    <Route path="/iterviewer/edit/:_id" element={<ConfigRouter />}>
                        <Route index element={
                            <InterviewElement auth={auth}>
                                <EditAccount />
                            </InterviewElement>
                        } />
                    </Route>
                    <Route path="/iterviewer/edit-exam/:_id" element={<ConfigRouter />}>
                        <Route index element={
                            <InterviewElement auth={auth}>
                                <EditCategoryPage />
                            </InterviewElement>
                        } />
                    </Route>
                    <Route path="/hr/homepage" element={<ConfigRouter />} >
                        <Route index element={
                            <HRElement auth={auth}>
                                <Main />
                            </HRElement>
                        } />
                    </Route>
                    <Route path="/hr/profile" element={<ConfigRouter />}>
                        <Route index element={
                            <HRElement auth={auth}>
                                <ProfilePage />
                            </HRElement>
                        } />
                    </Route>
                    <Route path="/hr/listAccount" element={<ConfigRouter />}>
                        <Route index element={
                            <HRElement auth={auth}>
                                <ListAccountPage />
                            </HRElement>
                        } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
// const PublicElememt = ({ children }) => {
//     return (
//         <div className="">
//             {children}
//         </div>
//     )
// }
// const UserElememt = ({ children }) => {
//     if (CURRENT_USER_TYPES === USER_TYPES.USER_HR || CURRENT_USER_TYPES === USER_TYPES.USER_INTERVIEWER || CURRENT_USER_TYPES === USER_TYPES.USER_PUBLLIC) {
//         return (
//             <div className="">
//                 {children}
//             </div>
//         )
//     } else {
//         return (
//             <div>Bạn không có quyền truy cập vào</div>
//         )
//     }
// }
const InterviewElement = ({ children, auth }) => {
    if (auth === USER_TYPES.USER_INTERVIEWER) {
        return (
            <div className="">
                {children}
            </div>
        )
    } else {
        return (
            <div>Bạn không có quyền truy cập vào</div>
        )
    }
}
const HRElement = ({ children, auth }) => {
    if (auth === USER_TYPES.USER_HR) {
        return (
            <div className="">
                {children}
            </div>
        )
    } else {
        return (
            <div>Bạn không có quyền truy cập vào</div>
        )
    }
}
const UVElement = ({ children, auth }) => {
    if (auth === USER_TYPES.USER_UV) {
        return (
            <div className="">
                {children}
            </div>
        )
    } else {
        return (
            <div>Bạn không có quyền truy cập vào</div>
        )
    }
}
export default RouterPage