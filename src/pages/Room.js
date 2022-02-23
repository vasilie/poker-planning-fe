import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import { SocketContext } from "../contexts/SocketContext";
import { GAME_STATE_REVEALING_CARDS, GAME_STATE_ALL_CARDS_CHOOSEN } from "../contexts/constants";

import Table from '../components/Table';
import CardSelectionModule from '../components/CardSelectionModule';
import Button from '../components/Button';
import CardValuesAgreement from "../components/CardValuesAgreement";
import Card from "../components/Card";
import Result from "../components/Result";

import { cardStyles } from "../components/cardStyles";

function Room(){
  const { socket, createSocket, isHost, revealCards, startNewRound, gameState, averageScore, valuesAgreement, maxPercentage, counting, setCardStyle, cardStyle } = useContext(SocketContext);
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
    socket.emit("new user", { username: usernameInput, roomId: id, cardValue: null, cardStyle }, function (data) {
      console.log(data);
      console.log('emmited');
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usernameInput) {
      alert("Username not chosen")
      return;
    }
    if (!cardStyle) {
      alert("Card style not chosen")
      return;
    }
    setUsername(usernameInput);
    handleUsername();
  }

  const handleUsernameInput = (e) => {
    setUsernameInput(e.target.value);
  }

  const handleReveal = () => {
    if (canReveal){
      revealCards();
    }
  }

  const handleNewRound = () => {
    if (isReveal){
      startNewRound();
    }
  }

  const isReveal = gameState === GAME_STATE_REVEALING_CARDS;
  const canReveal = gameState === GAME_STATE_ALL_CARDS_CHOOSEN;
  
  if (!username){
    return (
    <div className="room">
      <div className="username-selector">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input type="text" placeholder="Type username" className="text-input" onChange={handleUsernameInput}></input>
          </div>
          <label>Select Card Style</label>
          <div className="card-style-selector">
              {cardStyles.map((card, i) => <Card key={`${i}card`} cardStyleSelected={card === cardStyle} cardValue={true} onClick={() => setCardStyle(card)} cardStyles={card} />)}
          </div>  
          <input className="button host-buttons card-style-button" type="submit"></input>
        </form>
      </div>
    </div>
    )
  }

  return (
    <div className="room">
      <Table isReveal={isReveal} usernames={usernames}></Table>
      {isHost && <Button title="Reveal cards after all are choosen" className={`button host-buttons reveal-cards ${canReveal ? "" : "inactive" }`} onClick={handleReveal}> Reveal Cards</Button>}
      {isHost && <Button className={`button host-buttons new-round ${isReveal ? "" : "inactive"}`} onClick={handleNewRound}>New round</Button>}
      <CardSelectionModule />
      {isReveal && !counting && <CardValuesAgreement maxPercentage={maxPercentage}/>}
      {isReveal && !counting && <Result value={maxPercentage} average={averageScore}/>}
    </div>
  )
}

export default Room;