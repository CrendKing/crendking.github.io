window.addEventListener('load', ev => {
    const urlParams = new URLSearchParams(window.location.search)

    const originalLocation = urlParams.get('location')
    const unload = () => {
        document.getElementById('state').textContent = 'Loading ...'
        window.location = originalLocation
    }

    if (location.hash === '#once') {
        location.hash = 'unload'
    } else if (location.hash === '#unload') {
        unload()
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
    document.body.addEventListener('dblclick', unload)
    document.body.addEventListener('keypress', (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            unload()
        }
    })
});
