//获取当前时间
let date = new Date()   
let td = new Date()
//开始时间，当前时间前30min
td.setMinutes(date.getMinutes() - 30)
$id('kssj2').innerHTML = `${zero(td.getMonth())}-${zero(td.getDay())} ${zero(td.getHours())}:${zero(td.getMinutes())}`
//结束时间，当前时间后三个小时
td.setHours(date.getHours() + 3)
$id('jssj2').innerHTML = `${zero(td.getMonth())}-${zero(td.getDay())} ${zero(td.getHours())}:${zero(td.getMinutes())}`

//发起申请的时间,2小时38分钟之前
td.setHours(date.getHours() - 2)
td.setMinutes(td.getMinutes() - 38)
$id('fqsj').innerHTML = `${zero(td.getMonth())}-${zero(td.getDay())} ${zero(td.getHours())}:${zero(td.getMinutes())}`
//审批通过时间，1小时19分钟之前
td.setHours(date.getHours() - 1)
td.setMinutes(td.getMinutes() - 19)
$id('spsj').innerHTML = `${zero(td.getMonth())}-${zero(td.getDay())} ${zero(td.getHours())}:${zero(td.getMinutes())}`

//如何销假？
$id('rhxj').onclick = ()=>{
    window.open("https://catqa.cpdaily.com/2018/10/24/%E5%A6%82%E4%BD%95%E9%94%80%E5%81%87%EF%BC%9F/")
}
//销假规则查看
$id('gzck').onclick = ()=>{
    $id('infoBox').innerHTML = 
    `<div class="bgc">
        <div id="alertBox">
            <div class="boxTitle">销假规则说明</div>
            <div class="boxContent">
                · 开启时间: &nbsp;2022-06-02 16:43:31   <br/>
                · 操作人: 廖建玮
            </div>
            <div id="know">
                知道了
            </div>
        </div>        
    </div>`
    $id('know').onclick = ()=>{
        $id('infoBox').innerHTML = ""
    }
}
//审批流程查看
$id('lcck').onclick = ()=>{
    $id('infoBox').innerHTML = 
    `<div class="bgc">
        <div id="alertBox">
            <div class="boxTitle">审批流程</div>
            <div class="boxContent">
                <img src="./img/蓝圈.png" class="quan"/> 一级审批人<br>
                <div id="js"><img src="./img/用户.png" id="user"/>[角色]辅导员</div>
            </div>
            <div id="know">
                知道了
            </div>
        </div>        
    </div>`
    $id('know').onclick = ()=>{
        $id('infoBox').innerHTML = ""
    }
}
//转发
$id('zf').onclick = ()=>{
    $id('infoBox').innerHTML = 
    `<div class="bgc">
        <img src="./img/分享.png" id="fxi"/>
        <div id="fx">点击右上角发送给朋友</div>
    </div>`
    $id('infoBox').onclick = ()=>{
        $id('infoBox').innerHTML = ""
    }
}

//撤回
$id('ch').onclick = ()=>{
    $id('infoBox').innerHTML = 
    `<div class="bgc">
        <div id="back">
            <div id="backdel">撤回并删除</div>
            <div id="backre">撤回并重新编辑</div>
        </div>
        <div id="cancel">取消</div>
    </div>`
    $id('back').onclick = ()=>{
        $id('infoBox').innerHTML = ""
    }
    $id('cancel').onclick = ()=>{
        $id('infoBox').innerHTML = ""
    }
}

//去销假
$id('qxj').onclick = ()=>{
    open('./xiaojia.html',"_self")
}

