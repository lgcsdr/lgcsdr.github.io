var says=[


'<details><summary>增广贤文：一寸光阴一寸金，寸金难买寸光阴。</summary>【解释】光阴要比黄金还宝贵，因为光阴一去就不会返回，这是无论多少黄金都难以买到的。</details>',


'<details><summary>增广贤文：</summary></details>'









];
var timer=null;
var ziyue=document.getElementById('ziyue');
$(document).ready(function(){
var ran=Math.floor(Math.random()*says.length);
ziyue.innerHTML=says[ran];
} );

/* 名人名言，弟子规，千字文，百家姓，三字经，四书五经， */
