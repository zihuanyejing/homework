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
//缓动动画
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);
for (let i=0;i<aTags.length;i++){
    aTags[i].onclick = function(x){
        x.preventDefault(); //阻止a标签的默认跳转功能
        let a = x.currentTarget;
        let href = a.getAttribute("href");
        let element = document.querySelector(href);
        let top = element.offsetTop;

        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop // 路程
        var coords = { y: currentTop}; // 起始位置
        var t = Math.abs((s/100)*300) // 时间
        if(t>500){ t = 500 }
        var tween = new TWEEN.Tween(coords) // 起始位置
           .to({ y: targetTop}, t) // 结束位置 和 时间
           .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
           .onUpdate(function() {
          // coords.y 已经变了
        window.scrollTo(0,coords.y) // 如何更新界面
      })
      .start(); // 开始缓动
    }
    
}