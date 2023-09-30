let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "username",
    "email": "user181@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

submitbtn.addEventListener('click', async (e) => {
    e.preventDefault()
    console.log('clicked')
    let key = '<Put your API Key here>'  //user can use any database api key which can help in validating api key.
    let email = document.getElementById("email").value

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json( )
    let str = `` // Initialize `str` to an empty string before the `for` loop

    for (key of Object.keys(result)) {
        str = str + `<div>${key}: ${result[key]}</div>`
    }
    console.log(str);

    resultcot.innerHTML = str
})
