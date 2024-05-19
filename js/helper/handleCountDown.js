import Title from "../components/Title.js";
import timerForAmrap from "./timerForAmrap.js";
import timerForEmom from "./timerForEmom.js";
import timerForTabata from "./timerForTabata.js";
import timerForTime from "./timerForTime.js";



export default function handleCoutnDown(hash, totalSec, roundsValue, work, rest) {

    switch (hash) {
        case '#/fortime':
            Title('FOR TIME')
            timerForTime(totalSec)
            
            break;
        case '#/amrap':
            Title('AMRAP')
        timerForAmrap(totalSec)
            break;
        case '#/emom':
            Title('EMOM')
            timerForEmom(totalSec,roundsValue)
            
            break;
        case '#/tabata':
            Title('TABATA')
            timerForTabata(roundsValue,work,rest, totalSec)
            break;
        default:
            break;
    }

}
