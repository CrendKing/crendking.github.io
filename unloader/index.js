window.addEventListener('load', ev => {
    const urlParams = new URLSearchParams(window.location.search)

    const originalLocation = urlParams.get('location')
    const restore = () => {
        document.getElementById('state').textContent = 'Loading ...'
        window.location = originalLocation
    }

    let restoreTime = urlParams.get('restoreTime')
    if (restoreTime !== null) {
        if (restoreTime <= 0) {
            restoreTime = Date.now() - restoreTime
        }

        if (Date.now() >= restoreTime) {
            restore()
        }
    }

    let title
    if (urlParams.has('title')) {
        title = urlParams.get('title')
        document.title = `(U) ${title}`
    } else {
        title = ''
        document.title = ''
    }

    document.getElementById('title').textContent = title
    document.getElementById('location').textContent = originalLocation

    document.querySelector('link[rel = "icon"]').href = urlParams.get('favicon')
    document.body.addEventListener('dblclick', restore)
    document.body.addEventListener('keypress', (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            restore()
        }
    })
});
