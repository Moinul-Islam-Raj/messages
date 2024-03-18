import { createContext, useState } from "react";

export const ConversationContext = createContext({});

export const ConversationContextProvider = ({children}) => {
    const [messages, setMessages] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState({});
    return (
        <ConversationContext.Provider value={{messages, setMessages, selectedConversation, setSelectedConversation}}>
            {children}
        </ConversationContext.Provider>
    )
}