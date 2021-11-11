import React, { useContext } from "react";

import Button from '../components/Button';
import { SocketContext } from "../contexts/SocketContext";

function Home(){  
  const { createRoom } = useContext(SocketContext);

  const handleCreateRoom = () => {
    createRoom();
  }

  return (
    <div className='wrapper home'>
      <Button className="button host-buttons" onClick={handleCreateRoom}>Create a Room</Button>
    </div>
  )
}
export default Home;