import { useContext, useEffect, useState } from "react";
import { AuthenContext } from "../context/AuthenContext";
import "../layout/DeThi.css"
const ListDeThiTHPTQG = (props) => {
    const list = useContext(AuthenContext)
    const { diem } = useContext(AuthenContext)
    console.log(diem);
    const [current, setCurrent] = useState(0)
    return (
        <div className="thptqg">
            <h1>Bài kiểm tra môn Toán</h1>
            <h1>Lớp</h1>
            <p>Thời gian làm bài</p>
            <p>Thời gian làm bài còn lại</p>
            <h1>Chào mừng {list.username} đến với bài kiểm tra</h1>
            <h1>{ }</h1>
            <Box current={current} next={setCurrent} />
        </div>
    )
}
const Box = ({ current, next }) => {
    const { data, diem, setDiem } = useContext(AuthenContext)
    const tests = useContext(AuthenContext)
    const startTime=()=>{
        const coutDownTime=Date.now+180000
        setInterval(() => {
            const now=new Date()
            const distance=coutDownTime-now
            const minutes=Math.floor((distance % (1000 * 60 * 60))/(1000 * 60))
            const second=Math.floor((distance % (1000 * 60 * 60))/1000)
            if (distance<0) {
                    clearInterval
            }
        }, 1000);
    }
    const [ans, setAns] = useState("")
    const saveHandle = () => {
        if (data[current].kq === ans) {
            setDiem(diem + 1)
        }
        setAns("")
        if (current + 1 === data.length) {
            alert("Bạn đã làm xong nộp bài nhé")
        } else {
            next(current + 1)
        }



    }
    return (
        <div className="thi">
            <div className="">{current + 1}{data[current].cauhoi}</div>
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-6 ">
                        <div className={`${tests.theme} ${ans === "A" ? tests.theme : tests.traloi} `} onClick={() => { setAns("A") }}>
                            A.{data[current].c1}
                        </div>
                        <div className={`${tests.theme} ${ans === "B" ? tests.theme : tests.traloi}`} onClick={() => { setAns("B") }}>
                            B.{data[current].c2}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className={`${tests.theme} ${ans === "C" ? tests.theme : tests.traloi}`} onClick={() => { setAns("C") }}>
                            C.{data[current].c3}
                        </div>
                        <div className={`${tests.theme} ${ans === "D" ? tests.theme : tests.traloi}`} onClick={() => { setAns("D") }}>
                            D.{data[current].c4}
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-sm-12 btn">
                <div className="row">
                    <div className="" style={{ width: "50%" }}>
                        <input type="button" value="Thoát" />
                    </div>
                    <div className="" style={{ width: "50%" }}>
                        <input type="button" onClick={saveHandle} value="Tiếp Theo" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListDeThiTHPTQG;