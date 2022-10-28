const passwordvalue = document.getElementById('pass')
const label = document.getElementById('label')
const __post = "https://rokupass.ryofuruhashi823.repl.co/login"
const __storage = localStorage
console.log(location.href)

const login = () => {

    label.innerText = "処理中..."

    if(!passwordvalue.value) {
      return label.innerText = "ログインパスワード | 入力してください。この項目は必須です。"
    }

    const save_json = {
        "pass" : passwordvalue.value
    }

    console.log(JSON.stringify(save_json))
    
    console.log(save_json)

    

    fetch(__post,{
        method: 'POST',
        mode: 'cors',
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Access-Control-Allow-Origin': 'https://rokupass.ryofuruhashi823.repl.co',
            'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(save_json)
    })
    .then(response => {
        if(response.status === 200){
            __storage.setItem('login',true)
        }
        if(response.status === 403 || response.status === 404 || response.status === 500){
            label.innerText = "ログインパスワード | 🚫ログインに失敗しました。"
        }
    })
    .catch(response =>{
        label.innerText = "ログインパスワード | 🚫ログインに失敗しました。"
    });
}