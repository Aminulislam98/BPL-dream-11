import React from "react";

import Card from "../UI/Card";

const AvailablePlayer = ({
  player,
  coin,
  setCoin,
  setSelectedPlayer,
  selectedName,
  setSelectedName,
}) => {
  return (
    <Card
      player={player}
      coin={coin}
      setCoin={setCoin}
      setSelectedPlayer={setSelectedPlayer}
      selectedName={selectedName}
      setSelectedName={setSelectedName}
    ></Card>
  );
};

export default AvailablePlayer;
