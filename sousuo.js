// input
window.onload=function(){
var btns=document.getElementsByClassName('btn');
for(var i in btns)
{ btns[i].onclick=function(){
window.open(this.getAttribute('data-url')+document.getElementById('searchInput').value);
} } }
// 联想开始

var mySearch=(function(){
var $searchInput=$("#searchInput"),
$viewContent=$("#viewContent"),
searchKey='';
function callBack(data){
var str='';
data=data.s;
for(var i=0,len=data.length;i<len;i++){
// 默认显示?条
if(i<=8){
str+="<li>"+data[i]+"</li>";
} }
$viewContent.html(str);
$viewContent.show(); };
function bindHtml(){
// getData
$.ajax({url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + searchKey,
dataType:'jsonp',
jsonp:'cb',
success:callBack })
};
function init(){
// 获取搜索框的关键字
$searchInput.on('focus keyup',function (){
// 把空格开头和结尾换成空字符串
searchKey=$(this).val().replace(/(^ +| +$)/g,'');
if(searchKey.length>0)
//如果输入框有值
{ bindHtml();
return false;
}
// 输入框没有值
$viewContent.stop().slideUp(300);
}).on('blur',function (){
// 失去焦点联想收缩
setTimeout(function (){
$viewContent.stop().slideUp(300);
}, 100)
});
// 给li绑定方法
$viewContent.on('click',"li", function (e){
$searchInput.val($(this).html());
});
};
return {
init: init
}
})();
mySearch.init();
