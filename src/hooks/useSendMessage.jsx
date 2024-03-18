import { useContext, useState } from "react"
import toast from "react-hot-toast";
import axios from "axios";
import { ConversationContext } from "../contexs/conversationContext.jsx";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const {selectedConversation, setMessages} = useContext(ConversationContext);

    const send = (text) => {
        if(!handleInputError(text)) return
        setLoading(true);  
        axios.post('/api/messages/send/' + selectedConversation._id, {text}).then(({data}) => {
            if(data.error){
                toast.error(data.error);
                setLoading(false);
                return
            }

            setMessages(data);
        }).catch(error => {
            toast.error(error.response?.data?.error);
        }).finally(() => {
            setLoading(false);
        })
    }

    return [loading, send]
}
export default useSendMessage;

const handleInputError = (text) => {
    try {
        if(!text)
            throw new Error("Fill in text field.");
    } catch (error) {
        toast.error(error.message);
        return false
    }
    return true
}