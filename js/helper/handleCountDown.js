import DisplayGeneral from "../components/DisplayGeneral.js";


export default function handleCoutnDown(hash, time, roundsValue) {

    switch (hash) {
        case '#/fortime':
            DisplayGeneral(time)
            
            break;
        case '#/amrap':
            DisplayGeneral(time)
            break;
         case '#/emom':
            DisplayGeneral(time, roundsValue)
            
            break;
         case '#/tabata':
            DisplayGeneral(time)
            break;
        default:
            break;
    }

}
