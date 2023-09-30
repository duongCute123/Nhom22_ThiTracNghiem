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
    console.log(list);
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
    const SubmitHandler = (e) => {
        e.preventDefault()
        const isValid = validations()
        if (!isValid) return
        axios.post(`${process.env.REACT_APP_API_LOGIN}`, list.forms)
            .then(res => {
                navigation("/")
                console.log(res.data);
                toast("Đăng nhập thành công..!!")
                localStorage.setItem("user", JSON.stringify(res.data))
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
                    <p className="text-white mx-8">Giáo dục là sức mạnh để thay đổi thế giới</p>
                </div>
                <div className="bg-white w-96 shadow-lg shadow-cyan-500/50 my-16 h-[580px] rounded-2xl">
                    <div className="text-center items-center basis-1/3">
                        <img className="items-center text-center mx-20" src={logo} alt="" />
                        <h1 className="uppercase mt-5 mb-4">Đăng Nhập</h1>
                    </div>
                    <div className="border-solid rounded mx-6" >
                        <form action="" method="post">
                            <div className="forms-group">
                                <label htmlFor="">Nhập tài khoản</label>
                                <input type="text" className="form-control" placeholder="Vui lòng nhập tên tài khoản" name="username" value={list.username} onChange={list.laygtri} id="" />
                                <p>{validMsg.username}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Nhập mật khẩu</label>
                                <input type="text" className="form-control" placeholder="Vui lòng nhập mật khẩu" name="password" value={list.password} onChange={list.laygtri} id="" />
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