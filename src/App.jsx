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
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Player playerRes={playerRes}></Player>
    </>
  );
}

export default App;
