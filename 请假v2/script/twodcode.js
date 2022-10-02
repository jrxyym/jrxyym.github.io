//二维码图片替换
let imgs = ['./img/2d1.png','./img/2d2.png','./img/2d3.png','./img/2d4.png']
//点开页面随机加载一张图片
$id('twod').innerHTML = `<img class="twodi" src="${imgs[Math.round(Math.random()*10)%4]}"/>`

let i = 0;
setInterval("myImgFunc()",20000)
function myImgFunc(){
    i++
    i = i%4
    $id('twod').innerHTML = `<img class="twodi" src="${imgs[i]}"/>`
}

//当前时间
setInterval("myCurrent()",1000)
function myCurrent(){
    $id("dqsj").innerHTML = tempstr
}