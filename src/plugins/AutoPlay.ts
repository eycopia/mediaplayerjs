import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    constructor() { }
    run(player: MediaPlayer) {
        console.log('valor del player', player);
        if (!player.media.muted) {
            player.media.muted = true;
        }
        console.log("Doy play");
        player.play();
    }
}


export default AutoPlay