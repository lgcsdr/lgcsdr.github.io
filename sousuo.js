// 乱七八糟测试
// input button
var btnss=document.getElementsByClassName('zhilian');
for(var z in btnss){
btnss[z].onclick=function(){
window.open(this.getAttribute('zhilianurl'));
return false;
}
}

var btns=document.getElementsByClassName('sousuo');
for(var i in btns){
btns[i].onclick=function(){
window.open(this.getAttribute('sousuourl')+document.getElementById('searchinput').value);
return false;
}
}

// 给某个搜索链接加后缀,特殊处理--泥巴
var houzui = document.getElementById('nivod');
houzui.onclick=function(){
window.open(this.getAttribute('nivodurl')+
document.getElementById('searchinput').value+('&catId=1'));
return false;
}

// 联想
var mysearch=(function(){
var $searchinput=$('#searchinput'),
$lianxiang=$('#lianxiang'),
searchKey='';

function callback(data){
var data=data.s;
var str='';
for(var i=0,len=data.length;i<len;i++){
// 默认显示?条
if(i<=7){
str+='<li>'+data[i]+'</li>';
}
}
$lianxiang.html(str);
$lianxiang.show();
return false;
}

// 键盘上下键
$("#searchinput").keydown(function(e){
/* var keycode = (event.keyCode ? event.keyCode : event.which); */
var keycode = (event.keyCode || event.button);

if(keycode == 38){
// 阻止光标跑到第一
event.preventDefault();

var active = $("li.active");
if (active.length) {
var prev = active.prev();
if (prev.length) {
prev.addClass("active").siblings().removeClass("active");
}else{
$("li:last").addClass("active").siblings().removeClass("active");
}
}else{
$("li:last").addClass("active");
}

$("input").val($("li.active").html());
}

else if (e.keyCode == 40){
event.preventDefault();

var active = $("li.active");
if (active.length) {
var next = active.next();
if (next.length) {
next.addClass("active").siblings().removeClass("active");
}else{
$("li:first").addClass("active").siblings().removeClass("active");
}
}else{
$("li:first").addClass("active");
}
$("input").val($("li.active").html());
}
});

function bindHtml(){
$.ajax({url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+searchKey,
dataType:'jsonp',
jsonp:'cb',
success:callback,
});
}

// 清除搜索框内容
var searchResult=document.getElementById("lianxiang");
function clearContent(){
var size = searchResult.childNodes.length;
for(var i = size - 1; i >= 0; i--) {
searchResult.removeChild(searchResult.childNodes[i]);
}
}

// 获取搜索框关键字
function init(){
$searchinput.on('focus keyup',function(e){
// 按上下键不监听
if(event.keyCode == 38 || event.keyCode == 40){
return false;
}

searchKey=$(this).val().replace();
// 判断是否有值
if(searchKey.length>0){
bindHtml();
return false;
}

// 没有值收缩
if(this.value.length === 0){
clearContent();
return false;
}
});

// 失去焦点收缩
// pc
var windowwidth=document.body.offsetWidth;
if (windowwidth > 500) {
$("#searchinput").on('blur',function(){
setTimeout(function(){
$lianxiang.stop().slideUp(100);
},100);
});
}
// 手机
if (windowwidth < 500) {
$("#searchinput").on('blur',function(){
setTimeout(function(){
$lianxiang.stop().slideUp(50);
},50);
});
}

// 绑定li
$lianxiang.on('click','li', function(e){
/* var text=$(this).html() */
$searchinput.val($(this).html())
});
}
return{init:init}
})();
mysearch.init();

// 零件
$(function(){
// tv卫视弹窗
$('#tvweisi').click(function(e){
// 阻止冒泡
e.stopPropagation();
if ($('#tvlianjie').is(':hidden')){
$('#tvzzc').show();
$('#tvlianjie').show(200);
}else{
$('#tvzzc').hide();
$('#tvlianjie').hide();
}
return false;
});
// tv遮罩层,点击屏幕关闭tv弹窗
$('#tvzzc').add('#tvlianjie').click(function(e) {
e.stopPropagation();
$('#tvzzc').hide();
$("#tvlianjie").hide(200);
return false;
});


// 点击搜索框时候
$('#searchinput').click(function(){
// 点击搜索框隐藏新闻
$('#news').hide();
// input聚焦时,自动滚动到屏幕顶部,让input定位在可见区域
this.scrollIntoView();
});


// 输入框清除按钮 监听输入框内容变动
$('#searchinput').on('input',function(){
val = this.value.length;
// 判断输入框是否有值
if(val >= 1){
// 隐藏新闻
$('#news').hide();
// 显示清除
$('#qingcu').show();
}else{
$('#qingcu').hide();
$('#news').show();
}
});
// 判断输入框是否有值,失去指针焦点时候
$('#searchinput').blur(function(){
if($(this).val()==''){
$('#qingcu').hide();
$('#news').show();
}
});
// 点击清空按钮时候
$('#qingcu').click(function(){
// 清空输入框内容
$('#searchinput').val('');
// 清空后隐藏自己
$('#qingcu').hide();
// 不失去焦点
$('#searchinput').focus();
});

// 安卓端
// focus
$('#searchinput').focus(function(){
// 点搜索框显示遮罩层,按着搜索框不动到顶部
var windowwidth=document.body.offsetWidth;
if (windowwidth < 500) {
$('#appzzc').css(
{'display':'block','position':'fixed','top':'0','left':'0','width':'100%','height':'100%',}
);

$('#lianxiang').css(
{'display':'block','z-index':'1',}
);

$('#searchinput').css(
{'position':'fixed','top':'2px','width':'90%','z-index':'1',}
);

$('#qingcu').css(
{'position':'fixed','top':'9px','z-index':'1',}
);

// 点搜索框追加网址后缀#, 为了返回键能关闭遮罩层
window.history.pushState('','','#sbfbu=1&pi=');
}
});

// click 对应 focus
$('#appzzc').add('#lianxiang').click(function(){

// 点遮罩层,联想,关闭遮罩层,搜索框返回原处
var windowwidth=document.body.offsetWidth;
if (windowwidth < 500) {
$('#appzzc').css(
{'display':'',}
);

$('#lianxiang').css(
{'display':'','z-index':'',}
);

$('#searchinput').css(
{'position':'','top':'','width':'','z-index':'',}
);

$('#qingcu').css(
{'position':'','top':'','z-index':'',}
);

// 点遮罩层或联想,返回主页
window.history.back();
/* window.history.pushState('','','#sbfbu=1&pi='); */
}
});


// 回车键或直接搜索的时候
$("#searchinput").keydown(function() {
if (event.keyCode == 13) {
// 不定时无法响应form/action
setTimeout(function(){
// 安卓端回车后,关闭遮罩层,联想和搜索框,返回原处
var windowwidth=document.body.offsetWidth;
if (windowwidth < 500) {
$('#appzzc').css(
{'display':'',}
);

$('#lianxiang').css(
{'display':'','z-index':'',}
);

$('#searchinput').css(
{'position':'','top':'','width':'','z-index':'',}
);

$('#qingcu').css(
{'position':'','top':'','z-index':'',}
);
}

// 回车后返回主页
window.history.back();
// 回车后让输入框失去焦点
$('#searchinput').blur();
},2000);
// 这里的时间要大于$lianxiang.stop().slideUp(50);
}
});


// 返回键 popstate
window.addEventListener('popstate',function(e){
// 点返回键关闭遮罩层,input返回原处
var windowwidth=document.body.offsetWidth;
if (windowwidth < 500) {
$('#appzzc').css(
{'display':'',}
);

$('#lianxiang').css(
{'display':'','z-index':'',}
);

$('#searchinput').css(
{'position':'','top':'','width':'','z-index':'',}
);

$('#qingcu').css(
{'position':'','top':'','z-index':'',}
);

// 点返回键让输入框失去焦点
$('#searchinput').blur();
}
});

});
