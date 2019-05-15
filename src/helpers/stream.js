export const stopStream = stream => {
    try {
        if (!stream) return console.log('[stream already stopped]')

        stream.getTracks().forEach(track => {
            track.stop()
        })
    } catch (err) {
        console.error('[error in stopStream]', err)
    }
}
