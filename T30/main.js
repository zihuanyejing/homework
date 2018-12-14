let allButtons=$("#buttons>svg");
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