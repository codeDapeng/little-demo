$(document).ready(function () {
    keyPress();
    //godie();
});

//地图
function map(){

}
//food
function food(){

}
//move
function move(){

}
//键盘控制方向
function keyPress() {
    var t=0;
    var l=0;
    $(window).keydown(function (event) {
        var event = event || window.event;
        if (event.keyCode == 38) {
            t-=10;
            document.getElementById('body').style.top=t+'px';
        }
        if (event.keyCode == 40) {
            t+=10;
            document.getElementById('body').style.top=t+'px';
        }
        if (event.keyCode == 37) {
            l-=10;
            document.getElementById('body').style.left=l+'px';
        }
        if (event.keyCode == 39) {
            l+=10;
            document.getElementById('body').style.left=l+'px';
        }

    })


}
//撞墙死
function godie(){
    var stage=document.getElementById('stage');
    var body=document.getElementById('body');
    if(body.offsetLeft<=0||body.offsetTop<=0){
        body.style.left=0;
        body.style.top=0;
    }
}
