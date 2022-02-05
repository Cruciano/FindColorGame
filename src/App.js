import './App.css';
import {useEffect, useState} from "react";
import {Color} from "./BLL/Color";
import {getRandomColor} from "./BLL/getRandomColor";
import {getRandomColorArray} from "./BLL/getRandomColorArray";
import {shuffleArray} from "./BLL/Helper/shuffleArray";
import {rgbToHex} from "./BLL/Helper/rgbToHex";
import ColorContainer from "./Components/colorContainer";
import Modal from "./Components/Modal/Modal";
import GameOver from "./Components/GameOver";


function App() {
    const [mainColor, setMainColor] = useState(new Color(0, 0, 0));
    const [colors, setColors] = useState([]);
    const [isMistaken, setIsMistaken] = useState(false);
    const [updateGame, setUpdateGame] = useState(false);

    const [activeModal, setActiveModal] = useState(false)

    useEffect(() => {
        let color = getRandomColor();
        let colorArray = getRandomColorArray(color, 9);
        shuffleArray(colorArray);
        setMainColor(color);
        setColors(colorArray);
        setActiveModal(false);
    }, [updateGame]);


    const handleClick = (index) => {
        if (mainColor.isEqual(colors[index])) {
            setIsMistaken(false);
            setActiveModal(true);
        } else {
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
            <Modal active={activeModal} onClick={() => {
                setActiveModal(false);
                setUpdateGame(!updateGame);
            }}>
                <GameOver />
            </Modal>
        </div>
    );
}

export default App;
