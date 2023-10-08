import { createContext } from "react";
import axios from "axios"
import { API_URL } from "../../configapi";
import { useState } from "react";
import { useEffect } from "react";
const AuthenContext = createContext();
const AuthenProvider = ({ children }) => {
    // Đọc dữ liệu ra từ local nếu có lưu
    const Menber = localStorage.getItem("user")
    const infoMenber =Menber? JSON.parse(Menber):null
    const token = infoMenber?.data?.token
    const roles = infoMenber?.data?.infoUser?.role
    const _id=infoMenber?.data?.infoUser?._id
    console.log(_id);
    console.log(roles);
    const list = {
        username: "",
        password: "",
        fullName: "",
        gender: "",
        role: ""
    }
    const listexam = {
        name: "",
        description: "",
        levelDifficult: "",
        timeDoTest: ""
    }
    // Test lại phân role
    const [auth,setAuth]=useState({})
    const [formexam, setFormExam] = useState(listexam)
    //Kiểm tra xem là login chưa
    const [isLogin, setIsLogin] = useState(false)
    // Hiển thị mật khẩu người dùng
    const [passhiden,setPassHiden]=useState(false)
    // Thay đổi loại dữ liệu đầu vào
    const [types,setTypes]=useState("password")
    console.log(isLogin);
    //Lấy dữ liệu trong form
    const [forms, setForms] = useState(list)
    //Hiển thị điểm hiện tại
    const [diem, setDiem] = useState(0)
    //Bấm để bắt đầu làm bài kiểm tra
    const [start, setStart] = useState(false)
    //Bấm để thoát quá trình làm bài kiểm tra
    const [exit, setExit] = useState(false)
    //Lấy url của api
    const url = API_URL
    //Thử set để thay đổi css
    const [theme, setTheme] = useState("cautraloi")
    const traloi = () => {
        setTheme(theme === "cautraloi" ? "dung" : "cautraloi")
    }

    //Lấy dữ liệu cuat api with axios
    const [data, setData] = useState([])
    //Luu dữ liệu khi đăng nhập vào localStory và token
    //Lấy dữ liệu từ localStory
    // Call dữ liệu từ db lên
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_TEST}`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [url])
    const laygtri = (e) => {
        const { name, value } = e.target
        setForms({ ...forms, [name]: value })
    }
    const layCategory = (e) => {
        const { name, value } = e.target
        setFormExam({ ...formexam, [name]: value })
    }
    const { username, password, fullName, gender, role } = forms
    const { name, description, levelDifficult, timeDoTest } = formexam
    const value = {
        username,
        password,
        fullName,
        gender,
        role,
        forms,
        token,
        roles,
        laygtri,
        name,
        description,
        levelDifficult,
        timeDoTest,
        listexam,
        layCategory,
        diem,
        setDiem,
        data,
        theme,
        traloi,
        exit,
        start,
        setExit,
        setStart,
        isLogin,
        setIsLogin,
        auth,
        setAuth,
        passhiden,
        setPassHiden,
        types,
        setTypes

    }
    return (
        <AuthenContext.Provider value={value}>
            {children}
        </AuthenContext.Provider>
    )
}
export { AuthenContext, AuthenProvider }