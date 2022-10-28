window.onload = function() {
    const debug = document.getElementById("debug")
    var queryStr = window.location.search.slice(1);
    debug.innerText += queryStr+"\n"
    var queryArr = queryStr.split('=');
    debug.innerText += queryArr+"\n"

    const query = []

   queryArr.forEach(nube => {
      debug.innerText += nube+"\n"
      query.push(nube);
   })

   debug.innerText += "token : "+query[1]
   debug.innerText += "\n > > > Cooldowning.... Now.... Please wait a moment... < < < ";

   setTimeout(function() {
      fetch(`https://rokupass.ryofuruhashi823.repl.co/token?t=${query[1]}`,{
        method: "GET",
        mode: 'no-cors',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
    })
      .then((res) => {
        console.log(res.status)
        if(res.status === 200){
            console.log('nube')
            const s = localStorage
            s.setItem('login',true);
            
        }
        location.href= "/didactic-octo-telegram/"
      })
   },5000)
}