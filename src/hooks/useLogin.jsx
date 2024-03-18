import { useContext, useState } from "react"
import toast from "react-hot-toast";
import {AuthContext} from '../contexs/authContext.jsx'
import axios from "axios";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setUser} = useContext(AuthContext);

    const login = (username, password) => {
        if(!handleInputError(username, password)) return
        setLoading(true);  
        axios.post('/api/auth/login', {username, password}).then(({data}) => {
            if(data.error){
                toast.error(data.error);
                setLoading(false);
                return
            }

            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
        }).catch(error => {
            toast.error(error.response?.data?.error);
        }).finally(() => {
            setLoading(false);
        })
    }

    return [loading, login]
}
export default useLogin;

const handleInputError = (username, password) => {
    try {
        if(!username || !password)
            throw new Error("Fill in all fields.");
        if(password.length < 6) throw new Error("Password too short.");
        if(username.length < 3) throw new Error("Username too short.");
    } catch (error) {
        toast.error(error.message);
        return false
    }
    return true
}