const _innerCont = document.getElementById("inneContent");
const _loginModel = document.getElementById('login-model');
const _login = document.getElementById('login');

_login.addEventListener('click' , ()=>{
    _innerCont.style.display = "none";
    _loginModel.style.display="flex";

});