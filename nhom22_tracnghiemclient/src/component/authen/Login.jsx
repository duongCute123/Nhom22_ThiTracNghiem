import { useContext, useState } from "react"
import { AuthenContext } from "../context/AuthenContext"
import duong from "../../images/login-page-4468581-3783954.webp"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"
import isEmpty from "validator/lib/isEmpty"
import Footer from "../layout/Footer"
import { useNavigate } from "react-router-dom"
import Menu from "../menu/Menu"
import axios from "axios"
import { API_USER } from "../../configapi"
const Box = () => {
    const list = useContext(AuthenContext)
    const {setIsLogin}=useContext(AuthenContext)
    const [validMsg, setValidMsg] = useState("")
    const navigation = useNavigate()
    const validations = () => {
        const msg = {

        }
        if (isEmpty(list.email)) {
            toast("Vui lòng nhập email để đăng nhập")
            msg.email = "Vui lòng nhập địa chỉ email"
            
        }
        if (isEmpty(list.password)) {
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
                toast("Đăng nhập thành công..!!")
                localStorage.setItem("user",JSON.stringify(res.data))
                setIsLogin(false)
                navigation("/")
            })
            .catch(err => {
                toast("Lỗi đăng nhập...?")
            })

    }
    return (
        <div className="login" style={{marginTop:"3%",marginBottom:"2%"}}>
            <div className="container-fluid form-login" style={{ width: "50%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="login-left col-sm-6">
                            <h1 style={{ textAlign: "center" }}>Đăng Nhập</h1>
                            <form action="" method="post">
                                <div className="form-group">
                                    <label htmlFor="">Nhập địa chỉ email</label>
                                    <input type="text" name="email" value={list.email} onChange={list.laygtri} placeholder="Vui lòng nhập địa chỉ email" className="form-control" />
                                    <br />
                                    <p>{validMsg.email}</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Nhập địa chỉ email</label>
                                    <input type="password" name="password" value={list.password} onChange={list.laygtri} placeholder="Vui lòng nhập mật khẩu" className="form-control" />
                                    <br />
                                    <p>{validMsg.password}</p>
                                </div>
                                <div class="form-group form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" /> Remember me
                                    </label>
                                </div>
                                <button style={{ width: "100%" }} onClick={SubmitHandler} type="submit" className="btn btn-primary">Đăng Nhập</button>
                                <div>
                                    <p>Bạn chưa có tài khoản? <Link style={{ listStyle: "none" }} to={"/register"} onClick={() => {

                                    }} about="dangky">Đăng Ký</Link></p>
                                </div>
                            </form>
                        </div>
                        <div className="login-right col-sm-6" style={{ backgroundColor: "#D6E4E5" }}>
                            <img width={"80%"} style={{ textAlign: "center" }} src={duong} alt="" />
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}
const Login = () => {
    return (
        <div className="">
            <Box />
        </div>
    )
}
export default Login