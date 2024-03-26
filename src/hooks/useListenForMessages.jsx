import { useContext, useEffect } from "react"
import { SocketContext } from "../contexs/socketContext"
import { ConversationContext } from "../contexs/conversationContext";

export const useListenForMessages = () => {
    const {socket} = useContext(SocketContext);
    const {setMessages, selectedConversation} = useContext(ConversationContext);
    useEffect(() => {
        if(socket){
            socket.on('newMessage', ({message, senderName}) => {
                if (selectedConversation?._id?.toString() === message.senderId.toString()) {
                    setMessages(prev => [...prev, message]);
                    if(document.visibilityState === 'hidden'){
                        new Notification(`New message from ${senderName}`, {
                            body:message.text
                        })
                    }
                }
                else{
                    new Notification(`New message from ${senderName}`, {
                        body:message.text
                    })
                }
            });
        }

        return () => {
            if(socket)
                socket.off('newMessage');
        }
    }, [socket, selectedConversation?._id]);
}