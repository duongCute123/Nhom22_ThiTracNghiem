import axios from "axios"
import { API_URL } from "../../configapi"
import { useEffect, useState } from "react"

const Test = () => {
    const [data, setData] = useState([])
    const [ans, setAns] = useState("")
    const [diem, setDiem] = useState(0)
    const vl={
        opt:""
    }
    const [formss, setForms] = useState(vl)
    const layvalue = (e) => {
        const { name, value } = e.target
        setForms({ ...formss, [name]: value })
    }
    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    const HandlerNop = (e) => {
        console.log("Gia tri"+formss.opt);
        if (data.kq === ans) {
            setDiem(diem + 1)
        }
        console.log(diem);
    }
    const {opt}=formss
    return (
        <div className="">
            <h1>Test Làm Bài Kiểm Tra</h1>
            {
                data.map((list) => {
                    return (
                        <div className="forms">
                            <div class="form-check">{list.cauhoi}
                                <label class="form-check-label">{opt} <br />
                                    <input type="radio" onChange={layvalue} onClick={() => { setAns("A") }} class="form-check-input" name={opt} value={list.kq} />{list.c1} <br />
                                </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="radio" onChange={layvalue} onClick={() => { setAns("B") }} class="form-check-input" name={opt} value={list.kq} />{list.c2} <br />
                                </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="radio" onChange={layvalue} onClick={() => { setAns("C") }} class="form-check-input" name={opt} value={list.kq} />{list.c3}
                                </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="radio" onChange={layvalue} onClick={() => { setAns("D") }} class="form-check-input" name={opt} value={list.kq} />{list.c4} <br />
                                </label>
                            </div>
                        </div>
                    )
                })
            }
            <div className="">
                <div className="">
                    <input type="button" value="Thoát" />
                </div>
                <div className="">
                    <input type="button" value="Nộp Bài" onClick={HandlerNop} />
                </div>
            </div>
        </div>
    )
}
export default Test