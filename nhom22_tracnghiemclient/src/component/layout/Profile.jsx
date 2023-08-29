import { useContext } from "react"
import avatar from "../../images/ava.jpg"
import { AuthenContext } from "../context/AuthenContext"
import { Link } from "react-router-dom"
import "./Profile.css"
const Profile = () => {
    const { username } = useContext(AuthenContext)
    return (
        <div className="container-fluid">
            <h1 style={{textAlign:"center",marginTop:"2%"}}>Trang thông tin chi tiết tài khoản</h1>
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="">
                            <span>Chào bạn nhé</span>
                            <h1>{username}</h1>
                        </div>
                        <div className="">
                            <Link to={"/baithi"} about="baithi">Bài Thi</Link>
                        </div>
                        <div className="">
                            <Link to={"/chitietbaithi"} about="chitietbaithi">Chi tiết bài thi</Link>
                        </div>
                        <div className="">
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
                                    <input type="text" name="username" className="form-control" />
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