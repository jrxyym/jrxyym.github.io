//将滚动代码添加到页面
let str = ""
for(let i=0;i<=100;i++){
    str += '<img class="pxsbx" src="./img/平行四边形.png"/>'
}
$("#first").html(str)
$("#last-text").html(str)

//滚动--------------------------------
const outer = document.getElementById('scroll-outer')
const innter = document.getElementById('scroll-inner')
const outerWidth = outer.getBoundingClientRect().width
const innerWidth = innter.getBoundingClientRect().width
const lastText = document.getElementById('last-text')
const padding = 20
const middle = innerWidth / 2
let translate = 0
if (middle - padding > outerWidth) {
    setInterval(() => {
        translate = translate >= middle ? 2 : (translate + 2)
        innter.style.transform = `translate3d(${-translate}px, 0, 0)`
    }, 30)
} else {
    lastText.style.display = 'none'
}
//滚动--------------------------------

setInterval("myDateFunc()",1000)
function myDateFunc(){
    //设置当前时间
    let date = new Date()
    let year = date.getFullYear()
    let month = zero(date.getMonth() + 1)
    let day = zero(date.getDate())
    let hour = zero(date.getHours())
    let minute = zero(date.getMinutes())
    let second = zero(date.getSeconds())
    let datestr = `当前时间:${year}-${month}-${day} ${hour}:${minute}:${second}`
    $("#four").html(datestr)
}

//开始与结束时间
let date = new Date()
let month = zero(date.getMonth() + 1)
let day = date.getDate()
let hour = date.getHours()
let minute = date.getMinutes()
let th = 0;
let tm = 0;
if(minute < 30){
    th = hour - 1
    tm = minute + 30
}else{
    th = hour
    tm = minute - 30
}
//开始时间
$("#kssj2").html(`${month}-${zero(day)} ${zero(th)}:${zero(tm)}`)
//发起申请与审批通过时间
th = hour - 1;//前一小时申请
$("#fqsj").html(`${month}-${zero(day)} ${zero(th)}:${zero(minute)}`)
//提前20min审批
if(minute >= 40){
    th = hour
    tm = minute - 40
}else{
    th = hour - 1
    tm = minute + 20
}
$("#spsj").html(`${month}-${zero(day)} ${zero(th)}:${zero(tm)}`)
//结束时间 加3个小时
if(hour + 3 >= 24){
    hour = (hour + 3) % 23
    day += 1
}else{
    hour += 3
}
$("#jssj2").html(`${month}-${zero(day)} ${zero(hour)}:${zero(minute)}`)


//点击跳转时提示当前网络差
$(".error").click(()=>{
    alert("当前网络差，请稍后重试")
})

//将不足两位的数字前补零
function zero(num){
    if((num + "").length <= 1){
        return "0" + num
    }
    return num
}
