import {createContext, useContext, useEffect, useState} from 'react'
import { io } from 'socket.io-client';
import { AuthContext } from './authContext';

export const SocketContext = createContext();

export const SocketContextProvider = ({children}) => {
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [socket, setSocket] = useState();
    const {user} = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            const socket = io('https://chat-api-2-k8ab.onrender.com', {
                query:{
                    userId:user._id
                },
                transports : ['websocket']
            })
            setSocket(socket)

            socket.on('newOnlineUser', (users) => {
                setOnlineUsers(users);
            })

        }else{
            if(socket) socket.close();
        }

        return () => {
            if(socket) socket.close();
        }
    }, [user]);

    return (
        <SocketContext.Provider value={{onlineUsers, socket}}>
            {children}
        </SocketContext.Provider>
    )
}