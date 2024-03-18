import { useContext, useState } from "react"
import toast from "react-hot-toast";
import {AuthContext} from '../contexs/authContext.jsx'
import axios from "axios";
import { ConversationContext } from "../contexs/conversationContext.jsx";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setUser} = useContext(AuthContext);
    const {setSelectedConversation} = useContext(ConversationContext);

    const logout = async() => {
        setLoading(true);
        try {
            
            const {data} = await axios.post('/api/auth/logout');
            if(data.error){
                throw new Error(data.error);            }

            localStorage.removeItem('user');
            setUser(null);
            setSelectedConversation([]);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return [loading, logout]
}
export default useLogout;