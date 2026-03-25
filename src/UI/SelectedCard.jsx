import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const SelectedCard = ({ player, setSelectedPlayer, coin, setCoin }) => {
  const deletePlayer = (playerDelete) => {
    setSelectedPlayer((previous) => {
      const exist = previous.find(
        (player) => player.playerId === playerDelete.playerId,
      );
      if (exist) {
        return previous.filter(
          (previousPlayer) => previousPlayer.playerId !== playerDelete.playerId,
          setCoin(coin + player.playerPrice),
        );
      }
    });
  };
  return (
    <div className="p-6 border border-gray-300 rounded-3xl">
      <div className="mb-6">
        <img
          className="object-cover w-full max-h-60 rounded-2xl"
          src={player.playerImage}
          alt={`${player.playerName} Photo`}
        />
      </div>
      <div>
        <div className="flex justify-start items-center gap-4 mb-4">
          <FaUser className="w-7 h-7"></FaUser>
          <h2 className="font-semibold text-[20px] ">{player.playerName}</h2>
        </div>
        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-row justify-start items-center gap-3 text-gray-500">
            <FaFlag className="w-5 h-5"></FaFlag>
            {player.playerCountry}
          </div>
          <div className="flex  justify-between items-center">
            <button className="py-2 px-4 bg-gray-100 text-sm rounded-xl">
              {player.playerType}
            </button>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-4 w-full" />
        <div className="flex justify-between items-center mb-3">
          <p className="font-semibold">Rating</p>
          <h2 className="font-bold">{player.playerRating}</h2>
        </div>
        <div className="flex justify-between items-center mb-3 text-base">
          <p className="font-semibold ">{player.playerBattingStyle}</p>
          <p className="text-gray-500">{player.playerBowlingStyle}</p>
        </div>
        <div className="text-base flex justify-between items-center">
          <p className="font-semibold text-base ">
            Price: ${player.playerPrice}
          </p>
          <button
            onClick={() => {
              deletePlayer(player);
            }}
            className="btn btn-accent"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
