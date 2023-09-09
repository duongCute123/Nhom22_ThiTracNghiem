import { useContext, useState } from "react"
import { AuthenContext } from "../context/AuthenContext"
import duong from "../../images/login-page-4468581-3783954.webp"
import { Link, useNavigate, useNavigation } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import isEmpty from "validator/lib/isEmpty"
const Register = () => {
    const list = useContext(AuthenContext)
    const navigation = useNavigate()
    const [validMsg, setValidMsg] = useState("")
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
        if (isEmpty(list.fullname)) {
            toast("Vui lòng nhập họ và tên bạn")
            msg.fullname="Vui lòng nhập họ và tên"
        }
        setValidMsg(msg)
        if (Object.keys(msg).length > 0) return false
        return true
    }
    const SubmitHandler = (e) => {
        e.preventDefault()
        const isValid = validations()
        if (!isValid) return
        axios.post(`${process.env.REACT_APP_API_REGISTER}`, list.forms)
            .then(res => {
                toast("Đăng ký tài khoản thành công..!!")
                localStorage.setItem("register",JSON.stringify(res.data))
                navigation("/login")
            })
            .catch(err => {
                toast("Lỗi đăng ký tài khoản")
            })
    }
    return (
        <div className="login" style={{marginTop:"3%"}}>
            <div className="container-fluid form-login" style={{ width: "50%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="login-left col-sm-6">
                            <h1 style={{ textAlign: "center" }}>Đăng Ký Tài Khoản</h1>
                            <form action="" method="post">
                                <div className="form-group">
                                    <label htmlFor="">Nhập địa chỉ email</label>
                                    <input type="text" name="email" value={list.email} onChange={list.laygtri} placeholder="Vui lòng nhập địa chỉ email" className="form-control" />
                                    <p>{validMsg.email}</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Nhập mật khẩu</label>
                                    <input type="password" name="password" value={list.password} onChange={list.laygtri} placeholder="Vui lòng nhập mật khẩu" className="form-control" />
                                    
                                    <p>{validMsg.password}</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Nhập họ và tên của bạn</label>
                                    <input type="text" name="fullname" value={list.fullname} onChange={list.laygtri} placeholder="Vui lòng nhập họ và tên của bạn" className="form-control" />
                                   
                                    <p>{validMsg.fullname}</p>
                                </div>
                                <div class="form-group form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" /> Remember me
                                    </label>
                                </div>
                                <button style={{ width: "100%" }} type="submit" onClick={SubmitHandler} className="btn btn-primary">Đăng Ký</button>
                                <div>
                                    <p>Bạn đã có tài khoản? <Link to={"/login"} about="dangky">Đăng Nhập</Link></p>
                                </div>
                            </form>
                        </div>
                        <div className="login-right col-sm-6" style={{ backgroundColor: "#D6E4E5" }}>
                            <img width={"80%"} style={{ textAlign: "center" }} src={duong} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}
export default Register