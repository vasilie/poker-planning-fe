import React, { useContext } from "react";

import Button from '../components/Button';
import { SocketContext } from "../contexts/SocketContext";

function Home(){  
  const { createRoom } = useContext(SocketContext);

  const handleCreateRoom = () => {
    createRoom();
    console.log("WWAJA");
  }

  return (
    <div className='wrapper'>
      <Button onClick={handleCreateRoom}>Create a Room</Button>
    </div>
  )
}
export default Home;