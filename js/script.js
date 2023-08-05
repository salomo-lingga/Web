var viewPort = window.innerWidth;
var sideToggler = document.getElementById("btn-toggler");
if (viewPort <= 425) {
    $("#btn-toggler").click(function(){
        $("#target").slideToggle();
    });
    $(window).on('resize',function(){location.reload();});
} else {
    $(window).on('resize',function(){location.reload();});
}
console.log(viewPort);