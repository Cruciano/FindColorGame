import {Color} from "./Color";
import {getRandomInt} from "./getRandomInt";
import {getRandomSign} from "./getRandomSign";

const limitNumber = (number) => {
    if(number > 255){
        return 255;
    }
    if(number < 0){
        return 0;
    }
    return number;
}

export const getRandomColorArray = (mainColor, size, range = 30) => {
    let colorArray = [mainColor];

    for (let i = 0; i < size-1; i++) {
        colorArray.push(new Color(
            limitNumber(mainColor.R + getRandomInt(range) * getRandomSign()),
            limitNumber(mainColor.G + getRandomInt(range) * getRandomSign()),
            limitNumber(mainColor.B + getRandomInt(range) * getRandomSign())
        ));
    }

    return colorArray;
}