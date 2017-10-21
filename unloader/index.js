window.addEventListener('load', ev => {
    const urlParams = new URLSearchParams(window.location.search);

    document.title = `(U) ${urlParams.get('title')}`;
    document.querySelector('link[rel *= "icon"]').href = urlParams.get('favicon');
    document.body.addEventListener('dblclick', () => {
        location = urlParams.get('location');
    });
    document.getElementById('location').value = urlParams.get('location');
});

