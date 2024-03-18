import axios from "axios";
import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";
import { AuthContext } from "../contexs/authContext";

const useConversation = () => {
    const {user} = useContext(AuthContext);
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('/api/users').then(({data}) => {
            if(data.error){
                toast.error(data.error);
                setLoading(false)
                return
            }
            setConversations(data);
        }).catch(error => {
            toast.error(error.response.data.error);
        }).finally(() => {
            setLoading(false);
        })
    }, [user])
    return [loading, conversations];
}

export default useConversation;