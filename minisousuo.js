// 乱七八糟测试 input button
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
var str='';
var data=data.s;
for(var i=0,len=data.length;i<len;i++){
// 默认显示?条
if(i<=7){
str+='<li>'+data[i]+'</li>';
}
}
$lianxiang.html(str);
$lianxiang.show();
};

// 联想上下键
$("#searchinput").keydown(function(e){
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
$.ajax({
url:'https://suggestion.baidu.com/su?wd='+searchKey,
dataType:'jsonp',
jsonp:'cb',
success:callback,
})
};

// 清除搜索框内容
var searchResult=document.getElementById("lianxiang");
function clearContent(){
var size = searchResult.childNodes.length;
for(var i = size - 1; i >= 0; i--) {
searchResult.removeChild(searchResult.childNodes[i]);
}
}

// 获取搜索框关键字 focus click keyup
function init(){
$('#searchinput').on('focus keyup',function(){
// 按上下键不监听
if(event.keyCode == 38 || event.keyCode == 40 || event.keyCode == 32){
return false;
}

// 如果输入框有值
searchKey=$(this).val();
if(searchKey.length>0){
bindHtml();
}
// 没有值收缩
if(this.value.length === 0){
clearContent();
}
});

// 失去焦点收缩 手机
$("#searchinput").blur(function(){
setTimeout(function(){
$('#lianxiang').slideUp(50);
},50);
});

// 绑定li
$lianxiang.on('click','li', function(){
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

// 判断输入框是否有值 失去指针焦点时候
$('#searchinput').blur(function(){
if($(this).val()==''){
$('#qingcu').hide();
$('#news').show();
// 美化
$('#searchinput').css({'box-shadow':'none',});
}
});

// 安卓端
// focus $('#searchinput').add('#qingcu').click
$('#searchinput').focus(function(){
// 点搜索框显示遮罩层,按着搜索框不动到顶部
$('#searchinput').css({'position':'fixed','top':'2px','width':'90%','z-index':'1','box-shadow':'none',});
$('#qingcu').css({'position':'fixed','top':'11px','z-index':'1',});
$('#lianxiang').css({'display':'block','z-index':'1',});
$('#appzzc').css({'display':'block',});

// 点搜索框追加网址后缀#, 为了返回键能关闭遮罩层
window.history.pushState('','','#sbfbu=1&pi=');
});

// click 对应 focus
$('#appzzc').add('#lianxiang').click(function(){
// 点遮罩层,联想,关闭遮罩层,搜索框返回原处
$('#searchinput').css({'position':'','top':'','width':'','z-index':'','box-shadow':'0 0 90px rgb(7,193,96)',});
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
$('#searchinput').css({'box-shadow':'0 0 90px rgb(255,255,255)',});
}
$('#qingcu').css({'position':'','top':'','z-index':'',});
$('#lianxiang').css({'display':'','z-index':'',});
$('#appzzc').css({'display':'',});

// 点遮罩层或联想,返回主页
window.history.back();
});


// 回车键直接搜索的时候
$("#searchinput").keydown(function() {
if (event.keyCode == 13) {
// 不定时无法响应form/action
setTimeout(function(){
// 安卓端回车后,关闭遮罩层,联想和搜索框,返回原处
$('#searchinput').css({'position':'','top':'','width':'','z-index':'','box-shadow':'0 0 90px rgb(7,193,96)',});
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
$('#searchinput').css({'box-shadow':'0 0 90px rgb(255,255,255)',});
}
$('#qingcu').css({'position':'','top':'','z-index':'',});
$('#lianxiang').css({'display':'','z-index':'',});
$('#appzzc').css({'display':'',});

// 回车后返回主页
window.history.back();
// 回车后让输入框失去焦点
$('#searchinput').blur();
},2000);
}
});


// 返回键 popstate
window.addEventListener('popstate',function(){
// 点返回键关闭遮罩层,input返回原处
$('#searchinput').css({'position':'','top':'','width':'','z-index':'','box-shadow':'0 0 90px rgb(7,193,96)',});
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
$('#searchinput').css({'box-shadow':'0 0 90px rgb(255,255,255)',});
}
$('#qingcu').css({'position':'','top':'','z-index':'',});
$('#lianxiang').css({'display':'','z-index':'',});
$('#appzzc').css({'display':'',});

// 点返回键让输入框失去焦点
$('#searchinput').blur();
});

});
