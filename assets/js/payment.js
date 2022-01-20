const _prev = document.getElementById('butPrev');
const _next = document.getElementById('butNext');
const _prog = document.getElementById('progress');
const _cercal = document.querySelectorAll('.circal');
const _progContainer = document.getElementById('progress-container');
const _activeSteps = document.querySelectorAll('.active');
const _form = document.getElementById('paymentContainer');

let index = 1;
var _x =0;





_next.addEventListener('click', () => {

    _form.style.transform = "translateX(-100%)";
    
    index++;
    _x = _x + 33;
   if (index >= _cercal.length) {
        index = _cercal.length;

    }
    _cercal.forEach((item, i) => {
        if (i < index) {
            
            item.classList.add('active');

            
            if(_x <= 99 && _x >= 0){
                document.documentElement.style.setProperty('--width-active',(_x)+'%');

            }
            else if(_x > 99){
                _x = 99;
            }
            else{
                _x = 0;
            }
            
            
        }
    }); 

    

});


_prev.addEventListener('click', () => {
    index--;
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
  

});

