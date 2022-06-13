const baseURL = 'https://api.rawg.io/api/'

function getApiKey() {
    let key = localStorage.getItem('apiKey')
    return (!key ? false : key)
}

function setApiKey(key = '') {
    localStorage.setItem('apiKey', key)
}

function fillKeyInput() {
    let key = getApiKey()
    if (key) {

        let apiInput = document.querySelector('#api')
        apiInput.outerHTML += `<svg class='trash-icon' id='remove-key' fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"/></svg>`
        apiInput = document.querySelector('#api')
        apiInput.value = key

        //Adiciona listener para onClick
        document.querySelector('#remove-key').addEventListener('click', removeKeyBtn)

    }
}

function removeKeyBtn() {
    let key = document.querySelector('#api')
    formatInput(key)
    ket.value = ''
    setApiKey('')
}

async function validateApiKey(key) {
    let url = `${baseURL}genres?key=${key.value}`
    try {
        let response = await fetch(url, { method: 'GET', mode: 'cors' })
        json = await response.json()
        formatInput(true, key)
        setApiKey(key.value)
        fillKeyInput()
    } catch (e) {
        formatInput(false, key)
    }
}

function login() {
    let key = document.querySelector('#api')
    validateApiKey(key)

    // fetch(`https://api.rawg.io/api/games/3498?key=YOUR_RAWG_API_KEY`)
    //     .then(res => res.json)
    //     .then(res => console.log(res))
}

function formatInput(isValid, key) {
    if (isValid) {
        key.classList.add('input-text-success')
        key.classList.remove('input-text-error')
        key.parentNode.parentNode.querySelector('.error-message').classList.add('invisible')
    } else {
        key.classList.add('input-text-error')
        key.classList.remove('input-text')
        key.classList.remove('invisible')
        key.parentNode.parentNode.querySelector('.error-message').classList.remove('invisible')
    }
}