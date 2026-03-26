import { useState } from "react";
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
  const [coin, setCoin] = useState(180000);
  const [available, setAvailable] = useState("available");
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [selectedName, setSelectedName] = useState([]);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
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
    </>
  );
}

export default App;
