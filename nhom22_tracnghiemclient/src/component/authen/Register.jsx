import { useContext, useState } from "react"
import { AuthenContext } from "../context/AuthenContext"
import duong from "../../images/login-page-4468581-3783954.webp"
import { Link, useNavigate, useNavigation } from "react-router-dom"
import axios from "axios"
const Register = () => {
    const list = useContext(AuthenContext)
    const navigation = useNavigate()
    const SubmitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/user/register", list.forms)
            .then(res => {
                navigation("/login")
            })
            .catch(err => {
                alert("Vui lòng đăn nhâ[pk ;pao")
            })
    }
    return (
        <div className="login">
            <div className="container-fluid form-login" style={{ width: "50%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="login-left col-sm-6">
                            <h1 style={{ textAlign: "center" }}>Đăng Ký Tài Khoản</h1>
                            <form action="" method="post">
                                <div className="form-group">
                                    <label htmlFor="">Nhập địa chỉ email</label>
                                    <input type="text" name="email" value={list.email} onChange={list.laygtri} placeholder="Vui lòng nhập địa chỉ email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Nhập mật khẩu</label>
                                    <input type="password" name="password" value={list.password} onChange={list.laygtri} placeholder="Vui lòng nhập mật khẩu" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Nhập họ và tên của bạn</label>
                                    <input type="text" name="fullname" value={list.fullname} onChange={list.laygtri} placeholder="Vui lòng nhập họ và tên của bạn" className="form-control" />
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
        </div>
    )
}
export default Register