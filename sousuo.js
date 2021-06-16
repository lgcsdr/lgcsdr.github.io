// input
$(document).ready(function() {
var btns=document.getElementsByClassName('btn');
for(var i in btns)
{ btns[i].onclick=function(){
window.open(this.getAttribute('dataurl')+document.getElementById('searchinput').value);
} } } );
// 联想
var mysearch=(function(){
var $searchinput=$('#searchinput'),
$viewcontent=$('#viewcontent'),
searchKey='';
function callback(data){
var str='';
data=data.s;
for(var i=0,len=data.length;i<len;i++){
// 默认显示?条
if(i<=7){
str+='<li>'+data[i]+'</li>';
} }
$viewcontent.html(str);
$viewcontent.show(); };
function bindHtml(){
// getData
$.ajax({url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + searchKey,
dataType:'jsonp',
jsonp:'cb',
success:callback })
};
function init(){
// 获取搜索框的关键字
$searchinput.on('focus keyup',function (){
// 把空格开头和结尾换成空字符串
searchKey=$(this).val().replace(/(^ +| +$)/g,'');
if(searchKey.length>0)
//如果输入框有值
{ bindHtml();
return false;
}
// 输入框没有值
$viewcontent.stop().slideUp(300);
}).on('blur',function (){
// 失去焦点联想收缩
setTimeout(function (){
$viewcontent.stop().slideUp(300);
}, 100)
});
// li绑定
$viewcontent.on('click','li', function (e){
$searchinput.val($(this).html());
});
};
return {
init: init
}
})();
mysearch.init();

// 手机端 input 显示遮罩层
var zzcbutton = document.getElementById('zzcbutton');
var zezaoceng = document.getElementById('zezaoceng');
var viewcontent = document.getElementById('viewcontent');
// 点击 按钮 显示遮罩层
zzcbutton.addEventListener('click', ()=> {
zezaoceng.style.display = 'block';
} );
// 点击任意地方 关闭遮罩层
zezaoceng.addEventListener('click', (e)=> {
zezaoceng.style.display = 'none';
} );
// 点击联想弹窗 关闭遮罩层
viewcontent.addEventListener('click', (e)=> {
e.stopPropagation();
zezaoceng.style.display = 'none';
} );

//天气
/* $.ajax( {
url: 'https://ip.ws.126.net/ipquery?ie=utf-8',
dataType: 'script',
success: function(data){
$.ajax( {
url: 'http://wthrcdn.etouch.cn/weather_mini?city='+lc,
dataType: 'json',
success: function(data){
var tianqis=data.data.forecast[0];
$('#atianqi').html('<div>'+lc+' '+tianqis.type+' '+data.data.wendu+'℃'+' '+'('+tianqis.high+'~'+tianqis.low+')'+'</div>'
);
}
} );
}
} );
*/