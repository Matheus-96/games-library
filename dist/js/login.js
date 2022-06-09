function retrieveApiKey() {
    let key = localStorage.getItem('apiKey')
    return (!key ? false : key)
}

function fillKeyInput() {
    let key = retrieveApiKey()
    if (key) {
        document.querySelector('#api').value = key
    }
}