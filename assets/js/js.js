const _innerCont = document.getElementById("inneContent");
const _loginModel = document.getElementById('login-model');
const _login = document.getElementById('login');
const _signup = document.getElementById('signup');
const _createAccount = document.getElementById('createAccount');
const _loginBack = document.getElementById('signinFromSingnup');
const _closeSignup = document.getElementById('closesignup');
const _closeSignin = document.getElementById('closesignin');


_login.addEventListener('click', () => {
   
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

});

_closeSignin.addEventListener('click', () => {
    _loginModel.style.display = "none";
    _innerCont.style.display = "block";
});


// Counter
const countdown = () => {
    const upperdate = new Date('Jan 28, 2022 00:00:00').getTime();
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

    if(remain_secoounds > 0){
        d.innerHTML = remain_days;
        h.innerHTML = remain_hours;
        m.innerHTML = remain_minutes;
        s.innerHTML = remain_secoounds;
       
    }
   

}






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
        
        if(imgs[i].className == 'image offer'){
            document.getElementById('counter').display = "block";

            setInterval(countdown, 100);
            
        }
        else{
            document.getElementById('counter').display = "none";
        }

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
        _searchInput.value= _searchInput.value;
        var check = _searchChecker[i].innerHTML.trim();

        if (check.includes(_searchInput.value)) {

        _cards[i].classList.add('visible');
        _cards[i].classList.remove('hidden');
        

        }
        else {
            _cards[i].classList.add('hidden');
            _cards[i].classList.remove('visible');
    

        }
    });
}
// const nnn = document.getElementById('ehsas');

// window.localStorage.setItem('name', 'Ehsas');
// window.localStorage.key(0);
// nnn.innerHTML= window.localStorage.getItem('name');
// alert();

var _headerCart = document.getElementById('headerChart') ;
var _bookReferFont = document.getElementsByClassName('bookReferFont');
var _clicks=0;
_headerCart.innerText = window.localStorage.getItem('numclick');

for(let i=0 ; i<_bookReferFont.length ;i++){

_bookReferFont[i].addEventListener('click' ,()=>{
    _clicks = _clicks + 1;

    window.localStorage.setItem('numclick',_clicks);
_headerCart.innerText = window.localStorage.getItem('numclick');
});
}


// Header Slider

var nArrow = document.getElementById('_n');
var pArrow = document.getElementById('_p');
        nArrow.addEventListener('click', () => {
            plusSlides(1);
        });
        pArrow.addEventListener('click', () => {

            plusSlides(-1);
        })
        var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
 
  
 
  
}
var autoplayInterval = setInterval(function () {
    nArrow.click();
}, 2000);

var _style = document.getElementsByTagName('link')[0];
var _lan = document.getElementById('language');
_lan.addEventListener('click' ,()=> {
styleToggle();
});
function styleToggle(){
    if(_style.getAttribute('href') == "assets/css/styleAR.css"){
        _style.setAttribute('href' , 'assets/css/styleEN.css');
    }
    else{
        _style.setAttribute('href' , 'assets/css/styleAR.css');

    }
}