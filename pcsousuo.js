// 乱七八糟测试 input button
// 直连
var zhilianzl=document.getElementsByClassName('zhilian');
for(var z in zhilianzl){
zhilianzl[z].onclick=function(){
window.open(this.getAttribute('zhilianurl'));
return false;
}
}
// 搜索
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

// 给某个搜索加尾巴,特殊处理
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
searchtext='';

function callback(data){
// 必应api
if (data.AS.FullResults != 0){
var data=data.AS.Results[0].Suggests;
str='';
// 百度
/* var str='';
var data=data.s;
for(var i=0, len=data.length; i<len; i++) */
// 必应
for (var i=0; i<data.length; i++){
if(i<=7){
// 百度
/* str+='<li>'+data[i]+'</li>'; */
str+='<li>'+data[i].Txt+'</li>';
}
}
$lianxiang.html(str);
$lianxiang.show();
// 监视联想出现 改变输入框样式
$txhezi.css({'border-radius':'0 0 24px 24px',});
}
};

function bindapi(){
$.ajax({
/* url:'https://suggestion.baidu.com/su?wd='+searchtext, */
/* url:'https://sg1.api.bing.com/qsonhs.aspx?type=cb&q='+searchtext, */
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

// 有值开始联想 searchtext=$searchinput.val();
searchtext=$(this).val();
if(searchtext.length>=1){
bindapi();
return false;
}

// 没值收起联想
if(searchtext.length==''){
// 不延迟删除键快了会带起联想
setTimeout(function(){
$lianxiang.hide();
$txhezi.css({'border-radius':'24px',});
},100);
return false;
}
});

// 点联想li时
$lianxiang.on('click','li',function(){
$searchinput.val($(this).html());

// 为了兼容讯飞中文
$qingcu.show();
$('#news').hide();
$txhezi.css({
'box-shadow':'0 0 90px rgb(7,193,96),0 0 3px rgb(200,200,200)',
});
if(window.matchMedia('(prefers-color-scheme:dark)').matches){
$txhezi.css({
'box-shadow':'0 0 90px rgb(255,255,255),0 0 3px rgb(41,42,43)',
});
}
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

// 直流弹窗
$('#zlweisi').click(function(e){
// 阻止冒泡
e.stopPropagation();
if ($('#zllianjie').is(':hidden')){
$('#zlzzc').add('#zllianjie').show();
}else{
$('#zlzzc').add('#zllianjie').hide();
}
return false;
});

// fm弹窗
$('#fmweisi').click(function(e){
e.stopPropagation();
if ($('#fmlianjie').is(':hidden')){
$('#fmzzc').add('#fmlianjie').show();
}else{
$('#fmzzc').add('#fmlianjie').hide();
}
return false;
});

// dj弹窗

$('#djyinyue').click(function(e){
e.stopPropagation();
if ($('#djtlianjie').is(':hidden')){
$('#djzzc').add('#djtlianjie').show();
}else{
$('#djzzc').add('#djtlianjie').hide();
}
return false;
});




// tv弹窗
$('#tvweisi').click(function(e){
e.stopPropagation();
if ($('#tvlianjie').is(':hidden')){
$('#tvzzc').add('#tvlianjie').show();
}else{
$('#tvzzc').add('#tvlianjie').hide();
}
return false;
});

// gpt弹窗
$('#gptai').click(function(e){
e.stopPropagation();
if ($('#gptlianjie').is(':hidden')){
$('#gptzzc').add('#gptlianjie').show();
}else{
$('#gptzzc').add('#gptlianjie').hide();
}
return false;
});

// 点屏幕关闭遮罩层
$('#zlzzc').add('#zllianjie').add('#fmzzc').add('#fmlianjie').add('#djzzc').add('#djtlianjie').add('#tvzzc').add('#tvlianjie').add('#gptzzc').add('#gptlianjie').click(function(e){
e.stopPropagation();
$('#zlzzc').add('#fmzzc').add('#djzzc').add('#tvzzc').add('#gptzzc').hide();
$('#zllianjie').add('#fmlianjie').add('#djtlianjie').add("#tvlianjie").add('#gptlianjie').hide(200);
return false;
});

// 点搜索框时
$searchinput.click(function(e){
e.stopPropagation();
// 隐藏新闻
$('#news').hide();
// input聚焦时滚到屏幕可见区域
this.scrollIntoView();
// 美化
$txhezi.css({
'position':'relative',
'border':'1px solid transparent',
'background-color':'rgba(255,255,255,.5)',
'box-shadow':'0 0 90px rgb(7,193,96),0 0 3px rgb(200,200,200)',
});
if(window.matchMedia('(prefers-color-scheme:dark)').matches){
$txhezi.css({
'background-color':'rgba(61,62,63,.5)',
'box-shadow':'0 0 90px rgb(255,255,255),0 0 3px rgb(41,42,43)',
});}
});

// 点窗口时
$(window.document).click(function(){
$lianxiang.hide();
$txhezi.css({'border-radius':'24px',});
});

// 回车搜索时 keydown keypress
$searchinput.keypress(function(event){
if (event.keyCode == 13){
/* window.open('https://www.google.com/search?q='+$searchinput.val()); */
// 隐藏联想 输入框恢复原样
$(window.document).click();
// 失去焦点
$searchinput.blur();
}
});

// 清除按钮 监视 input
$searchinput.on('input',function(){
// 是否有值
val=this.value.length;
if(val>=1){
// 显示
$qingcu.show();
}else{
$qingcu.hide();
}
});

// 点清空按钮时
$qingcu.click(function(){
// 清空后隐藏自己
$qingcu.hide();
// 清空后不失焦点
$searchinput.val('').focus();
});

// 失去焦点时 是否有值
$searchinput.blur(function(){
if($(this).val()==''){
$qingcu.hide();
$('#news').show();
// 美化
$txhezi.css({
'border':'1px solid rgb(150,160,170)',
'background-color':'transparent',
'box-shadow':'none',
});
if(window.matchMedia('(prefers-color-scheme:dark)').matches){
$txhezi.css({'border':'1px solid rgb(93,96,100)',});}
}
});

});

// 天气 document.getElementById('tqjingmian').innerHTML=
if(window.matchMedia('(prefers-color-scheme:light)').matches){
document.getElementById('tqyubao').innerHTML='<iframe class="huangse" width="100%" height="15" scrolling="no" frameborder="0" allowtransparency="true" src="https://i.tianqi.com/?c=code&a=getcode&id=63&icon=0&align=center&fontsize=10&color=555"></iframe>'

/* document.getElementById("tqyubao").src="https://tianqiapi.com/api.php?style=tc&align=center&fontsize=10&color=555&city=青岛"; */

/* https://i.tianqi.com/?c=code&a=getcode&id=41&icon=0
https://i.tianqi.com/?c=code&a=getcode&id=63&icon=0 */

}

if(window.matchMedia('(prefers-color-scheme:dark)').matches){
document.getElementById('tqyubao').innerHTML='<iframe class="huangse" width="100%" height="15" scrolling="no" frameborder="0" allowtransparency="true" src="https://i.tianqi.com/?c=code&a=getcode&id=63&icon=0&align=center&fontsize=10&color=c8c8c8"></iframe>'

/* document.getElementById("tqyubao").src="https://tianqiapi.com/api.php?style=tc&align=center&fontsize=10&color=fff&city=青岛"; */
}