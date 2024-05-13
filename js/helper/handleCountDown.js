import DisplayGeneral from "../components/DisplayGeneral";


export default function handleCoutnDown(hash, time) {

    switch (hash) {
        case '#/fortime':
            DisplayGeneral(time)
            
            break;
        case '#/amrap':
            DisplayGeneral(time)
            break;
         case '#/emom':
            console.log('emom')
            break;
         case '#/tabata':
            console.log('tabata')
            break;
        default:
            break;
    }

}
