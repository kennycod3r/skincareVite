import React, { useState, memo } from "react";
import Hero from "../components/Hero/Hero";
import MainText from "../components/MainText/MainText";
import DarkBrownSection from "../components/Darkbrown/DarkBrownSection";
import TinySection from "../components/Tinysection/TinySection";
import LightBrown from "../components/lightBrown/LightBrown";
import SmallSection from "../components/smallsection/SmallSection";
import BlackSection from "../components/blacksection/BlackSection";
import DisplayPage from "../components/displaypage/DisplayPage";

const Home = memo(({handleBagOpen }) => {
  const [openDisplay, setOpenDisplay] = useState(false);

  const handleOpenDisplay = () => {
    setOpenDisplay((prev) => !prev);
  };

  return (
    <div>
      <Hero handleBagOpen={handleBagOpen} handleOpenDisplay={handleOpenDisplay} />
      <main>
        <MainText />
        <DarkBrownSection />
        <div className="overflow-divs">
          <TinySection handleOpenDisplay={handleOpenDisplay} />
          <LightBrown />
          <SmallSection />
        </div>
      </main>
      <BlackSection />
      <DisplayPage handleOpenDisplay={handleOpenDisplay} openDisplay={openDisplay} />
    </div>
  );
});

export default Home;
