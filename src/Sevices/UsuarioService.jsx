
const logar = dados => {
    return fetch('http://192.168.15.14:5000/v1/account/signin', {
        method : 'POST',
        body : JSON.stringify(dados),
        headers: {
            'content-type': 'application/json'
        }
    })

}

export default {
    logar
}