import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const SelectedCard = ({
  player,
  setSelectedPlayer,
  coin,
  setCoin,
  setSelectedName,
  selectedPlayer,
}) => {
  const deletePlayer = (playerDelete) => {
    const exist = selectedPlayer.find(
      (player) => player.playerId === playerDelete.playerId,
    );
    if (exist) {
      setSelectedPlayer((previous) => {
        return previous.filter(
          (previousPlayer) => previousPlayer.playerId !== playerDelete.playerId,
        );
      });
      setCoin(coin + player.playerPrice);
      setSelectedName((prevName) => {
        return prevName.filter((pName) => pName !== playerDelete.playerName);
      });
      toast.success(`${player.playerName} is deleted`, {
        position: "top-right",
      });
    }
  };
  return (
    <div className="grid grid-cols-2 border-b border-gray-200 py-3  px-4 hover:-translate-y-0.5 transition-transform duration-200 ">
      <div className="photo&name flex flex-row gap-2 md:gap-3 justify-start items-center mr-2 md:mr-0 items-stretch">
        <div className="w-15 h-15 overflow-hidden rounded-xl">
          <img
            className="w-full h-full object-cover"
            src={player.playerImage}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-base md:text-xl font-semibold">
            {player.playerName}
          </h2>
          <div className="flex flex-col md:flex-row text-xs md:text-sm text-gray-600  md:gap-3">
            <h2>{player.playerType}</h2>
            <h2>{player.playerCountry}</h2>
          </div>
        </div>
      </div>
      <div className="rating&price&delete flex flex-row justify-between items-center ml-4 md:ml-0">
        <div className="flex flex-col justify-center items-center">
          <p className="text-base font-semibold">Rating</p>
          <p className="font-semibold text-green-600">{player.playerRating}</p>
        </div>
        <div className="">
          <h2 className="font-semibold text-base md:text-xl">
            £{player.playerPrice}
          </h2>
        </div>
        <div>
          <button>
            <MdDelete
              onClick={() => {
                deletePlayer(player);
              }}
              className="text-red-600 w-6 h-6 cursor-pointer"
            ></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
/* 
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
    </div> */
