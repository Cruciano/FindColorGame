import {getRandomBool} from "./getRandomBool";

export const getRandomSign = () => {
    if(getRandomBool()){
        return 1;
    }
    return -1;
}