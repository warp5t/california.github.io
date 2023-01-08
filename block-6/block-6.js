let button = document.querySelectorAll('.anything-else__button-device');
//let placeHolder = document.getElementsByName('searchDevice');

button.forEach(function(element,index){
  element.addEventListener('click',function(){
    console.log('button index:',index);
    let textButton = element.innerText;
    console.log(textButton);
    document.getElementsByName('searchDevice')[0].placeholder = textButton;
  })
})