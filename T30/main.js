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
        allButtons.eq(n).addClass('selected').siblings('.selected').removeClass('selected');
    });
}
allButtons.eq(n%size).trigger('click').addClass('selected').siblings('.selected').removeClass('selected');
let timeId = setInterval(function(){
    n=n+1;
    allButtons.eq(n%size).trigger('click').addClass('selected').siblings('.selected').removeClass('selected');
   },1000);
$(".window").on("mouseenter",function(){
    window.clearInterval(timeId);
});
$(".window").on("mouseleave",function(){
    timeId = setInterval(function(){
        n=n+1;
        allButtons.eq(n%size).trigger('click').addClass('selected').siblings('.selected').removeClass('selected');
       },1000);
});