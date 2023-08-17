import React, { useState } from "react";
import backOfCard from "./back.png";
import FlipCard from "./hooks"
import "./PlayingCard.css";


/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, toggleFlip] = FlipCard(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggleFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
