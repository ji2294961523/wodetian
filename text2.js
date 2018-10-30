// //css选择器
// var ima4=document.querySelector('#images a:nth(4)-child');
// //ID--document.getElementById()
// var img4=document.getElementById('images').children[3];
// //类名--document.getElementsByClassName()
// var img4=document.getElementsByClassName('hiddenImg')[3];
// //标签名--document.getElementsByName()
// var img4=document.getElementsByTagName('a')[4];

// console.log(img4);
// img4.style.display="block";
// img0.style.display="none";

//获取一组带图像的超链接
var imagesA=document.getElementById("images").children;
console.log(imagesA);
//行内样式实显示样式
//26行元素隐藏
// imagesA[0].style.display="none";
//30行元素显示
// imagesA[4].style.display="block";

//通过更换css类名来实现更换样式

// 26行元素隐藏
// imagesA[0].className="hiddenImg";
// 30行元素显示
// imagesA[4].className="displayImg";

//利用计时器间隔1s，显示1张图片，其余图像隐藏
var currentNo=0;
function changeImg(){
//排他原理，先去掉同类，在突出自己 
for(var i=0;i<imagesA.length;i++){
    imagesA[i].className="hiddenImg";
    console.log(imagesA[i]);
}
//或者 
//for(const item of imagesA){
//     item.className="hiddenImg";
// }
//在突出自己 
imagesA[currentNo].className="displayImg";
//换个元素，为下一次计时器做准备
if(currentNo<7) {currentNo++;}
else{
    currentNo=0;
}
}
var timer=window.setInterval(changeImg,1000)



function startChange(){
    var timer=window.setInterval(changeImg,1000)

}
function stopChange(){
    window.clearInterval(timer);
}
var imagesDiv=document.getElementById('images')
images.addEventListener('mousemove',stopChange);
images.addEventListener('mouseout',startChange);

