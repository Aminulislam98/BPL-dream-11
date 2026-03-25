import React from "react";

import Card from "../UI/Card";

const AvailablePlayer = ({ player, coin, setCoin }) => {
  return <Card player={player} coin={coin} setCoin={setCoin}></Card>;
};

export default AvailablePlayer;
