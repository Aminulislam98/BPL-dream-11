import React, { use } from "react";
import AvailablePlayer from "./AvailablePlayer";

const Player = ({ playerRes }) => {
  const players = use(playerRes);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold">Available Players</h1>
        <div className="flex flex-row  font-bold">
          <button className="py-2 px-7 bg-lime-400 border-2  border-gray-300 rounded-l-2xl hover:bg-gray-300 ">
            Available
          </button>
          <button className="py-2 px-7 border-gray-300 border-2  rounded-r-2xl hover:bg-gray-300">
            Selected
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
        {players.map((player) => (
          <AvailablePlayer
            key={player.playerId}
            player={player}
          ></AvailablePlayer>
        ))}
      </div>
    </div>
  );
};

export default Player;
