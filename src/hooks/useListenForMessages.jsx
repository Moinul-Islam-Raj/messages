import { useContext, useEffect } from "react"
import { SocketContext } from "../contexs/socketContext"
import { ConversationContext } from "../contexs/conversationContext";

export const useListenForMessages = () => {
    const {socket} = useContext(SocketContext);
    const {setMessages} = useContext(ConversationContext);
    useEffect(() => {
        if(socket){
            socket.on('newMessage', (message) => {
                setMessages(prev => [...prev, message]);
            });
        }

        return () => {
            if(socket)
                socket.off('newMessage');
        }
    }, [socket]);
}