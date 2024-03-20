import axios from "axios";
import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";
import {ConversationContext} from '../contexs/conversationContext'
const useMessages = () => {
    const {selectedConversation,messages , setMessages} = useContext(ConversationContext);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getMessages = () => {
            if(selectedConversation._id){
                setLoading(true);
                axios.get('/api/messages/' + selectedConversation._id).then(({data}) => {
                    if(data.error){
                        toast.error(data.error);
                        setLoading(false)
                        return
                    }
                    setMessages(data);
                }).catch(error => {
                    toast.error(error.response.data.error);
                }).finally(() => {
                    setLoading(false);
                })
            }
        }
        if(selectedConversation?._id) getMessages();
    }, [selectedConversation?._id])
    return [loading, messages];
}

export default useMessages;