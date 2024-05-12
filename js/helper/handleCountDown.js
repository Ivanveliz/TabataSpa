import Display from '../components/display.js';

export default function handleCoutnDown(hash, value) {

    switch (hash) {
        case '#/fortime':
            Display(value)
            
            break;
        case '#/amrap':
            Display()
        default:
            break;
    }



}
