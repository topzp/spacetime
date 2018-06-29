//固定导航栏
$(function(){
    var nav=$(".nav"); //得到导航对象
    var win=$(window); //得到窗口对象
    var sc=$(document);//得到document文档对象。
    win.scroll(function(){
        if(sc.scrollTop()>=100){
            nav.addClass("fixednav");
        }else{
            nav.removeClass("fixednav");
        }
    })
});
/*点击tab滚动到对应的内容*/
$(document).ready(function() {
    $("#introduce").click(function() {
        var top =$("#div1").offset().top-50;
        console.log(top);
        $("html, body").animate({
            scrollTop: top}, {duration: 500,easing: "swing"});
        return false;
    });
    $("#information").click(function() {
        var top =$("#div2").offset().top-120;
        console.log(top);
        $("html, body").animate({
            scrollTop:top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#details").click(function() {
        var display = $('.hide-show').css('display');
        if (display== "none"){
            var top =$("#div2").offset().top+320;
            $("html, body").animate({
                scrollTop: top }, {duration: 500,easing: "swing"});
        } else {
            var top =$("#div3").offset().top -120;
            $("html, body").animate({
                scrollTop: top }, {duration: 500,easing: "swing"});
            return false;
        }
    });
    $("#team").click(function() {
        var display = $('.hide-show').css('display');
        if (display== "none"){
            var top =$("#div2").offset().top+420;
            $("html, body").animate({
                scrollTop: top }, {duration: 500,easing: "swing"});
        } else {
            var top =$("#div4").offset().top -120;
            $("html, body").animate({
                scrollTop: top }, {duration: 500,easing: "swing"});
            return false;
        }
    })
});