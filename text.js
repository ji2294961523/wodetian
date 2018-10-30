var timer;


var flag=true;
function startTimer(speed){
 timer=window.setInterval(changeNum.speed);
}
startTimer(100);

timer=window.setInterval(changeNum,1000);

var images1=document.querySelector('#images');
var images2=document.getElementById('images');

console.log(images1);
console.log(images2);
console.log(images2.children[3]);

var h2Obj=document.querySelector('h2>img');
console.log(h2Obj);

var currentNo=1;
function changeNum(){
  h2Obj.innerHTML='<img src="images/0'+currentNo+'.jpg" alt="">'
   if(currentNo<9) currentNo++;
   else currentNo=0;
  //  h2Obj.textContent=currentNo;
}

//获取控制按钮
var btnObj =document.getElementById('btnObj')


//定义启动定时器函数，函数功能为停止定时器的同时改变按钮的显示文本
function startChange(){
  strtTimer(500);
    btnObj.textContent="停止"
}
//定义停止定时器函数，函数功能为停止定时器的同时改变按钮的显示文本
function stopChange(){
    window.clearInterval(timer);
    btnObj.textContent="启动"
}
//为按钮添加鼠标移入移出事件
btnObj.addEventListener('mouseover',stopChange);
btnObj.addEventListener('mouseout',startChange);



// h2Obj.textContent=currentNo;
// if(flag){
// if(currentNo<9) currentNo++;
// else flag=false;}
// else{
//     if(currentNo>0) currentNo--;
//     else flag=true;
// }
// console.log(currentNo);
