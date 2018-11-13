//强行显示loading
setTimeout(function(){
    siteWelcome.classList.remove("active")
},1000)

//鼠标中轮滚动时间
window.onscroll = function(){
    if(window.scrollY>0){
        topNavbar.classList.add('scrollStyle');
    }else{
        topNavbar.classList.remove('scrollStyle');
    }
}