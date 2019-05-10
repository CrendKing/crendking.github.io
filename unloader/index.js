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

    document.querySelector('link[rel *= "icon"]').href = urlParams.get('favicon')
    document.body.addEventListener('dblclick', () => {
        location = urlParams.get('location')
    })
    document.body.addEventListener('keypress', (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            location = urlParams.get('location')
        }
    })

    document.getElementById('title').value = title
    document.getElementById('location').value = urlParams.get('location')
});

