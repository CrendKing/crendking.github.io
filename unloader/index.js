window.addEventListener('load', ev => {
    const urlParams = new URLSearchParams(window.location.search)

    let title
    if (urlParams.has('title')) {
        title = urlParams.get('title')
        document.title = `(U) ${title}`
    } else {
        title = ''
        document.title = ''
    }

    document.getElementById('title').textContent = title
    document.getElementById('location').textContent = urlParams.get('location')

    document.querySelector('link[rel = "icon"]').href = urlParams.get('favicon')
    document.body.addEventListener('dblclick', () => {
        window.location = urlParams.get('location')
    })
    document.body.addEventListener('keypress', (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            window.location = urlParams.get('location')
        }
    })
});
