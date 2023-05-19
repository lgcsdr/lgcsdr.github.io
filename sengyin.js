var syin=document.getElementById('sengyin');
syin.addEventListener('click', playpause, false);
var audio=null;
function playpause(){
if(audio==null){
audio=new Audio('https://uk2.streamingpulse.com/ssl/vcr1');
audio.pause(); /* 暂停 */
}
if(audio.paused){
audio.play(); /* 播放 */
}else{
audio.load(); /* 重新加载 */
}
}

var simage=document.getElementById('syanniu');
simage.addEventListener('click', yinyue, false);
function yinyue(){
var mysrc=simage.getAttribute('src');
if(mysrc=='1sengyin.png'){
simage.setAttribute('src','2sengyin.gif');
}else{
simage.setAttribute('src','1sengyin.png');
}
}

/*
getAttribute playpause

纯音乐
http://174.36.206.197:8000/stream?type=http&nocache=62263
https://uk2.streamingpulse.com/ssl/vcr1
https://uk2.streamingpulse.com/ssl/vcr2
舞曲的在线广播电台
https://securestreams5.autopo.st:1827/stream
https://retrowave.ru/audio/f16634c904054356c844418d7261a864408607bf.mp3?client_id=72f1f3786c2a1312a14218b942fab596

https://www.hlsplayer.net/#type=m3u8&src=https://sk.cri.cn/915.m3u8
https://www.hlsplayer.org/play?url=

https://sk.cri.cn/915.m3u8
https://http-live.sr.se/p4malmo-aac-192

895怀集音乐之声
https://lhttp.qtfm.cn/live/4804/64k.mp3
959年代音乐怀旧好声音
https://lhttp.qtfm.cn/live/5021381/64k.mp3

*/