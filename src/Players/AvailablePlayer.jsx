import React from "react";

import Card from "../UI/Card";

const AvailablePlayer = ({ player, coin, setCoin, setSelectedPlayer }) => {
  return (
    <Card
      player={player}
      coin={coin}
      setCoin={setCoin}
      setSelectedPlayer={setSelectedPlayer}
    ></Card>
  );
};

export default AvailablePlayer;
