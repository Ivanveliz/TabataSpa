export default async function requestWakeLock() {
    if ('wakeLock' in navigator) {
        let wakeLock = null;
        try {
            wakeLock = await navigator.wakeLock.request('screen');
            wakeLock.addEventListener('release', () => {
                console.log('Screen Wake Lock was released');
            });
            console.log('Screen Wake Lock is active');
        } catch (err) {
            console.error(`${err.name}, ${err.message}`);
        }
    } else {
        console.error('Wake Lock API not supported');
    }
};