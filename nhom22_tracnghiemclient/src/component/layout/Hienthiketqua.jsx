import { useContext } from "react"
import { AuthenContext } from "../context/AuthenContext"

const HienThiKetQua=()=>{
    const {diem}=useContext(AuthenContext)
    const {username}=useContext(AuthenContext)
    console.log(diem);
    return(
        <div className="result">
            <h1>Chúc mừng bạn đã hoàn thành bài kiểm tra nhé</h1>
            <p>Kết quả bài kiểm tra của bạn: {username}</p>
            <p>Điểm kiểm tra của bạn là:{diem}</p>
        </div>
    )
}
export default HienThiKetQua