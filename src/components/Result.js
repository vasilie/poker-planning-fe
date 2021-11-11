import { useEffect, useState } from 'react';
import ProgressCircle from "../components/ProgressCircle";

function Result({value, average}) {
  const parotSources = {
    good: "https://cultofthepartyparrot.com/parrots/hd/ultrafastparrot.gif",
    sleepy: "https://cultofthepartyparrot.com/parrots/hd/sleepingparrot.gif",
    sad: "https://cultofthepartyparrot.com/parrots/hd/sadparrot.gif",
    angry: "https://cultofthepartyparrot.com/parrots/hd/angryparrot.gif",
  };
  const parrotWords = {
    good: "Party!!!",
    sleepy: "Meh..",
    sad: "I am sad now.",
    angry: "Parrot Angry.",
  };
  
  const [src, setSrc] = useState(parotSources["sad"]);
  const [word, setWord] = useState(parrotWords["good"]);

  const getParrotReaction = () => {
    if (value > 80){
      setSrc(parotSources["good"]);
      setWord(parrotWords["good"]);
    } else if (value > 60) {
      setSrc(parotSources["sleepy"]);
      setWord(parrotWords["sleepy"]);
    } else if (value > 40) {
      setSrc(parotSources["sad"]);
      setWord(parrotWords["sad"]);
    } else if (value > 20) {
      setSrc(parotSources["angry"]);
      setWord(parrotWords["angry"])
    } else {
      setSrc(parotSources["angry"]);
      setWord(parrotWords["angry"])
    }
  }


  useEffect(()=>{
    getParrotReaction();
  },[value])

  return (
    <div className="result">
      <img src={src} className="reaction-image" />
      <ProgressCircle value={value}/>
      <p>{word}</p>
    </div>
  )
}

Result.defaultProps = {
  value: 0,
  average: 0
}

export default Result;