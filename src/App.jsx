import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SponsorItem from "./components/SponsorItem";


import LogoBoomerang from "./assets/logo-boomerang.png";
import LogoBlimp from "./assets/logo-blimp.png";
import LogoDroplet from "./assets/logo-droplet.png";
import LogoOpendoor from "./assets/logo-opendoor.png";


function App() {
  return (
    <div className="App">
      <SponsorItem logo={LogoBoomerang} text="Boomerang" />
      <SponsorItem logo={LogoBlimp} text="Blimp" />
      <SponsorItem logo={LogoDroplet} text="Droplet" />
      <SponsorItem logo={LogoOpendoor} text="Opendoor" />
    </div>
  );
}

export default App;
