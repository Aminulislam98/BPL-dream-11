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
  const [coin, setCoin] = useState(50000);
  const [available, setAvailable] = useState("available");
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
      ></Player>
    </>
  );
}

export default App;
