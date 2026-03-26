import React, { use } from "react";
import AvailablePlayer from "./AvailablePlayer";
import SelectedCard from "../UI/SelectedCard";

const Player = ({
  playerRes,
  coin,
  setCoin,
  available,
  setAvailable,
  selectedPlayer,
  setSelectedPlayer,
  selectedName,
  setSelectedName,
}) => {
  const players = use(playerRes);
  const totalPlayer = selectedPlayer.length > 0 && `(${selectedPlayer.length})`;

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-5">
        {available === "available" ? (
          <h1 className="text-2xl font-semibold">Available Players</h1>
        ) : (
          <h1 className="text-2xl font-semibold">
            Selected Players ({selectedPlayer.length}/6)
          </h1>
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
            Selected{totalPlayer}
          </button>
        </div>
      </div>

      {available === "available" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-x-1.5 gap-y-2 md:gap-6 mb-10">
          {players.map((player) => (
            <AvailablePlayer
              key={player.playerId}
              player={player}
              coin={coin}
              setCoin={setCoin}
              setSelectedPlayer={setSelectedPlayer}
              selectedName={selectedName}
              setSelectedName={setSelectedName}
            ></AvailablePlayer>
          ))}
        </div>
      ) : (
        <div className="mb-10">
          {selectedPlayer.length === 0 ? (
            <div className="flex justify-center items-center flex-col border-2 py-7 mb-10 rounded-2xl border-red-300 bg-red-100 bg-red-0">
              <h1 className="text-2xl font-semibold mb-1 text-red-700">
                No Player Selected yet!
              </h1>
              <h1 className="text-base text-red-800 font-semibold">
                Go to available section to select player
              </h1>
            </div>
          ) : (
            <div className="flex flex-col  border rounded-t-3xl border-gray-300 border-b-0 ">
              {selectedPlayer.map((player) => (
                <SelectedCard
                  player={player}
                  selectedPlayer={selectedPlayer}
                  setSelectedPlayer={setSelectedPlayer}
                  coin={coin}
                  setCoin={setCoin}
                  setSelectedName={setSelectedName}
                ></SelectedCard>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Player;
