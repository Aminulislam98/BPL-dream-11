import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = ({
  player,
  coin,
  setCoin,
  setSelectedPlayer,
  selectedName,
  setSelectedName,
}) => {
  // const [isSelected, setIsSelected] = useState(false);
  const isSelected = selectedName.includes(player.playerName);
  const chosePlayer = () => {
    if (player.playerPrice < coin) {
      setCoin(coin - player.playerPrice);
      setSelectedPlayer((prev) => {
        return [...prev, player];
      });
      setSelectedName((prevName) => {
        return [...prevName, player.playerName];
      });
      toast.success(`${player.playerName} is Selected`, {
        position: "top-right",
        pauseOnHover: false,
      });
      return;
    }

    toast.error(`Not enough Money to buy ${player.playerName}`);
    return;
  };
  return (
    <div className="w-full rounded-[18px] overflow-hidden bg-white border border-gray-100 cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 shadow-sm">
      {/* ── Photo zone ── */}
      <div className="relative h-60 overflow-hidden bg-gray-100 rounded-t-[18px]">
        <img
          className="w-full h-full object-cover"
          src={player.playerImage}
          alt={`${player.playerName} Photo`}
        />

        {/* Name overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3.5 pt-7 bg-linear-to-t from-black/60 to-transparent">
          <p className="text-[17px] font-semibold text-white leading-tight">
            {player.playerName}
          </p>
          <p className="text-[11px] text-white/70 mt-0.75 font-normal">
            {player.playerCountry}
          </p>
        </div>

        {/* Top-right badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.25 items-end">
          <span className="text-[9px] font-semibold tracking-[.06em] uppercase px-2.5 py-1 rounded-full bg-white/90 text-gray-700">
            {player.playerType}
          </span>
          <span className="text-[10px] font-semibold bg-emerald-500 text-white px-2.5 py-0.75 rounded-full">
            {player.playerRating} / 10
          </span>
        </div>
      </div>

      {/* ── Detail rows ── */}
      <div className="px-4 pt-3.5 pb-1">
        <div className="flex justify-between border-b border-gray-100 py-2">
          <span className="text-[11px] text-gray-400 w-[46%] shrink-0">
            Batting style
          </span>
          <span className="text-[11px] text-gray-700 font-medium">
            {player.playerBattingStyle}
          </span>
        </div>
        <div className="flex justify-between border-b border-gray-100 py-2">
          <span className="text-[11px] text-gray-400 w-[46%] shrink-0">
            Bowling style
          </span>
          <span className="text-[11px] text-gray-700 font-medium">
            {player.playerBowlingStyle}
          </span>
        </div>
        <div className="flex justify-between border-b border-gray-100 py-2">
          <span className="text-[11px] text-gray-400 w-[46%] shrink-0">
            Player type
          </span>
          <span className="text-[11px] text-gray-700 font-medium">
            {player.playerType}
          </span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-[11px] text-gray-400 w-[46%] shrink-0">
            Country
          </span>
          <span className="text-[11px] text-gray-700 font-medium">
            {player.playerCountry}
          </span>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="flex items-center justify-between px-4 pb-4 pt-3 border-t border-gray-100 mt-1">
        <div>
          <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wide">
            Auction price
          </p>
          <p className="text-[20px] font-semibold text-gray-900">
            £{player.playerPrice.toLocaleString()}
          </p>
        </div>
        <button
          onClick={chosePlayer}
          disabled={isSelected}
          className={`text-xs font-semibold px-4 py-2 rounded-[10px] border transition-all duration-150
        ${
          isSelected
            ? "border-green-300 bg-green-100 text-green-600 cursor-not-allowed"
            : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:border-gray-300 cursor-pointer"
        }`}
        >
          {isSelected ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default Card;
