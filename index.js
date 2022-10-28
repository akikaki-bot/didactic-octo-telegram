const __storage = localStorage;

if(!__storage.getItem("login")){
    location.href = "login.html"
}