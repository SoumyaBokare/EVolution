import { useState, useEffect } from "react";
import Background from "./components/background";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

const App = () => {
  let heroData = [
    {text1:'Dive into', text2:'What you love.'},
    {text1:'Indulge', text2:'your passions.'},
    {text1:'Give in to', text2:'your passions.'},
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(() => {
    let intervalId;

    if (!playStatus) {
      intervalId = setInterval(() => {
        setHeroCount((prevCount) => (prevCount === heroData.length - 1 ? 0 : prevCount + 1));
      }, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [heroData.length, playStatus]);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} /> 
      <Navbar />
      <Hero 
        setPlayStatus= {setPlayStatus} 
        heroData = {heroData[heroCount]}
        heroCount= {heroCount}
        setHeroCount= {setHeroCount}
        playStatus= {playStatus}
      />
    </div>
  )
}

export default App