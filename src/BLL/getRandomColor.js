import {getRandomInt} from "./getRandomInt";
import {Color} from "./Color";

export const getRandomColor = () => {
    return new Color(getRandomInt(255), getRandomInt(255), getRandomInt(255));
}
