import { useContext, useEffect, useState } from "react";
import { AuthenContext } from "../context/AuthenContext";
import { Link, useNavigation } from "react-router-dom";
import "../layout/DeThi.css"
import HienThiKetQua from "./Hienthiketqua";
const ListDeThiTHPTQG = (props) => {
    const list = useContext(AuthenContext)
    const { diem } = useContext(AuthenContext)
    const [current, setCurrent] = useState(0)
    // const demthoigian = () => {
    //     let year = new Date().getFullYear()
    //     const difference = +new Date(`10/01/${year}`) - +new Date()
    //     let timeLeft = {}
    //     if (difference > 0) {
    //         timeLeft = {
    //             minutes: Math.floor((difference / 1000 / 60) % 60),
    //             seconds: Math.floor((difference / 1000) % 60)

    //         }
    //     }
    //     return timeLeft
    // }
    // const [timeLeft, setTimeLeft] = useState(demthoigian())
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setTimeLeft(demthoigian());
    //     }, 1000)
    // });
    // const timerComponents = []
    // Object.keys(timeLeft).forEach((interval) => {
    //     if (!timeLeft[interval]) {
    //         return;
    //     }

    //     timerComponents.push(
    //         <span>
    //             {timeLeft[interval]} {interval}{" "}
    //         </span>
    //     );
    // });
    return (
        <div className="thptqg">
            <h1>Bài kiểm tra môn Toán</h1>
            <h1>Lớp</h1>
            <p>Thời gian làm bài {diem}</p>
            <p>Thời gian làm bài còn lại</p>
            {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
            <h1>Chào mừng {list.username} đến với bài kiểm tra</h1>
            <h1>{ }</h1>
            <Box current={current} next={setCurrent} />
        </div>
    )
}
const Box = ({ current, next }) => {
    const { data, diem, setDiem } = useContext(AuthenContext)
    const {exit,start,setExit,setStart}=useContext(AuthenContext)
    console.log(exit,start);
    const tests = useContext(AuthenContext)
    const optradios={
        optradio:""
    }
    const [radios,setOptradio]=useState(optradios)
    const [ans, setAns] = useState("")
    const HandlerGtri=(e)=>{
        const {name,value}=e.target
        setOptradio({...radios,[name]:value})
    }
    const saveHandle = () => {
        if (data[current].kq === ans) {
            setDiem(diem + 1)
        }
        setAns("")
        setOptradio("")
        if (current + 1 === data.length) {
            setExit(true)
            
        } else {
            next(current + 1)
        }



    }
    const {optradio}=radios
    console.log(optradio);
    return (
        <div className="thi">
            {/* <div className="">{current + 1}{data[current].cauhoi}</div>
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
            </div> */}
            <div className="">
                <div className="">
                    <div className="">{current+1}{data[current].cauhoi}</div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio"  onClick={()=>setAns("A")} onChange={HandlerGtri} value={data[current].kq}class="form-check-input" name="optradio" />{data[current].c1}
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" onClick={()=>setAns("B")} onChange={HandlerGtri} value={optradio}  class="form-check-input" name="optradio" />{data[current].c2}
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio"  onClick={()=>setAns("C")} onChange={HandlerGtri} value={optradio}  class="form-check-input" name="optradio" />{data[current].c3}
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio"  onClick={()=>setAns("D")} onChange={HandlerGtri} value={optradio} class="form-check-input" name="optradio" />{data[current].c4}
                        </label>
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