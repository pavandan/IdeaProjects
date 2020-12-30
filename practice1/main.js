var AREA = document.body;
var CIRCLE =document.querySelector('.circle');

var windowWidth=window.innerWidth;
var windowHeight=window.innerHeight;

function mouseCoordinate(e){
    var horizontalPosition = windowWidth-e.clientX-26;
    var verticalPosition=windowHeight - e.clientY-26;

    CIRCLE.style.left=horizontalPosition+'px';
    CIRCLE.style.top=verticalPosition+'px';
}

function changeCOlorOnTouch(){
    CIRCLE.style.backgroundColor="green";
    CIRCLE.style.borderColor="green";
}

AREA.addEventListener('mousemove',mouseCoordinate,false);
CIRCLE.addEventListener('mouseenter',changeCOlorOnTouch,false);
CIRCLE.addEventListener('mouseleave',function (){CIRCLE.removeAttribute("style");},false);

