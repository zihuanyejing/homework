window.jQuery = function(nodeOrSelector){
    let nodes={};
    if(typeof nodeOrSelector === "string"){
        let temp = document.querySelectorAll(nodeOrSelector);
        for(let i=0;i<temp.length;i++){
            nodes[i]=temp[i];
        }
        nodes.length = temp.length;
    }else if(nodeOrSelector instanceof Node){
        nodes = {
            0:nodeOrSelector,
            length:1
        }
    }else{
        alert("传参类型错误")
    }

    nodes.addClass = function(classes) {
        if(typeof classes === "string"){
            for(let i=0;i<nodes.length;i++){
                nodes[i].classList.add(classes);
            }
        }else if(classes instanceof Array){
            for(let i=0;i<nodes.length;i++){
                classes.forEach(value=>{
                    nodes[i].classList.add(value);
                });
            } 
        }else{
            alert("传参错误");
        }
    };

    nodes.setText = function(value){
        for(let i=0;i<nodes.length;i++){
            nodes[i].textContent = value;
        }
    }
    return nodes;

}

window.$ = jQuery;
var $div = $('div');
$div.addClass('red'); // 可将所有 div 的 class 添加一个 red
$div.setText('hi'); // 可将所有 div 的 textContent 变为 hi