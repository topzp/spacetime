var myDate = new Date();
myDate.toLocaleDateString();        //获取当前日期与时间
console.log(myDate.toLocaleDateString());

// 判断有没有到开奖日期
function tab(date1,date2){
    var oDate1 = new Date(date1);
    var oDate2 = new Date(date2);
    if(oDate1.getTime() > oDate2.getTime()){
        console.log('第一个大');
        $('.rule .fr').text('中奖名单');
        $('#background .rule .fr').css('margin-right','14%');
        $(".rule .fr").click(function () {
            window.location.href = "winner_list.html";
        });
    } else {
        console.log('第二个大');
        $(".rule .fr").click(function () {
            $('.tishi').removeClass('hidden');
        });
        $(".tishi .con").click(function () {
            $('.tishi').addClass('hidden');
        });
    }
}
$(".rule .fl").click(function () {
    window.location.href = "rule.html";
});

// 转换时间格式
function CurentTime()
{
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var clock = year + "-";
    if(month < 10)
        clock += "0";
    clock += month + "-";
    if(day < 10)
        clock += "0";
    clock += day + " ";
    return(clock);
}
console.log(CurentTime(myDate.toLocaleDateString()));
var newtime = CurentTime(myDate.toLocaleDateString());
console.log(newtime);

tab(newtime,'2018-07-17');

//判断页面打开终端
window.onload = function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if ( bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        $('.img img').addClass('img-responsive');
    } else {
        $('.img img').removeClass('img-responsive');
    }
};

/*切换中奖名单*/
$(document).ready(function(){
    var nav =document.getElementById("assets_nav");
    var navlist = nav.children;
    var con = document.getElementById("assets_content");
    var conlist = con.children;
    for (var i= 0;i<navlist.length;i++){
        navlist[i].index = i;
        navlist[i].onclick = function (){
            for (var m = 0;m< conlist.length;m++){
                navlist[m].className = "";
                conlist[m].style.display ="none";
            }
            this.className = "active";
            conlist[this.index].style.display = "block";
        }
    }
});
