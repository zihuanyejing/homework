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
var liTags = document.querySelectorAll("nav.menu>ul>li");
for(let i = 0; i<liTags.length;i++){
    liTags[i].onmouseenter=function(x){
        x.currentTarget.classList.add("active");
    }
    liTags[i].onmouseleave=function(x){
        x.currentTarget.classList.remove("active");
    }
}
//点击导航栏按钮，页面跳至相应位置
var aTags = document.querySelectorAll("nav.menu>ul>li>a");
for (let i=0;i<aTags.length;i++){
    aTags[i].onclick = function(x){
        x.preventDefault(); //阻止a标签的默认跳转功能
        let a = x.currentTarget;
        let href = a.getAttribute("href");
        let element = document.querySelector(href);
        let top = element.offsetTop;
        window.scrollTo(0,top-80);
    }
}