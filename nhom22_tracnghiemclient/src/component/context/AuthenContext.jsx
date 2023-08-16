import { createContext } from "react";
import axios from "axios"
import { useState } from "react";
const AuthenContext=createContext();
const AuthenProvider=({children})=>{
    const list={

    }
    return(
        <AuthenContext.Provider value={list}>
            {children}
        </AuthenContext.Provider>
    )
}
export {AuthenContext,AuthenProvider}