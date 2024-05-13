import Display from "../components/DisplayGeneral.js";


export default function handleCoutnDown(hash, value) {

    switch (hash) {
        case '#/fortime':
            Display(value)
            
            break;
        case '#/amrap':
            Display()
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
