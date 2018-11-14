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

//导航下划线从左往右划动
liTags = document.querySelectorAll("nav.menu>ul>li");
for(let i = 0; i<liTags.length;i++){
    liTags[i].onmouseenter=function(x){
        x.currentTarget.classList.add("active");
    }
    liTags[i].onmouseleave=function(x){
        x.currentTarget.classList.remove("active");
    }
}