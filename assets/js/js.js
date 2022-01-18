const _innerCont = document.getElementById("inneContent");
const _loginModel = document.getElementById('login-model');
const _login = document.getElementById('login');
const _signup = document.getElementById('signup');
const _createAccount = document.getElementById('createAccount');

_login.addEventListener('click' , ()=>{
    _innerCont.style.display = "none";
    _loginModel.style.display="flex";

});
_createAccount.addEventListener('click' , ()=>{
_loginModel.style.display = "none";
_signup.style.display ="block";
});