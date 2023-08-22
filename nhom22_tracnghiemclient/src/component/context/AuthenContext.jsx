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
    const [forms, setForms] = useState(list)
    const [diem, setDiem] = useState(0)
    const url=API_URL
    const [theme,setTheme]=useState("cautraloi")
    const traloi=()=>{
        setTheme(theme==="cautraloi"? "dung":"cautraloi")
    }
    const [data, setData] = useState([])
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
        traloi
        
    }
    return (
        <AuthenContext.Provider value={value}>
            {children}
        </AuthenContext.Provider>
    )
}
export { AuthenContext, AuthenProvider }