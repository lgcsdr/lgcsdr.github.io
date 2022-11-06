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

var houzui = document.getElementById('nivod');
houzui.onclick=function(){
window.open(this.getAttribute('nivodurl')+
document.getElementById('searchinput').value+('&catId=1'));
return false;
}

// 联想
$(function(){
var mysearch=(function(){
// 联想上下键
$("#searchinput").keydown(function(e){
var keycode = (event.keyCode);
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

// 搜索联想 searchKey
var $searchinput=$('#searchinput'),
$lianxiang=$('#lianxiang'),
searchKey='';
function callback(data){
if (data.AS.FullResults != 0){
var data=data.AS.Results[0].Suggests;
str='';
for (var i=0; i<data.length; i++){
if(i<=7){
str+='<li>'+data[i].Txt+'</li>';
}
}
$lianxiang.html(str);
$lianxiang.show();
}
};

function bindHtml(){
$.ajax({
url:'https://api.bing.com/qsonhs.aspx?type=cb&q='+searchKey,
dataType:'jsonp',
jsonp:'cb',
success:callback,
})
};

// 获取搜索框关键字 keyup=focus click
function init(){
$('#searchinput').on('click keyup',function(e){
e.stopPropagation();
// 按上下键不监听
if(event.keyCode == 38 || event.keyCode == 40 || event.keyCode == 32){
return false;
}
// 输入框有值 开始 searchKey
searchKey=$(this).val();
if(searchKey.length >= 1){
bindHtml();
$('#lianxiang').css({'display':'block','z-index':'1',});
return false;
}
// 没值联想收起
if(searchKey.length === 0){
$('#lianxiang').hide();
/* $('#lianxiang').css({'display':'','z-index':'',}); */
return false;
}
});
// 绑定li
$lianxiang.on('click','li', function(){
$searchinput.val($(this).html())
});
}
return{init:init}
return false;
})();
mysearch.init();

// 零件
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

// 点击搜索框时
$('#searchinput').click(function(){
// 隐藏新闻
$('#news').hide();
// input聚焦时
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
}
});

// 点击清空按钮时
$('#qingcu').click(function(){
// 清空输入框内容 不失焦点
$('#searchinput').val('').focus();
// 清空后隐藏自己
$('#qingcu').hide();
});

// 失去指针焦点时判断输入框是否有值
$('#searchinput').blur(function(){
if($(this).val()==''){
$('#qingcu').hide();
$('#news').show();
// 美化
$('#txhezi').css({'box-shadow':'none',});
}
// 定时器防止点不住联想
setTimeout(function(){
$('#lianxiang').slideUp(100);
},100);
});

// 安卓端 click focus 点击小零件时
$('#searchinput').add('#qingcu').click(function(e){
e.stopPropagation();
// 监听弹层 追加网址后缀 为了返回键能关闭遮罩层
if ($('#appzzc').css('display') === 'none'){
window.history.pushState('null','','#sbfbu=1&pi=');
$('#appzzc').css({'display':'block',});
}else{
$('#appzzc').css({'display':'none',});
}
// 到顶部
$('#txhezi').css({
'position':'fixed',
'top':'2px',
'width':'90%',
'z-index':'1',
'border':'0',
'border-bottom':'1px solid rgb(150,160,170)',
'border-radius':'0',
'box-shadow':'none',
});

if(window.matchMedia('(prefers-color-scheme: dark)').matches){
$('#txhezi').css({
'border-bottom':'1px solid rgb(63,66,70)',
});
}

$('#appzzc').css({'display':'block',});
});

// 返回原处
$('#appzzc').add('#lianxiang').click(function(){
$('#txhezi').css({
'position':'',
'top':'',
'width':'',
'z-index':'',
'border':'1px solid rgb(150,160,170)',
'border-radius':'24px',
'box-shadow':'0 0 90px rgb(7,193,96)',
});

if(window.matchMedia('(prefers-color-scheme: dark)').matches){
$('#txhezi').css({
'border':'1px solid rgb(63,66,70)',
'box-shadow':'0 0 90px rgb(255,255,255)',
});
}

$('#lianxiang').css({'display':'','z-index':'',});
$('#appzzc').css({'display':'',});
// 返回主页
history.back();
});

// 回车键直接搜索时
$("#searchinput").keydown(function(){
if (event.keyCode == 13) {
// 不定时无法响应form/action
setTimeout(function(){
// 回车返回主页
history.back();
// 回车后让输入框失去焦点
$('#searchinput').blur();
},2000);
}
});

// 返回键 popstate
window.addEventListener('popstate',function(){
// 返回原处
$('#txhezi').css({
'position':'',
'top':'',
'width':'',
'z-index':'',
'border':'1px solid rgb(150,160,170)',
'border-radius':'24px',
'box-shadow':'0 0 90px rgb(7,193,96)',
});

if(window.matchMedia('(prefers-color-scheme: dark)').matches){
$('#txhezi').css({
'border':'1px solid rgb(63,66,70)',
'box-shadow':'0 0 90px rgb(255,255,255)',
});
}

$('#lianxiang').css({'display':'','z-index':'',});
$('#appzzc').css({'display':'',});

// 让输入框失去焦点
$('#searchinput').blur();
},false);

});