var btnss=document.getElementsByClassName('zhilian');
for(var z in btnss){
btnss[z].onclick=function(){
window.open(this.getAttribute('zhilianurl'));
return false;
}
}

var sousuoss=document.getElementsByClassName('sousuo');
for(var i in sousuoss){
sousuoss[i].onclick=function(){
s=''+document.getElementById('searchinput').value;
window.open(
this.getAttribute('sousuourl')+(s?''+this.getAttribute('s')+(s):'')
);
return false;
}
}

var weibawb=document.getElementsByClassName('weiba');
for(var w in weibawb){
weibawb[w].onclick=function(){
s=''+document.getElementById('searchinput').value;
window.open(
this.getAttribute('weibaurl')+(s?''+this.getAttribute('s')+(s):'')+(s?''+this.getAttribute('sq')+(''):'')
);
return false;
}
}

// 联想
$(function(){
var $txhezi=$('#txhezi');
var $searchinput=$('#searchinput');
var $lianxiang=$('#lianxiang');
var $qingcu=$('#qingcu');
var $appzzc=$('#appzzc');
searchtext='';

function callback(data){
if (data.AS.FullResults != 0){
var data=data.AS.Results[0].Suggests;
str='';
for (var i=0; i<data.length; i++){
if(i<=6){
str+='<li>'+data[i].Txt+'</li>';
}
}
$lianxiang.html(str);
$lianxiang.show();
}
};

function bindapi(){
$.ajax({
url:'https://api.bing.com/qsonhs.aspx?type=cb&q='+searchtext,
dataType:'jsonp',
jsonp:'cb',
success:callback,
})
};

// 获取关键字 keyup=focus click
$searchinput.on('click keyup',function(){
// 阻止监视关键字
if(event.keyCode == 38 || event.keyCode == 40 || event.keyCode == 32){
return false;
}
// 输入框有值 开始联想 searchtext
searchtext=$(this).val();
if(searchtext.length>=1){
bindapi();
$lianxiang.show();

// 带起几个按钮 方便搜索
$('#google').add('#youtube').add('#baidu').add('#zhihu').add('#wiki').show().css({
'position':'fixed',
'top':'340px',
'z-index':'1',
'height':'1.8rem',
'width':'3.9rem',
'border-radius':'20px',
'fontSize':'.75rem',
'color':'rgb(5,5,5)',
'backgroundColor':'rgb(42,174,103,.5)',
});
if(window.matchMedia('(prefers-color-scheme:dark)').matches){
$('#google').add('#youtube').add('#baidu').add('#zhihu').add('#wiki').css({
'color':'rgb(255,255,255)',
'backgroundColor':'rgb(250,50,50,.5)',
});
}

$('#google').css({
'left':'9px',
});
$('#youtube').css({
'left':'77px',
});
$('#baidu').css({
'left':'145px',
});
$('#zhihu').css({
'left':'213px',
});
$('#wiki').css({
'left':'281px',
});
return false;
}

// 没值收起联想
if(searchtext.length>=''){
setTimeout(function(){
$lianxiang.hide();
},100);

$('#google').add('#youtube').add('#baidu').add('#zhihu').add('#wiki').hide();
return false;
}
});

// 点联想li时
$lianxiang.on('click','li',function(){
$searchinput.val($(this).html());
});

// 上下键
$searchinput.keydown(function(e){
var keyCode=(event.keyCode);
if(keyCode == 38){
// 阻止光标跑到第一
event.preventDefault();
var active=$('li.active');
if (active.length){
var prev=active.prev();
if (prev.length){
prev.addClass('active').siblings().removeClass('active');
}else{
$('li:last').addClass('active').siblings().removeClass('active');
}
}else{
$('li:last').addClass('active');
}
$('input').val($('li.active').text());
}

else if (e.keyCode == 40){
event.preventDefault();
var active=$('li.active');
if (active.length){
var next=active.next();
if (next.length){
next.addClass('active').siblings().removeClass('active');
}else{
$('li:first').addClass('active').siblings().removeClass('active');
}
}else{
$('li:first').addClass('active');
}
$('input').val($('li.active').text());
}
});

// fm弹窗
$('#fmweisi').click(function(e){
e.stopPropagation();
if ($('#fmlianjie').is(':hidden')){
$('#fmzzc').show();
$('#fmlianjie').show();
}else{
$('#fmzzc').add('#fmlianjie').hide();
}
return false;
});
// tv弹窗
$('#tvweisi').click(function(e){
e.stopPropagation();
if ($('#tvlianjie').is(':hidden')){
$('#tvzzc').show();
$('#tvlianjie').show();
}else{
$('#tvzzc').add('#tvlianjie').hide();
}
return false;
});
// 点屏幕关闭遮罩层
$('#fmzzc').add('#fmlianjie').add('#tvzzc').add('#tvlianjie').click(function(e){
e.stopPropagation();
$('#fmzzc').add('#tvzzc').hide();
$('#fmlianjie').add("#tvlianjie").hide(200);
return false;
});

// 安卓端 点击时 click focus
/* ($searchinput).add($qingcu).on('click focus',function(e){ */
($searchinput).add($qingcu).focus(function(e){
e.stopPropagation();
// 监视弹层 追加网址尾巴 为了返回键能关闭遮罩层
if ($appzzc.css('display') === 'none'){
window.history.pushState('null','','#sbfbu=1&pi=');
$appzzc.css({'display':'block',});
}else{
$appzzc.css({'display':'none',});
}

// 隐藏新闻
$('#news').hide();
// 搜索框到顶部
$txhezi.css({
'position':'fixed',
'top':'2px',
'width':'90%',
'z-index':'1',
'border':'0',
'border-radius':'0',
'box-shadow':'none',
'border-bottom':'1px solid rgb(150,160,170)',
});
if(window.matchMedia('(prefers-color-scheme:dark)').matches){
$txhezi.css({'border-bottom':'1px solid rgb(63,66,70)',});}

$appzzc.show();
$searchinput.click();





});
/* $searchinput.focus(); */
/* $searchinput.click(); */
/* $txhezi.click(); */
/* $txhezi.focus(); */



// 点返回键返回原处 popstate
window.addEventListener('popstate',function(){
// 不延迟返回快了会带起联想在主页出现
($appzzc).add($lianxiang).hide();
setTimeout(function(){
$lianxiang.hide();
},200);

$('#google').add('#youtube').add('#baidu').add('#zhihu').add('#wiki').show().css({
'position':'',
'top':'',
'z-index':'',
'height':'',
'width':'',
'border-radius':'',
'fontSize':'',
'color':'',
'backgroundColor':'',
});

$txhezi.css({
'position':'',
'top':'',
'width':'',
'z-index':'',
'border':'0',
'border-radius':'24px',
'box-shadow':'0 0 90px rgb(7,193,96)',
});
if(window.matchMedia('(prefers-color-scheme:dark)').matches){
$txhezi.css({
'box-shadow':'0 0 90px rgb(255,255,255)',
// 为了手机端浏览器自带黑暗模式开启后搜索框没有了虚线
'border':'1px solid rgb(63,66,70)',
});
}

// 有没有值
if($searchinput.val()==''){
$txhezi.css({
'border':'1px solid rgb(150,160,170)',
'box-shadow':'none',
});
if(window.matchMedia('(prefers-color-scheme:dark)').matches){
$txhezi.css({
'border':'1px solid rgb(63,66,70)',
});
}
$('#news').show();
}

$searchinput.blur();


},false);

// 点击时 去掉网址尾巴返回原处 history
$($appzzc).add($lianxiang).add('#google').add('#youtube').add('#baidu').add('#zhihu').add('#wiki').click(function(){
($appzzc).add($lianxiang).hide();
history.back();


});

// 回车搜索时 返回原处
$searchinput.keypress(function(event){
if (event.keyCode == 13){
history.back();
$searchinput.blur();
}
});

// 清除按钮 监视 input 是否有值
$searchinput.on('input',function(){
val=this.value.length;
if(val>=1){
$qingcu.show();
}else{
$qingcu.hide();
}
});

// 点清空按钮时 隐藏自己
$qingcu.click(function(){
($qingcu).add($lianxiang).hide();
$searchinput.val('').focus();
});


/* $searchinput.val('2').focus(); */

/* $searchinput.click(); */
/* $searchinput.focus(); */




});


/* window.onload = function() {
  var inputBox = document.getElementById("searchinput");
  inputBox.focus();
  inputBox.scrollIntoView(true);
};
 */
/* window.onload = function() {
  var inputBox = document.getElementById("searchinput");
  inputBox.focus();
  inputBox.click();
}; */

  window.onload = function() {
    document.querySelector('input').focus();
  }