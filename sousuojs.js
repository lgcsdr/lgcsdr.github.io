window.onload=function(){
var btns=document.getElementsByClassName('btn');
for(var i in btns)
{
btns[i].onclick=function(){
window.open(this.getAttribute('data-url')+document.getElementById('wd').value);
} } }
