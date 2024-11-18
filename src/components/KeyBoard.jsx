import React from "react";
import bassDrum from "../assets/sounds/BassDrum[BD]/BD06.wav";
import bassDrum2 from "../assets/sounds/BassDrum[BD]/E808_BD[short]-02.wav";
const KeyBoard = () => {
  const bd = new Audio(bassDrum);
  const bd2 = new Audio(bassDrum2);
  console.log(bd);
  const play = () => {
    bd.play();
  };
  const play2 = () => {
    bd2.play();
  };
  return (
    <div>
      <button onClick={play}>play</button>
      <button onClick={play2}>play2</button>
    </div>
  );
};

export default KeyBoard;
