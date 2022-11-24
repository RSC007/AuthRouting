import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { isUserLogin } from '../../Redux/authSlice';

const PrivateRoute = ({ Compenent, ...rest}) => {
    const navigate = useNavigate()
    const isLogin = useSelector(isUserLogin)
    console.log("isLogin", isLogin);
    useEffect(() => {
        if(!isLogin){
            localStorage.removeItem("username")
            navigate("/signin")
        }
    }, [isLogin, navigate])

    if(!localStorage.getItem("username") && !isLogin){
        navigate("/signin")
    }else{
        return <Compenent/>
    }

}

export default PrivateRoute