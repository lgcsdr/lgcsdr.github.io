/* getAttribute playpause
年代音乐959 https://lhttp.qingting.fm/live/4804/64k.mp3
怀旧音乐895 https://lhttp.qingting.fm/live/5021381/64k.mp3

https://ytcastmp3.radio.cn/76/stream_11254.mp3?type=1&key=c06504ee997809532395585a96c3f22b&time=63c2c1a0
https://ytcastmp3.radio.cn/65/stream_22399.mp3?type=1&key=610a96f0dbb31e3c493a84c1f14fb0b0&time=63c2cbc1
 */
var syin=document.getElementById('sengyin');
syin.addEventListener('click', playpause, false);
var audio=null;
function playpause(){
if(audio==null){
audio=new Audio('https://ytcastmp3.radio.cn/76/stream_11254.mp3?type=1&key=c06504ee997809532395585a96c3f22b&time=63c2c1a0');
audio.pause();
}
if(audio.paused){
audio.play();
}else{
audio.load();
}
}

var simage=document.getElementById('syanniu');
simage.addEventListener('click', yinyue, false);
function yinyue(){
var mysrc=simage.getAttribute('src');
if(mysrc=='1sengyin.svg'){
simage.setAttribute('src','2sengyin.gif');
}else{
simage.setAttribute('src','1sengyin.svg');
}
}