import MediaPlayer from "../MediaPlayer";

class AutoPause {

    private threshold: number;
    player: MediaPlayer;

    constructor() {
        this.threshold = 0.25
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibiliteChange = this.handleVisibiliteChange.bind(this);
    }

    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,
        })

        observer.observe(this.player.media)
        document.addEventListener("visibilitychange", this.handleVisibiliteChange)
    }

    private handlerIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0]
        const isVisible = entry.intersectionRatio >= this.threshold
        console.log(entry, 'es visible?', isVisible)
        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }

    }

    private handleVisibiliteChange() {
        const isVisible = document.visibilityState === "visible";
        console.log("Estoy en la pestaña", isVisible)
        isVisible ? this.player.play() : this.player.pause();
    }
}

export default AutoPause;