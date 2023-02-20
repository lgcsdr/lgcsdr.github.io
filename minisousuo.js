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
// 输入框有值 开始 searchtext
searchtext=$(this).val();
if(searchtext.length>=1){
bindapi();

// 带起几个按钮 方便搜索
$('#google').add('#baidu').show();

$('#google').add('#baidu').css({
/* 'position':'fixed', */
/* 'position':'sticky', */
'position':'relative',
/* 'top':'50px', */
/* 'top':'50px', */
'z-index':'1',
/* 'margin':'0 10px', */
/* 'padding':'0 20px', */
/* 'left':'0',
'right':'0', */
/* 'bottom':'0', */
'height':'1.8rem',
'width':'3.9rem',
'border-radius':'20px',
'fontSize':'.75rem',
'backgroundColor':'rgb(250,50,50,.5)',
});

$('#baidu').css({
'right':'55px',
});

return false;
}
// 没值收起联想
if(searchtext.length>=''){
setTimeout(function(){
$lianxiang.hide();
},100);

$('#google').add('#baidu').hide();
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

// tv弹窗
$('#tvweisi').click(function(e){
e.stopPropagation();
if ($('#tvlianjie').is(':hidden')){
$('#tvzzc').show();
$('#tvlianjie').show(200);
}else{
$('#tvzzc').add('#tvlianjie').hide();
}
return false;
});
// 点屏幕关闭遮罩层
$('#tvzzc').add('#tvlianjie').click(function(e){
e.stopPropagation();
$('#tvzzc').hide();
$("#tvlianjie").hide(200);
return false;
});

// 安卓端 点击时 click focus
/* ($searchinput).add($qingcu).on('click focus',function(e){ */
($searchinput).add($qingcu).focus(function(e){
e.stopPropagation();
// 监视弹层 追加网址后缀 为了返回键能关闭遮罩层
if ($appzzc.css('display') === 'none'){
window.history.pushState('null','','#sbfbu=1&pi=');
$appzzc.css({'display':'block',});
}else{
$appzzc.css({'display':'none',});
}

// 隐藏新闻
$('#news').hide();
$appzzc.show();

// 到顶部
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

$searchinput.click();
});

// 返回键 popstate 返回原处
window.addEventListener('popstate',function(){
// 不延迟返回快了会带起联想在主页出现
($appzzc).add($lianxiang).hide();
setTimeout(function(){
$lianxiang.hide();
},200);

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
// 为了手机端浏览器开启黑暗模式后搜索框没有虚线
'border':'1px solid rgb(63,66,70)',
});
}


$('#google').add('#baidu').css({
/* 'position':'fixed', */
/* 'position':'sticky', */
'position':'',
/* 'top':'50px', */
/* 'top':'50px', */
'z-index':'',
/* 'margin':'0 10px', */
/* 'padding':'0 20px', */
/* 'left':'0',
'right':'0', */
/* 'bottom':'0', */
'height':'',
'width':'',
'border-radius':'',
'fontSize':'',
'backgroundColor':'',
});


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

// 返回原处
$($appzzc).add($lianxiang).add('#google').add('#baidu').click(function(){
($appzzc).add($lianxiang).hide();
$('#google').add('#baidu').show();
history.back();
});

// 回车搜索时
$searchinput.keypress(function(event){
if (event.keyCode == 13){
/* window.open('https://www.google.com/search?q='+$searchinput.val()); */
history.back();
$searchinput.blur();
}
});

// 清除按钮 监视内容变动
$searchinput.on('input',function(){
// 是否有值
val=this.value.length;
if(val>=1){
$qingcu.show();
}else{
$qingcu.hide();
}
});

// 点清空按钮时
$qingcu.click(function(){
// 隐藏自己
($qingcu).add($lianxiang).hide();
$searchinput.val('').focus();
});

});