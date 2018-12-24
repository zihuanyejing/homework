$(".images>img:nth-child(1)").addClass('current');
$(".images>img:nth-child(2)").addClass('enter');
$(".images>img:nth-child(3)").addClass('enter');
$(".buttons>svg:nth-child(1)").addClass('selected');
let n=1;
setInterval(()=>{
    $(`.images>img:nth-child(${modFuc(n)})`).removeClass("current").addClass("leave")
    .one('transitionend',(e)=>{
        $(e.currentTarget).removeClass("leave").addClass("enter");
    });
    $(`.images>img:nth-child(${modFuc(n+1)})`).removeClass("enter").addClass("current");
    n=n+1;
    $(".buttons>svg").removeClass("selected");
    $(`.buttons>svg:nth-child(${modFuc(n)})`).addClass("selected");
},3000);

function modFuc(n){
   if(n>3){
       n=n%3;
       if(n===0){
           n=3;
       }
   }
   return n;
}