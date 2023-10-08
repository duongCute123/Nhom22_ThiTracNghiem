import { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import logo from "../../images/white1.webp"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import isEmpty from "validator/lib/isEmpty"
import { AuthenContext } from "../context/AuthenContext";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    return (
        <div className="w-auto h-auto bg-[url('./images/back-login.png')] bg-no-repeat bg-cover">
            <Box />
        </div>
    )
}
const Box = () => {
    const list = useContext(AuthenContext)
    const { setIsLogin } = useContext(AuthenContext)
    const { auth, setAuth } = useContext(AuthenContext)
    const { passhiden, setPassHiden } = useContext(AuthenContext)
    const { types, setTypes } = useContext(AuthenContext)

    console.log(auth);
    const navigation = useNavigate()
    const [validMsg, setValidMsg] = useState("")
    const validations = () => {
        const msg = {

        }
        if (isEmpty(list.username)) {
            toast("Vui lòng nhập email để đăng nhập")
            msg.username = "Vui lòng nhập địa chỉ email"

        }
        if (isEmpty(list.password)) {
            msg.password = "Vui lonhg nhập mật khẩu"
            toast("Vui lòng nhập mật khẩu để đăng nhập")
            msg.password = "Vui lòng nhập mật khẩu"
        }
        setValidMsg(msg)
        if (Object.keys(msg).length > 0) return false
        return true
    }
    const SubmitHandler = async (e) => {
        e.preventDefault()
        const isValid = validations()
        if (!isValid) return
        await axios.post(`${process.env.REACT_APP_API_LOGIN}`, list.forms)
            .then(res => {
                if (res.data.error === true) {
                    toast(res.data.message)
                } else if (res.data.error === false) {
                    setAuth(res.data.data.infoUser.role)
                    setIsLogin(true)
                    console.log(res.data);
                    localStorage.setItem("user", JSON.stringify(res.data))
                    if (auth === "Interviewee") {
                        return navigation("/user/homepage")
                    }
                    if (auth === "Interviewer") {
                        return navigation("/iterviewer/homepage")
                        window.location.reload()
                    }
                    if (auth === "HRM") {
                        return navigation("/hr/homepage")
                    }
                }
            })
            .catch(err => {
                console.log(err);
                toast("Lỗi đăng nhập...?")
            })

    }
    return (
        <div className="">
            <div className="flex">
                <div className="basis-2/3 my-16">
                    <img className="mx-16" src={logo} alt="" />
                    <p className="text-white mx-8"></p>
                </div>
                <div className="bg-white w-96 shadow-lg shadow-cyan-500/50 my-16 h-[580px] rounded-2xl">
                    <div className="text-center items-center basis-1/3 flex flex-col">
                        <img className="items-center text-center" src={logo} alt="" />
                        <h1 className="uppercase mt-5 mb-4">Đăng Nhập</h1>
                    </div>
                    <div className="border-solid rounded mx-6" >
                        <form action="" method="post">
                            <div className="forms-group">
                                <label htmlFor="">Nhập địa chỉ email</label>
                                <input type="text" className="form-control" placeholder="Vui lòng nhập địa chỉ email" name="username" value={list.username} onChange={list.laygtri} id="" />
                                <p>{validMsg.username}</p>
                            </div>
                            <div className="form-group relative">
                                <label htmlFor="">Nhập mật khẩu</label>
                                <div className="absolute top-10 lg:left-72 w-6 md:left-64 sm:left-48">
                                    {
                                        passhiden ?
                                            <svg onClick={() => {
                                                setPassHiden(false)
                                                setTypes("password")
                                            }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            :

                                            <svg onClick={() => {
                                                setPassHiden(true)
                                                setTypes("text")
                                            }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                    }
                                </div>
                                <input type={`${types}`} className="form-control" placeholder="Vui lòng nhập mật khẩu" name="password" value={list.password} onChange={list.laygtri} id="" />
                                <p>{validMsg.username}</p>
                            </div>
                            <input type="submit" onClick={SubmitHandler} className="form-control border rounded hover:bg-slate-400 items-center text-center font-semibold text-xl" value="Đăng Nhập" />
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
export default LoginPage