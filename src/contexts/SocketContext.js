import React, { createContext, useState, useEffect } from "react";
import io from 'socket.io-client';

import useInterval from "../hooks/useInterval";

import { withRouter, useHistory } from "react-router-dom";
import { 
  GAME_STATE_CHOOSING_CARDS,
  GAME_STATE_REVEALING_CARDS,
  GAME_STATE_ALL_CARDS_CHOOSEN,
  GAME_STATE_NEW_ROUND,
  NEW_CARD_VALUE

} from "./constants";

export const SocketContext = createContext();

const socketUrl = "http://localhost:3231";

function SocketProvider({ children }) {
  const history = useHistory();
  const [socket, setSocket] = useState(null);

  const [isHost, setIsHost] = useState(false);
  const [averageScore, setAverageScore] = useState(null);
  const [valuesAgreement, setValuesAgreement] = useState([]);
  const [maxPercentage, setMaxPercentage] = useState(null);
  const [intervalId, setIntervalId] = useState(0);
  
  const [cardValue, setCardValue] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardStyle, setCardStyle] = useState(false);

  const [gameState, setGameState] = useState(GAME_STATE_CHOOSING_CARDS);
  
  const [delay, setDelay] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const [counting, setCounting] = useState(false);

  useInterval(() => {
    setCountdown(countdown - 1);
    if (countdown <= 1){
      setDelay(null);
      setCounting(false);
    }
  }, delay);


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
    setIsHost(true);
  }

  const createSocket = (roomId) => {
    const socket = io(socketUrl);
    
    socket.on('connect', () => { 
      console.log("connected");
      
      setSocket(socket);
    });
  }

  const changeCardValue = (value) => {
    setCardValue(value);
    socket.emit(NEW_CARD_VALUE, { cardValue: value });
  }
  
  const revealCards = () => {
    socket.emit(GAME_STATE_REVEALING_CARDS, true );
  }

  const startNewRound = () => {
    socket.emit(GAME_STATE_NEW_ROUND, true );
  }

  const startCountdown = () => {
    setCounting(true);
    setCountdown(5);
    setDelay(500);
  }


  useEffect(() => {
    if (!socket) return null;

    socket.on(GAME_STATE_REVEALING_CARDS, (data) => { 
      startCountdown();
      console.log(GAME_STATE_REVEALING_CARDS);
      console.log(data);
      setAverageScore(data.average);
      console.log(data.cardValuesAgreement);
      setValuesAgreement(data.cardValuesAgreement);
      setMaxPercentage(data.maxPercentage)
      setGameState(GAME_STATE_REVEALING_CARDS);
    });

    socket.on(GAME_STATE_CHOOSING_CARDS, () => { 
      console.log(GAME_STATE_CHOOSING_CARDS);
      setGameState(GAME_STATE_CHOOSING_CARDS);
    });

    socket.on(GAME_STATE_ALL_CARDS_CHOOSEN, () => { 
      console.log(GAME_STATE_ALL_CARDS_CHOOSEN);
      setGameState(GAME_STATE_ALL_CARDS_CHOOSEN);
    });

    socket.on(GAME_STATE_NEW_ROUND, () => { 
      setGameState(GAME_STATE_CHOOSING_CARDS);
      setCardValue(null);
      setSelectedCard(null);
    });
  }, [socket]);

  const props = {
    socket,
    createRoom,
    createSocket,
    isHost,
    setIsHost,
    changeCardValue,
    cardValue,
    revealCards,
    gameState,
    startNewRound,
    selectedCard,
    setSelectedCard,
    averageScore,
    valuesAgreement,
    maxPercentage,
    countdown,
    counting,
    cardStyle,
    setCardStyle
  }

  return (
    <SocketContext.Provider value={{ ...props }}>
      {children}
    </SocketContext.Provider>
  );
}
export default withRouter(SocketProvider);
