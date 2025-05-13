window.addEventListener('load', ev => {
    const urlParams = new URLSearchParams(window.location.search)

    const originalLocation = urlParams.get('location')
    const unload = () => {
        document.querySelector('.state').style.opacity = 1
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

    document.querySelector('.title').textContent = title
    document.querySelector('.location').textContent = originalLocation

    document.querySelector('link[rel = "icon"]').href = urlParams.get('favicon')
    document.body.addEventListener('dblclick', unload)
    document.body.addEventListener('keypress', (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            unload()
        }
    })
});
