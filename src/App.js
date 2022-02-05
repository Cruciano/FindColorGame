import './App.css';
import {useCallback, useEffect, useState} from "react";
import {Color} from "./BLL/Color";
import {getRandomColor} from "./BLL/getRandomColor";
import {getRandomColorArray} from "./BLL/getRandomColorArray";
import {shuffleArray} from "./BLL/Helper/shuffleArray";
import {rgbToHex} from "./BLL/Helper/rgbToHex";
import ColorContainer from "./Components/colorContainer";


function App() {
  const [mainColor, setMainColor] = useState(new Color(0, 0,0));
  const [colors, setColors] = useState([]);
  const [isMistaken, setIsMistaken] = useState(false);
  const [updateGame, setUpdateGame] = useState(false);

  useEffect(() => {
      let color = getRandomColor();
      let colorArray = getRandomColorArray(color, 9);
      shuffleArray(colorArray);
      setMainColor(color);
      setColors(colorArray);
  }, [updateGame]);

  const handleClick = (index) => {
      if(mainColor.isEqual(colors[index])){
          setIsMistaken(false);
          setUpdateGame(!updateGame);
      }
      else {
          setIsMistaken(true);
      }
  }

  return (
    <div className="App">
      <h2>
          Welcome to the game! Choose the color. RGB: {`${mainColor.R}, ${mainColor.G}, ${mainColor.B}`}
      </h2>
        {isMistaken && <div className="mistake">Wrong color!</div>}
      <div className="color-grid">
        {colors.map((color, index) => <ColorContainer
            key={rgbToHex(color)}
            color={rgbToHex(color)}
            index={index}
            onClick={handleClick}
        />)}
      </div>
    </div>
  );
}

export default App;
