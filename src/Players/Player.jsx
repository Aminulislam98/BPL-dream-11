import React, { use } from "react";
import AvailablePlayer from "./AvailablePlayer";

const Player = ({ playerRes }) => {
  const players = use(playerRes);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 container mx-auto mt-10">
      {players.map((player) => (
        <AvailablePlayer
          key={player.playerId}
          player={player}
        ></AvailablePlayer>
      ))}
    </div>
  );
};

export default Player;
