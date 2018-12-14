let allButtons=$("#buttons>svg");
let n = 0;
let size = allButtons.length;
for (let i =0; i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        let index = $(x.currentTarget).index();
        let p = index*(-400);
        $("#images").css({
            transform:"translateX("+p+"px)"
        });
        n =index;
        activeButton(allButtons.eq(n));
    });
}
allButtons.eq(n%size).trigger('click');

let timeId = setTimer();
$(".window").on("mouseenter",function(){
    window.clearInterval(timeId);
});
$(".window").on("mouseleave",function(){
    timeId = setTimer();
});

function activeButton($button){
    $button.addClass('selected').siblings('.selected').removeClass('selected');
}
function setTimer(){
    return setInterval(function(){
             n=n+1;
             allButtons.eq(n%size).trigger('click');
            },2000);
}