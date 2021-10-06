import React, { createContext, useState, useEffect } from "react";
import io from 'socket.io-client';

import { withRouter, useHistory } from "react-router-dom";
export const SocketContext = createContext();

const socketUrl = "http://localhost:3231";

function SocketProvider({ children }) {
  const history = useHistory();
  const [socket, setSocket] = useState(null);
  
  const createRoom = () => {
    // Every user that gets a socket also gets a room, so the host is redirected to his room
    // and other users connect to his room via link. Since socket is created in this function, users 
    // that are not the host must use createSocket function and call it after joining 

    const socket = io(socketUrl);
    
    socket.on('connect', () => { 
      console.log("connected");
      setSocket(socket);
      history.push(`/${socket.id}`)
    });
  }

  const createSocket = (roomId) => {
    const socket = io(socketUrl);
    
    socket.on('connect', () => { 
      console.log("connected");
      
      setSocket(socket);
    });
  }

  useEffect(() => {

  }, []);

  return (
    <SocketContext.Provider value={{ socket, createRoom, createSocket }}>
      {children}
    </SocketContext.Provider>
  );
}
export default withRouter(SocketProvider);
