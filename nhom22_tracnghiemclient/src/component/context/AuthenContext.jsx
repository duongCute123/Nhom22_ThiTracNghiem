import { createContext } from "react";
import axios from "axios"
import { API_URL } from "../../configapi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const AuthenContext = createContext();
const AuthenProvider = ({ children }) => {

    const list = {
        username: "",
        password: ""
    }
    //Lấy dữ liệu trong form
    const [forms, setForms] = useState(list)
    //Hiển thị điểm hiện tại
    const [diem, setDiem] = useState(0)
    //Bấm để bắt đầu làm bài kiểm tra
    const [start,setStart]=useState(false)
    //Bấm để thoát quá trình làm bài kiểm tra
    const [exit,setExit]=useState(false)
    //Lấy url của api
    const url=API_URL
    //Thử set để thay đổi css
    const [theme,setTheme]=useState("cautraloi")
    const traloi=()=>{
        setTheme(theme==="cautraloi"? "dung":"cautraloi")
    }
    const tk=localStorage.getItem("user")
    console.log(tk);
    //Lấy dữ liệu cuat api with axios
    const [data, setData] = useState([])
    //Luu dữ liệu khi đăng nhập vào localStory và token
    //Lấy dữ liệu từ localStory
    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                setData(res.data)
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [url])
    const laygtri = (e) => {
        const { name, value } = e.target
        setForms({ ...forms, [name]: value })
    }
    console.log(theme);
    const { username, password } = forms
    const value = {
        username,
        password,
        laygtri,
        diem,
        setDiem,
        data,
        theme,
        traloi,
        exit,
        start,
        setExit,
        setStart
        
    }
    return (
        <AuthenContext.Provider value={value}>
            {children}
        </AuthenContext.Provider>
    )
}
export { AuthenContext, AuthenProvider }