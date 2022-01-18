const _innerCont = document.getElementById("inneContent");
const _loginModel = document.getElementById('login-model');
const _login = document.getElementById('login');
const _signup = document.getElementById('signup');
const _createAccount = document.getElementById('createAccount');
const _loginBack = document.getElementById('signinFromSingnup');
const _closeSignup = document.getElementById('closesignup');
const _closeSignin = document.getElementById('closesignin');


_login.addEventListener('click', () => {
    _innerCont.style.display = "none";
    _loginModel.style.display = "flex";

});
_createAccount.addEventListener('click', () => {
    _loginModel.style.display = "none";
    _signup.style.display = "block";
});
_loginBack.addEventListener('click', () => {
    _signup.style.display = "none";
    _loginModel.style.display = "flex";

});

_closeSignup.addEventListener('click' , () =>{
    _signup.style.display = "none";
    _innerCont.style.display = "block";
});

_closeSignin.addEventListener('click' ,() =>{
    _loginModel.style.display = "none";
    _innerCont.style.display = "block";
});


// Counter
const countdown=()=>{
    const upperdate = new Date('Jan 23, 2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const diffDate = upperdate - currentDate;
    const secound = 1000;
    const minutes = secound * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    
    const remain_days = Math.floor(diffDate/days);
    const remain_hours = Math.floor((diffDate%days) / hours);
    const remain_minutes = Math.floor((diffDate%hours)/minutes);
    const remain_secoounds = Math.floor((diffDate%minutes)/secound);
    
    var d =document.getElementById('counterChild4But1');
    var h = document.getElementById('counterChild3But1');
    var m = document.getElementById('counterChild2But1');
    var s = document.getElementById('counterChild1But1');
    
    d.innerHTML = remain_days;
    h.innerHTML = remain_hours;
    m.innerHTML = remain_minutes;
    s.innerHTML = remain_secoounds;
    
    }
    
    setInterval(countdown,100);
    