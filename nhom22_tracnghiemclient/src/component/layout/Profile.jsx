import { useContext } from "react"
import avatar from "../../images/ava.jpg"
import { AuthenContext } from "../context/AuthenContext"
import { Link } from "react-router-dom"
import "./Profile.css"
const Profile = () => {
    const { email,password,fullname,laygtri} = useContext(AuthenContext)
    return (
        <div className="container-fluid">
            <h1 style={{ textAlign: "center", marginTop: "2%" }}>Trang thông tin chi tiết tài khoản</h1>
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="">
                            <span>Chào bạn nhé</span>
                            <h1>{email}</h1>
                        </div>
                        <div className="">
                            <Link to={"/baithi"} about="baithi">Bài Thi</Link>
                        </div>
                        <div className="">
                            <Link to={"/chitietbaithi"} about="chitietbaithi">Chi tiết bài thi</Link>
                        </div>
                        <div className="" style={{ marginTop: "90%" }}>
                            <input type="button" value="Đăng Xuất" className="btn btn-primary" />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="">
                            <h1>Hồ sơ của tôi</h1>
                            <p>
                                Quản lý thông tin hồ sơ để bảo mật tài khoản
                            </p>
                        </div>
                        <div className="">
                            <form action="" method="post">
                                <div className="form-group">
                                    <label htmlFor="">Tên đăng nhập</label>
                                    <input type="text" name="email" value={email} onChange={laygtri} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Tên đăng nhập</label>
                                    <input type="text" name="password" value={password} onChange={laygtri} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Tên đăng nhập</label>
                                    <input type="text" name="fullname" value={email} onChange={laygtri} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Tên đăng nhập</label>
                                    <input type="text" name="email" value={email} className="form-control" />
                                </div>
                                <div style={{display:"flex",alignItems:"center"}}>
                                    <div className="">
                                        <input type="button" value="Save" className="btn btn-primary" />
                                    </div>
                                    <div className="" style={{marginLeft:"10px"}}>
                                        <input width={"200px"} type="button" value="Update" className="btn btn-primary" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile