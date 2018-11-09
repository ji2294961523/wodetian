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


// 初始化
// -----------获取相关元素---------
//获取一组带图像的超链接
var imagesA = document.getElementById("images").children;
var txtList = document.querySelector(".txt-box").children;
// console.log(imagesA);
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

var currentNo = 0;//当前显示的图片编号
const nodeLength = 8;
//利用计时器间隔1s，显示1张图片，其余图像隐藏
function changeImg()
{
//排他原理，先去掉同类，在突出自己 
for (var i = 0; i < nodeLength; i++){
    imagesA[i].className = "hiddenImg";

    txtList[i].className = "txtItem normalColor";
    // console.log(imagesA[i]);
}

//或者 
//for(const item of imagesA){
//     item.className="hiddenImg";
// }
//在突出自己 
imagesA[currentNo].className = "displayImg";

txtList[currentNo].className = "txtItem heighlightColor";
}
//换个元素，为下一次计时器做准备
function leftImg() {     
    if (currentNo > 0) { currentNo--; }
    else {
        currentNo = 7;
    } 
}


function rightImg() {
    if (currentNo < 7) { currentNo++; }
    else {
        currentNo = 0;
    }  
}
// console.log(currentNo);

var timer = window.setInterval(rightImgGo, 1000);

function stopChange() {
    window.clearInterval(timer);
    
}
function startChange() {
    timer = window.setInterval(rightImgGo, 1000);
}
var sliderDiv = document.querySelector(".slider");
// sliderDiv.addEventListener('mouseover',stopChange);
// sliderDiv.addEventListener('mouseover',function(){window.setInterval(timer);})
sliderDiv.addEventListener('mouseover', ()=>{clearInterval(timer);});
sliderDiv.addEventListener('mouseout', startChange);

// 为所有文本li注册鼠标移入事件，移入之后，当前li高亮，跳转到对应图片
for (var i = 0; i < txtList.length; i++){
    txtList[i].addEventListener('mouseover', gotoImg);
    txtList[i].no=i;
}
function gotoImg(){
    // console.log(this.no)
    currentNo=this.no;
    changeImg();
}
var leftButton = document.querySelector('.leftButton');
var rightButton = document.querySelector('.rightButton');

leftButton.addEventListener('click', leftImgGo);
rightButton.addEventListener('click', rightImgGo);

function leftImgGo(){
    leftImg();
    changeImg();
}

function rightImgGo(){
    rightImg();
    changeImg();
}