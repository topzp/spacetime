// $(function(){        //点击阅读全文
//     var slideHeight = $(window).height(); // px
//     var defHeight = $('.thread_article').height();
//     if(defHeight >= slideHeight ){
//         $('.thread_article').css('height' , slideHeight + 'px');
//         $('#read-more').append('<a href="#">查看全文 <i class="fa fa-angle-down"></i></a>');
//         $('#read-more a').click(function(){
//             var curHeight = $('.thread_article').height();
//             if(curHeight == slideHeight){
//                 $('.thread_article').animate({
//                     height: defHeight
//                 }, "normal");
//                 $('#read-more a').html('收起 <i class="fa fa-angle-up"></i>').css("display","none");
//                 $('#gradient').fadeOut();
//             }
//             return false;
//         });
//     }
// });   //点击阅读全文

function GetRequest() {
    var url = location.href;      //获取url中"?"符后的字串
    var theRequest = new Object();
    theRequest.id = url.split('news/')[1].split('?')[0];
    console.log(theRequest);
    return theRequest;
}
var Request = new Object();
Request = GetRequest();
var a = Request.id;      //得到主页面传递过来的id
console.log(a);
function changeURLArg(url,arg,arg_val){
    var pattern=arg+'=([^&]*)';
    var replaceText=arg+'='+arg_val;
    if(url.match(pattern)){
        var tmp='/('+ arg+'=)([^&]*)/gi';
        tmp=url.replace(eval(tmp),replaceText);
        return tmp;
    }else{
        if(url.match('[\?]')){
            return url+'&'+replaceText;
        }else{
            return url+'?'+replaceText;
            }
        }
    }

var baseUrl = "http://116.62.144.159:80/api/news/getNewsDetailById";
var finalUrl = changeURLArg(baseUrl,"id",a);
// console.log(finalUrl);

//404页面
var ht404 = function () {
    $('#news').addClass('news');
    $("#news").empty();
    var news = document.getElementById('news');
    news.innerHTML = '<div id="news_404"><img src="/img/404.png" alt=""><p>页面出错了啦！</p><button id="but">刷新</button></div>';
    $('#but').click(function () {
        window.location.reload();
    });
};
//404页面

$.ajax({
    url:finalUrl,
    type:"get",
    dataType:"json",
    success:function (result) {
        console.log(result);
        if(result.error === "找不到这条资讯。"){
            ht404();
        }else{
            //解析时间
            var times = result.ret.createTime;
            console.log(times);
            function ChangeDateFormat(d){   //将时间戳转为int类型，构造Date类型
                var date = new Date(parseInt(d,10));   //月份得+1，且只有个位数时在前面+0
                var month = date.getMonth() + 1 < 10 ?"0" + (date.getMonth() + 1) : date.getMonth() + 1;    //日期为个位数时在前面+0
                var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();  //getFullYear得到4位数的年份 ，返回一串字符串
                return date.getFullYear()+"-" +month +"-" +currentDate;
                console.log(date.getFullYear()+"-" +month +"-" +currentDate);
            }
            var times = ChangeDateFormat(result.ret.createTime);
            //解析时间
            var img = result.ret.authorAvatar;
            console.log(img);
            if( img == ""){
                $('.title').append(result.ret.title);
                $('.headerimg').attr('src','http://116.62.144.159:80/img/img_tt.jpg');
                $('.name').append(result.ret.authorName);
                $('.time').append(times);
                document.querySelector("#content").innerHTML = result.ret.content;
            }else {
                $('.title').append(result.ret.title);
                $('.headerimg').attr('src',result.ret.authorAvatar);
                $('.name').append(result.ret.authorName);
                $('.time').append(times);
                document.querySelector("#content").innerHTML = result.ret.content;

            }
        }
    },error:function(){
        ht404();
    }
});
