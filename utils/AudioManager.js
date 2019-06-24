class AudioManager {
    constructor (props) {
        /** @type {Array} The playlist queue */
        this.queue = [];
    }

    _play () {

    }

    _stop () {

    }

    /**
     * Add a song to the queue.
     *
     * @param {string} audio
     * @return {boolean}
     */
    addAudio (audio) {
        this.queue.push(audio);

        return true;
    }

    /**
     * Remove a song from the queue.
     *
     * @param {number} index
     * @return {number}
     */
    removeAudio (index) {
        return 0;
    }
}