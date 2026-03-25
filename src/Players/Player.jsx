import React, { use, useState } from "react";
import AvailablePlayer from "./AvailablePlayer";
import SelectedPlayer from "./SelectedPlayer";

const Player = ({ playerRes }) => {
  const players = use(playerRes);
  const [available, setAvailable] = useState("available");

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-5">
        {available === "available" ? (
          <h1 className="text-2xl font-semibold">Available Players</h1>
        ) : (
          <h1 className="text-2xl font-semibold">Selected Players (2/3)</h1>
        )}

        <div className="flex flex-row  font-bold">
          <button
            onClick={() => {
              setAvailable("available");
            }}
            className={`py-2 px-5 ${available === "available" ? " bg-[#E7FE29]" : "bg-white"} cursor-pointer border  border-gray-300 rounded-r-none rounded-l-2xl`}
          >
            Available
          </button>
          <button
            onClick={() => {
              setAvailable("selected");
            }}
            className={`py-2 px-5  ${available === "selected" ? " bg-[#E7FE29]" : "bg-white"} cursor-pointer border border-gray-300   rounded-r-2xl rounded-l-none `}
          >
            Selected
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 ">
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
