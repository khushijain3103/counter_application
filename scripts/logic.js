window.addEventListener('load',eventBinder);

function  eventBinder(){
    var likeButton = document.getElementById('likeButton');  //global
    likeButton.addEventListener('click' , plus);
}
let count=0;    //global
function plus(){
    count++;
    var printnum = document.getElementById('number');
    printnum.innerHTML= `<i>${count}</i>`;
}