import React, { use } from "react";

const Player = ({ playerRes }) => {
  const players = use(playerRes);
  console.log(players.length);
  return (
    <div>
      <p>{players.length}</p>
    </div>
  );
};

export default Player;
