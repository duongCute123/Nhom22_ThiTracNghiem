import { useContext } from "react"
import { AuthenContext } from "../context/AuthenContext"

const HienThiKetQua=()=>{
    const {diem}=useContext(AuthenContext)
    const {username}=useContext(AuthenContext)
    const ketqua=diem*0.5
    console.log(diem);
    return(
        <div className="result">
            <h1>Chúc mừng bạn đã hoàn thành bài kiểm tra nhé</h1>
            <p>Kết quả bài kiểm tra của bạn: {username}</p>
            <p>Điểm kiểm tra của bạn là:{ketqua}</p>
        </div>
    )
}
export default HienThiKetQua