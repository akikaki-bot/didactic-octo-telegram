const passwordvalue = document.getElementById('pass')
const label = document.getElementById('label')
const __post = "https://rokupass.ryofuruhashi823.repl.co/login"
const __storage = localStorage


const login = () => {

    if(!passwordvalue.value) {
      return label.innerText = "ログインパスワード | 入力してください。この項目は必須です。"
    }

    const save_json = {
        pass : passwordvalue.value
    }
    
    fetch(__post,{
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
         },
         redirect: 'follow', // manual, *follow, error
         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         body: JSON.stringify(save_json)
    }).then(response => {
        if(response.status === 200){
            __storage.setItem('login',true)
        }
        if(response.status === 403 || response.status === 404){
            label.innerText = "ログインパスワード | 🚫ログインに失敗しました。"
        }
    })
}