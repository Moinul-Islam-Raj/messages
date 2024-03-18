import { useContext, useState } from "react"
import toast from "react-hot-toast";
import {AuthContext} from '../contexs/authContext.jsx'
import axios from "axios";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setUser} = useContext(AuthContext);

    const login = async(username, password) => {
        if(!handleInputError(username, password)) return
        setLoading(true);
        try {
            console.log('prev');
            const {data} = await axios.post('/api/auth/login', {username, password});
            console.log("fter");
            console.log(data);
            if(data.error){
                toast.error(data.error);
                setLoading(false);
                return
            }

            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
            
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
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