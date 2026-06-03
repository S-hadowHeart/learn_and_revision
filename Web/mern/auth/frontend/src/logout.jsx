import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;
export function Logout()
{
    const navigate = useNavigate();
    useEffect(() =>
    {
        const apiCall = async () =>
        {
            try {
                await axios.get(
                    `${API_URL}/auth/logout`,
                    {},
                    {
                        withCredentials:true
                    }
                )

                console.log("Logout Succefullly")
                navigate("/login")

            }
            catch(error) {
                console.log(error)
                navigate("/login")
            }
        }
        apiCall()
    },[navigate])
}