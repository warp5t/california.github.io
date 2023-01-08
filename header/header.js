console.log('check');
let infoTitle = document.querySelector('.header__logo').offsetWidth;
console.log(infoTitle);

let heightImage = document.querySelector('.new-phones__image').offsetHeight;
let heightBlockPhone = document.querySelector('.new-phones__body');

let lines_1 = document.querySelector('.lines__line:nth-child(1)');
let lines_2 = document.querySelector('.lines__line:nth-child(2)');
let lines_3 = document.querySelector('.lines__line:nth-child(3)');

let popMenu = document.querySelector('.new-phones__lines-wrap');


console.log(heightImage, heightBlockPhone.offsetHeight);
heightBlockPhone.style.height = heightImage + 'px';

let menuBurger = document.querySelector('.header__menu-burger');
let elem_1 = document.querySelector('.el_1');
let elem_2 = document.querySelector('.el_2');
let elem_2_instr = document.querySelector('.el_2-insrt');
let elem_3 = document.querySelector('.el_3');

let linesWrap = document.querySelector('.new-phones__lines-wrap');

let line = document.querySelector('lines__line');

let infoBlock_1 = document.querySelector('.info__wrap');

let popContainer = document.querySelector('.new-phones__pop-container');



menuBurger.onclick = function(){
    activityBurger();
} 
function activityBurger(){
    console.log('check');

    shadowing();

    menuBurger.classList.toggle('header__menu-burger_flip');

    elem_1.classList.toggle('el_1-1');
    elem_3.classList.toggle('el_3-1');
    elem_2.classList.toggle('el_2-cross');
    elem_2_instr.classList.toggle('el_2-ins-cross');

    lines_1.classList.toggle('lines__line_pop');
    lines_2.classList.toggle('lines__line_pop');
    lines_3.classList.toggle('lines__line_pop');

    popMenu.classList.toggle('pop-menu');
    linesWrap.classList.toggle('shift-menu');
    linesWrap.classList.toggle('able-z-index');

    lines_1.classList.toggle('lines__line_disapear');
    lines_2.classList.toggle('lines__line_disapear');
    lines_3.classList.toggle('lines__line_disapear');

    infoBlock_1.classList.toggle('info_wrap-disapear');

   // popContainer.classList.toggle('activate-container');
}



// ----------------------------- shadowing ----------------------------------------


var shadowCourtain = document.querySelector('.shadow-courtain');
let shadowSwitcher = true;

function shadowing(){
    if(shadowSwitcher == true){
        shadowCourtain.style.height = '150%';
        shadowSwitcher = false;
    }
    else if(shadowSwitcher == false){
        shadowCourtain.style.height = '0%';
        shadowSwitcher = true;
    }
}

shadowCourtain.onclick = function(){
    activityBurger();
    console.log('clicked');
}