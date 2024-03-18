import { useContext, useState } from "react"
import toast from "react-hot-toast";
import {AuthContext} from '../contexs/authContext.jsx'
import axios from 'axios'

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setUser} = useContext(AuthContext);
    const signup = async({fullName, username, password, confirmPassword, gender}) => {
        if(!handleInputError({fullName, username, password, confirmPassword, gender})) return
        setLoading(true);
        try {
            
            const {data} = await axios.post('/api/auth/signup', {fullName, username, password, confirmPassword, gender});
            if(data.error){
                toast.error(data.error);
                setLoading(false);
                return
            }

            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
            
        } catch (error) {
            toast.error(error.response.data.error);
        } finally {
            setLoading(false);
        }
    }

    return [loading, signup]
}
export default useSignup;

const handleInputError = ({fullName, username, password, confirmPassword, gender}) => {
    try {
        if(!fullName || !username || !password || !confirmPassword || !gender)
            throw new Error("Fill in all fields.");
        if(password.length < 6) throw new Error("Password too short.");
        if(username.length < 3) throw new Error("Username too short.");
        if(password !== confirmPassword) throw new Error("Passwords didn't match;");
    } catch (error) {
        toast.error(error.message);
        return false
    }
    return true
}