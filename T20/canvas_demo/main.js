//设置画布的宽高与浏览器窗口自适应
var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext("2d");
var using = false;//是否为画笔模式
var eraser = false;//是否为橡皮擦模式
var colorCurrent = "black";
var lineCurrent = 2;
bindMouseEvent();


//两点之间画线
function drawLine(start,end){
    context.beginPath();
    context.strokeStyle = colorCurrent;
    context.lineWidth = lineCurrent;
    context.moveTo(start.x,start.y);
    context.lineTo(end.x,end.y);
    context.stroke();
    context.closePath();
}

//绑定鼠标事件
function bindMouseEvent(){
    var lastPoint = {
        x:undefined,
        y:undefined
    }
   document.onmousedown = function(location){
       using = true;
       var x = location.clientX;
       var y = location.clientY;
       if(eraser){
           context.clearRect(x-5,y-5,10,10);
       }else{
           lastPoint.x = x;
           lastPoint.y = y;
       }
   }
   document.onmousemove = function(location){
       var x = location.clientX;
       var y = location.clientY;
       if(!using){
           return;
       }
       if(eraser){
           context.clearRect(x-5,y-5,10,10);
       }else{
           var newPoint = {
               x:x,
               y:y
           }
           drawLine(lastPoint,newPoint);
           lastPoint.x = newPoint.x;
           lastPoint.y = newPoint.y;
       }
   }
   document.onmouseup = function(){
       using = false;
   }
   brush.onclick = function(){
       eraser = false;
       brush.classList.add("selected");
       eraserId.classList.remove("selected");
   }
   eraserId.onclick = function(){
       eraser = true;
       eraserId.classList.add("selected");
       brush.classList.remove("selected");
   }
   red.onclick = function(){
       colorCurrent = "red";
       red.classList.add("colorselected");
       blue.classList.remove("colorselected");
       black.classList.remove("colorselected");
   }
   blue.onclick = function(){
       colorCurrent = "blue";
       blue.classList.add("colorselected");
       red.classList.remove("colorselected");
       black.classList.remove("colorselected");
  }
  black.onclick = function(){
      colorCurrent = "black";
      black.classList.add("colorselected");
      red.classList.remove("colorselected");
      blue.classList.remove("colorselected");
  }
  line1.onclick = function(){
      lineCurrent = 2;
      line1.classList.add("lineselected");
      line2.classList.remove("lineselected");
      line3.classList.remove("lineselected");
  } 
  line2.onclick = function(){
      lineCurrent = 4;
      line2.classList.add("lineselected");
      line1.classList.remove("lineselected");
      line3.classList.remove("lineselected");
  }  
  line3.onclick = function(){
      lineCurrent = 6;
      line3.classList.add("lineselected");
      line1.classList.remove("lineselected");
      line2.classList.remove("lineselected");
  } 
  download.onclick = function(){
      var url = canvas.toDataURL("/image/png");
      var a =document.createElement('a');
      test.appendChild(a)
      a.href = url;
      a.download = "我的画作";
      a.target = "_blank";
      a.click();
  }
}
