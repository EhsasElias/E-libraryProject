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

_closeSignup.addEventListener('click', () => {
    _signup.style.display = "none";
    _innerCont.style.display = "block";
});

_closeSignin.addEventListener('click', () => {
    _loginModel.style.display = "none";
    _innerCont.style.display = "block";
});


// Counter
const countdown = () => {
    const upperdate = new Date('Jan 23, 2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const diffDate = upperdate - currentDate;
    const secound = 1000;
    const minutes = secound * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const remain_days = Math.floor(diffDate / days);
    const remain_hours = Math.floor((diffDate % days) / hours);
    const remain_minutes = Math.floor((diffDate % hours) / minutes);
    const remain_secoounds = Math.floor((diffDate % minutes) / secound);

    var d = document.getElementById('counterChild4But1');
    var h = document.getElementById('counterChild3But1');
    var m = document.getElementById('counterChild2But1');
    var s = document.getElementById('counterChild1But1');

    d.innerHTML = remain_days;
    h.innerHTML = remain_hours;
    m.innerHTML = remain_minutes;
    s.innerHTML = remain_secoounds;

}

setInterval(countdown, 100);


const imgs = document.getElementsByClassName('image');
const imgs2 = document.getElementsByClassName('image2');
const img_model = document.getElementById('imgmodel');
const img_model2 = document.getElementById('imgmode2');

for (let i = 0; i < imgs.length; i++) {

    imgs[i].addEventListener('click', function (e) {
        e.target;
        _bookCon.style.display = "flex";
        _innerCont.style.display = "none";
        img_model.setAttribute('src', e.target.src);

        img_model2.setAttribute('src', imgs2[i].src);


    });
}

const _right = document.getElementById('right');
const _left = document.getElementById('left');
const _bookSlider = document.getElementById('bookSlider');
const _bookCon = document.getElementById('bookSliderContainer');
const _close = document.getElementById('closing');

_right.addEventListener('click', () => {
    _bookSlider.style.transform = "translateX(0px)";
});
_left.addEventListener('click', () => {
    _bookSlider.style.transform = "translateX(500px)";
});
_close.addEventListener('click', () => {
    _bookCon.style.display = "none";
    _innerCont.style.display = "block";
});

const _addToChart = document.getElementsByClassName('bookReferFont');

for (let i = 0; i < _addToChart.length; i++) {

    _addToChart[i].addEventListener('click', function (e) {
        e.target;


    });
}

const _searchChecker = document.getElementsByClassName('searchCheck');
const _searchInput = document.getElementById('search');
const _cards = document.getElementsByClassName('bookCard-v1');
for (let i = 0; i < _searchChecker.length; i++) {

    _searchInput.addEventListener('input', function () {
        _searchInput.value= _searchInput.value.trim().slice(0, 3);
        var check = _searchChecker[i].innerHTML.trim().slice(0,3);

        if (_searchInput.value != check) {

        _cards[i].style.display = "none";
               


        }
        else {
            _cards[i].style.display = "block";

        }
        

    });
}