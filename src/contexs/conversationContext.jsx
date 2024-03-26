import { createContext, useState } from "react";

export const ConversationContext = createContext({});

export const ConversationContextProvider = ({children}) => {
    const [messages, setMessages] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState({});
    const [conversations, setConversations] = useState([]);
    return (
        <ConversationContext.Provider value={{messages, setMessages, selectedConversation, setSelectedConversation, conversations, setConversations}}>
            {children}
        </ConversationContext.Provider>
    )
}