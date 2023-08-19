import { createContext } from "react";
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthenContext = createContext();
const AuthenProvider = ({ children }) => {
    const list = {
        username: "",
        password: ""
    }
    const [forms, setForms] = useState(list)
    const laygtri = (e) => {
        const { name, value } = e.target
        setForms({ ...forms, [name]: value })
    }

    const { username, password } = forms
    const value = {
        username,
        password,
        laygtri
    }
    return (
        <AuthenContext.Provider value={value}>
            {children}
        </AuthenContext.Provider>
    )
}
export { AuthenContext, AuthenProvider }