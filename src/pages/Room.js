import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import { SocketContext } from "../contexts/SocketContext";

import Table from '../components/Table';
import CardSelectionModule from '../components/CardSelectionModule';

function Room(){
  const { socket, createSocket } = useContext(SocketContext);
  const { id } = useParams();

  const [username, setUsername] = useState(null);
  const [usernames, setUsernames] = useState([]);
  const [usernameInput, setUsernameInput] = useState(null);

  useEffect(() => {
    // when going to room directly via url, create socket for yourself and join room with id 
    if (!socket) {
      createSocket(id);
    } else {
      socket.on("usernames",function(data){
        console.log(data);
        setUsernames(data)
      });
    }
    
  }, [socket]);

  const handleUsername = (e) => {
    socket.emit("new user", { username: usernameInput, roomId: id }, function(data){
      console.log(data);
      console.log('emmited');
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(usernameInput);
    handleUsername();
  }

  const handleUsernameInput = (e) => {
    setUsernameInput(e.target.value);
  }
  
  return (
    <div className="room">
      {id}
      ----
      {socket && socket.id}
      {!username && <div className="username">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" placeholder="Type username" onChange={handleUsernameInput}></input>
          <input type="submit"></input>
        </form>
      </div>}
      {username && <Table usernames={usernames}></Table>}
      <CardSelectionModule />
    </div>
  )
}

export default Room;