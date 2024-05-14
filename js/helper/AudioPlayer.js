
export default class AudioPlayer {
    constructor(src) {
        this.audio = new Audio(src)
    }
    play() {
        this.audio.play()
    }
}