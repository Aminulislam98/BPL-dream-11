import { useState } from "react";
import { Suspense } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Player from "./Players/Player";

const playerDetails = async () => {
  const playerResponse = await fetch("/data.json");
  return playerResponse.json();
};

const playerRes = playerDetails();
function App() {
  const [coin, setCoin] = useState(300000);
  const [available, setAvailable] = useState("available");
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [selectedName, setSelectedName] = useState([]);

  return (
    <>
      <Navbar coin={coin} setCoin={setCoin}></Navbar>
      <Banner coin={coin} setCoin={setCoin}></Banner>

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-10">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        }
      >
        <Player
          playerRes={playerRes}
          coin={coin}
          setCoin={setCoin}
          available={available}
          setAvailable={setAvailable}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
          selectedName={selectedName}
          setSelectedName={setSelectedName}
        ></Player>
      </Suspense>
    </>
  );
}

export default App;
