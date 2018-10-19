var keys={
    0:['Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|'],
    1:['Caps Lock','A','S','D','F','G','H','J','K','L',':','"','Enter'],
    2:['Shift','Z','X','C','V','B','N','M',',','.','/','Shift'],
    3:['Ctrl','Win','Alt','Space','Alt','Win','PrintS','Ctrl']
 };
 var website={
    A: "acfun.cn",
    Q:"qq.com",
    W:"weibo.com",
    Z:"zhihu.com",
    B:"bilibili.com",
    I: "iqiyi.com",
    L: "lol.com",
    M: "mcdonalds.com",
    V: "v.qq.com",
    X: "xiedaimala.com",
    Y: "yinxiang.com",
    S: "store.steampowered.com"
 };
 if(localStorage.getItem('web')){
    var website = JSON.parse(localStorage.getItem('web'));
    
 }
 
 // 生成键盘
 for (var i in keys){
    if(keys.hasOwnProperty(i)){
        var divRows = document.createElement("div");
        divRows.className = "rows";
        keyboard.append(divRows);
 
        for (var j=0;j<keys[i].length;j++){
            var kbd = document.createElement("kbd");
            kbd.className = "kbd";
            var kbdText = document.createElement("span");
            var kbdButton = document.createElement("button");
            var kbdImg = document.createElement("img");
            kbdText.className = "text";
            kbdText.textContent = keys[i][j];
            kbdButton.className = "button";
            kbdButton.id = keys[i][j];
            kbdButton.textContent = "edit";
            //生成图片
            kbdImg = createImg(website[keys[i][j]]);
            
    
            divRows.append(kbd);
            kbd.append(kbdText);
            kbd.append(kbdImg);
            kbd.append(kbdButton);
            
            //编辑按钮事件
            kbdButton.onclick = function(ev){
                var editButton = ev.target.id;
                var editImg = ev.target.previousSibling;
                var inputWebsite = prompt("请输入想跳转的网址：");
                if(inputWebsite){
                    website[editButton] = inputWebsite;
                    editImg.src="http://" + inputWebsite + "/favicon.ico";
                    editImg.onerror = function(ev){
                        ev.target.src = "//i.loli.net/2017/11/10/5a05afbc5e183.png"
                    }
                    alert("设置成功~");
                    localStorage.setItem('web',JSON.stringify(website));
                }else if(inputWebsite ===""){
                    alert("输入了空的网址，设置失败哟~");
                }else if (inputWebsite === null){
                    return;
                }
 
            }
        }
    }
 }
 
 //监听键盘按键事件
 document.onkeypress= function(keys) {
    var inputKey = keys.key.toUpperCase();
    if(website[inputKey]){
        window.open("http://"+website[inputKey],'_blank');
    }else{
        alert("无对应跳转网址。如需要，可自行编辑~");
    }
 };

 //生成图片
 function createImg(domain){
    var kbdImg = document.createElement("img");
    if(domain){
        kbdImg.src = "http://" + domain + "/favicon.ico";
    }else{
        kbdImg.src = "//i.loli.net/2017/11/10/5a05afbc5e183.png";
    }
    kbdImg.onerror = function(ev){
        ev.target.src = "//i.loli.net/2017/11/10/5a05afbc5e183.png"
    }
    return kbdImg;
 }