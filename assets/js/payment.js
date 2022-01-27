const _prev = document.getElementById('butPrev');
const _next = document.getElementById('butNext');
const _prog = document.getElementById('progress');
const _cercal = document.querySelectorAll('.circal');
const _progContainer = document.getElementById('progress-container');
const _activeSteps = document.querySelectorAll('.active');
// const _form = document.getElementById('paymentContainer');

let index = 1;
var _x =0;
var _y = 0;
var slides = document.getElementsByClassName("showSlide"); 
_prev.classList.add('fade');

_next.addEventListener('click', () => {
    index++;
    _y++;
    _x = _x + 33;
   if (index >= _cercal.length) 
   { index = _cercal.length;}
    _cercal.forEach((item, i) => {
        if (i < index) {
            item.classList.add('active');
           
            
            if(_x <= 99 && _x >= 0)
            {document.documentElement.style.setProperty('--width-active',(_x)+'%');}
            else if(_x > 99){ _x = 99;}
            else{_x = 0;}    
        }
    }); 
    if(index-1 == _y){
        slides[_y-1].classList.add('fade');
        slides[_y].classList.add('show');
        slides[_y].classList.remove('fade');
        if(_y == 0){
            _prev.classList.add('fade');
            _prev.classList.remove('show');
        }
        else if(_y == 3){
            _next.classList.add('fade');
            _next.classList.remove('show');
        }
        else if(_y == 2){
            _next.innerHTML = "تأكيد";
        }
        else{
            _next.classList.add('show');
            _next.classList.remove('fade');
            _prev.classList.add('show');
            _prev.classList.remove('fade');
            _next.innerHTML = "التالي";

        }
        
    }else{
        _y=index-1;
    }
    
  });

_prev.addEventListener('click', () => {
    index--;
    _y--;
    _x = _x - 33;
    if (index <= 0) {
        index = 1;
    }
    _cercal.forEach((item, i) => {
        if (i >= index) {
            item.classList.remove('active');
            if(_x <= 99 && _x >= 0){
                document.documentElement.style.setProperty('--width-active',(_x)+'%');

            } else if(_x > 99){
                _x = 99;
            }
            else{
                _x = 0;
            }
        }
    });
    if(index -1 == _y){
      
        slides[_y+1].classList.add('fade');
        slides[_y].classList.add('show');
        slides[_y].classList.remove('fade');
        if(_y == 0){
            _prev.classList.add('fade');
            _prev.classList.remove('show');
        }
        else if(_y == 2){
            _next.classList.remove('fade');
            _next.innerHTML = "تأكيد";
        }
        else if(_y == 3){
            _next.classList.add('fade');
            _next.classList.remove('show');
        }
       
       
        else{
            _next.innerHTML = "التالي";
            _next.classList.add('show');
            _next.classList.remove('fade');
            _prev.classList.add('show');
            _prev.classList.remove('fade');
            
           


        }
        
    }else{
        _y=index-1;
    }
   
});
var _headerCart = document.getElementById('headerChart') ;
_headerCart.innerText = window.localStorage.getItem('numclick');
// var _style = document.getElementsByTagName('link')[0];
// var _lan = document.getElementById('language');
// _lan.addEventListener('click' ,()=> {
// styleToggle();
// });
// function styleToggle(){
//     if(_style.getAttribute('href') == "../assets/css/styleAR.css"){
//         _style.setAttribute('href' , '../assets/css/styleEN.css');
//     }
//     else{
//         _style.setAttribute('href' , '../assets/css/styleAR.css');

//     }
// }

// var slide_index = 1;  
// displaySlides(slide_index);  

// function nextSlide(n) {  
//     displaySlides(slide_index += n);  
// }  

// function currentSlide(n) {  
//     displaySlides(slide_index = n);  
// }  

// function displaySlides(n) {  
    
//     var slides = document.getElementsByClassName("showSlide");  
//     if (n > slides.length) { slide_index = 1 }  
//     if (n < 1) { slide_index = slides.length }  
//     for (var i = 0; i < slides.length; i++) {  
//         slides[i].style.display = "none";  
//     }  
//     slides[slide_index - 1].style.display = "block";  
// } 
// // function displaySlides(){
// //     var slides = document.getElementsByClassName("showSlide");  
// //     for(i = 0; i < slides.length; i++){
// //         slides[i].style.display = "block"
// //     }
// // }