// getAttribute playpause
var simage=document.getElementById('syanniu');
simage.onclick=function(){
var mysrc=simage.getAttribute('src');
if(mysrc=='1sengyin.svg'){
simage.setAttribute('src','2sengyin.gif');
}else{
simage.setAttribute('src','1sengyin.svg');
}
}

var syin=document.getElementById('sengyin');
syin.addEventListener('click', playpause, false);
var audio=null;
function playpause(){
if(audio==null){
audio=new Audio('https://lhttp.qingting.fm/live/5021381/64k.mp3');
audio.pause();
}
if(audio.paused){
audio.play();
}else{
audio.load();
}
}