import { useContext, useState } from "react"
import { AuthenContext } from "../context/AuthenContext"
import duong from "../../images/login-page-4468581-3783954.webp"
const Login = () => {
    const list = {
        username: "",
        password: ""
    }
    console.log(AuthenContext);
    const ten = useContext(AuthenContext)
    console.log(ten);
    const [forms, setForms] = useState(list)
    const laygtri = (e) => {
        const { name, value } = e.target
        setForms({ ...forms, [name]: value })
    }
    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    const { username, password } = forms
    return (
        <div className="login">
            <div className="container-fluid form-login" style={{width:"50%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="login-left col-sm-6">
                            <h1 style={{textAlign:"center"}}>Đăng Nhập</h1>
                            <form action="" method="post">
                                <div className="form-group">
                                    <label htmlFor="">Nhập địa chỉ email</label>
                                    <input type="text" name="username" value={username} onChange={laygtri} placeholder="Vui lòng nhập địa chỉ email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Nhập địa chỉ email</label>
                                    <input type="password" name="password" value={password} onChange={laygtri} placeholder="Vui lòng nhập mật khẩu" className="form-control" />
                                </div>
                                <div class="form-group form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox"/> Remember me
                                    </label>
                                </div>
                                <button  style={{width:"100%"}}  type="button" className="btn btn-primary">Đăng Nhập</button>
                            </form>
                        </div>
                        <div className="login-right col-sm-6" style={{backgroundColor:"#D6E4E5"}}>
                            <img width={"80%"} style={{textAlign:"center"}} src={duong} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login