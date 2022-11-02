var lunarInfo = new Array(0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540, 0x0b5a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,0x14b63);

var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);

var Gan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
var Zhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");

var cmStr = new Array('日', '正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊');

var nStr1 = new Array('日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十');
var nStr2 = new Array('初', '十', '廿', '卅', ' ');

var solarTerm = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至");

var Animals = new Array("(鼠)", "(牛)", "(虎)", "(兔)", "(龙)", "(蛇)", "(马)", "(羊)", "(猴)", "(鸡)", "(狗)", "(猪)");

var sFtv = new Array(
"0101*元旦",
"0106 中国13亿人口日",
"0110 中国110宣传日 黑人节",
"0202 世界湿地日",
"0204 世界抗癌症日",
"0210 世界气象日",
"0214 情人节",
"0221 国际母语日",
"0207 国际声援南非日",
"0303 全国爱耳日",
"0308 妇女节",
"0312 植树节 孙中山逝世纪念日",
"0315 消费者权益保护日",
"0321 世界森林日",
"0322 世界水日",
"0323 世界气象日",
"0324 世界防治结核病日",
"0401 愚人节",
"0407 世界卫生日",
"0422 世界地球日",
"0501 国际劳动节",
"0504 中国青年节",
"0505 全国碘缺乏病日",
"0508 世界红十字日",
"0512 国际护士节",
"0513 母亲节",
"0515 国际家庭日",
"0517 世界电信日",
"0518 国际博物馆日",
"0519 中国汶川地震哀悼日 全国助残日",
"0520 母亲节 全国学生营养日",
"0522 国际生物多样性日",
"0523 国际牛奶日",
"0530 全国助残日",
"0531 世界无烟日",
"0601 国际儿童节",
"0605 世界环境日",
"0606 全国爱眼日",
"0617 父亲节 防治荒漠化和干旱日",
"0623 国际奥林匹克日",
"0625 全国土地日",
"0626 国际反毒品日",
"0630 父亲节",
"0701 建党节 香港回归纪念日",
"0707 中国人民抗日战争纪念日",
"0711 世界人口日",
"0801 八一建军节",
"0815 日本正式宣布无条件投降日",
"0908 国际扫盲日",
"0909 毛泽东逝世纪念日",
"0910 教师节",
"0916 国际臭氧层保护日",
"0917 国际和平日",
"0918 九一八事变纪念日",
"0920 国际爱牙日",
"0927 世界旅游日",
"0928 孔子诞辰",
"1001 国庆节 国际音乐节 国际老人节",
"1002 国际减轻自然灾害日",
"1004 世界动物日",
"1007 国际住房日",
"1008 世界视觉日 全国高血压日",
"1009 世界邮政日",
"1010 辛亥革命纪念日 世界精神卫生日",
"1015 国际盲人节",
"1016 世界粮食节",
"1017 世界消除贫困日",
"1022 世界传统医药日",
"1024 联合国日",
"1025 人类天花绝迹日",
"1026 足球诞生日",
"1031 万圣节",
"1107 十月社会主义革命纪念日",
"1102 11中国记者日",
"1108 中国记者日",
"1109 消防宣传日",
"1110 世界青年节",
"1112 孙中山诞辰",
"1114 世界糖尿病日",
"1117 国际大学生节",
"1201 世界艾滋病日",
"1203 世界残疾人日",
"1209 世界足球日",
"1210 世界人权日",
"1212 西安事变纪念日",
"1213 南京大屠杀(1937年)纪念日",
"1220 澳门回归纪念日",
"1221 国际篮球日",
"1224 平安夜",
"1225 圣诞节 世界强化免疫日",
"1226 毛泽东诞辰");
var lFtv = new Array(
"0101*春节",
"0105 路神生日",
"0115 元宵节 春灯节",
"0117 红德生日1976",
"0119 金现生日1952",
"0202 龙抬头",
"0219 观世音圣诞",
"0220 国臣妈生日1950",
"0224 凤娟生日2005",
"0318 高鹏生日1983",
"0404 寒食节",
"0408 佛诞节 ",
"0417 国臣姐生日1978",
"0429 寡人生日1980*鸡蛋面来3碗",
"0505 端午节",
"0606 天贶节 姑姑节",
"0623 翠萍生日1982、黄金丹生日1972",
"0624 彝族火把节",
"0707 七夕情人节",
"0714 潘静生日1984",
"0715 盂兰节 中元节",
"0724 韩晶生日1987",
"0812 吾儿.子根生日2017",
"0815 中秋节",
"0822 吾儿.子源生日2016",
"0909 重阳节",
"1001 祭祖节 冥阴节",
"1113 臣丹生日1981",
"1117 阿弥陀佛圣诞",
"1129 臣雪生日1989",
"1208 腊八节 释迦如来成道日",
"1223 过小年",
"0100*除夕 大年夜");

function lYearDays(y) {
var i, sum = 348;
for (i = 0x8000; i > 0x8; i >>= 1) sum += (lunarInfo[y - 1900] & i) ? 1 : 0;
return (sum + leapDays(y));
}
function leapDays(y) {
if (leapMonth(y)) return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
else return (0);
}
function leapMonth(y) {
return (lunarInfo[y - 1900] & 0xf);
}
function monthDays(y, m) {
return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
}
function Lunar(objDate) {
var i, leap = 0,
temp = 0;
var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
for (i = 1900; i < 2100 && offset > 0; i++) {
temp = lYearDays(i);
offset -= temp;
}
if (offset < 0) {
offset += temp;
i--;
}
this.year = i;
leap = leapMonth(i); //闰哪个月
this.isLeap = false;
//闰月
for (i = 1; i < 13 && offset > 0; i++) {
if (leap > 0 && i == (leap + 1) && this.isLeap == false) {
--i;
this.isLeap = true;
temp = leapDays(this.year);
} else {
temp = monthDays(this.year, i);
}
//解除闰月
if (this.isLeap == true && i == (leap + 1)) this.isLeap = false;
offset -= temp;
}
if (offset == 0 && leap > 0 && i == leap + 1)
if (this.isLeap) {
this.isLeap = false;
} else {
this.isLeap = true;
--i;
}
if (offset < 0) {
offset += temp;
--i;
}
this.month = i;
this.day = offset + 1;
}

function cyclical(num) {
return (Gan[num % 10] + Zhi[num % 12]);
}

function GetTime() {
var HH = now.getHours();
var mm = now.getMinutes();
var ss = now.getSeconds();
var clock = '';
if (HH < 10)
clock += '0';
clock += HH + ':';
if (mm < 10)
clock += '0';
clock += mm + ':';
if (ss < 10)
clock += '0';
clock += ss;
var step = '';
if (HH <= 0)
step = "凌晨";
else if (HH <= 1)
step = "月黑";
else if (HH <= 2)
step = "防盗";
else if (HH <= 3)
step = "夜深";
else if (HH <= 4)
step = "鸡叫";
else if (HH <= 5)
step = "清晨";
else if (HH <= 6)
step = "起床";
else if (HH <= 7)
step = "晨练";
else if (HH <= 8)
step = "早餐";
else if (HH <= 9)
step = "奋斗";
else if (HH <= 10)
step = "振作";
else if (HH <= 11)
step = "精神";
else if (HH <= 12)
step = "午饭";
else if (HH <= 13)
step = "午休";
else if (HH <= 14)
step = "奋斗";
else if (HH <= 15)
step = "振作";
else if (HH <= 16)
step = "精神";
else if (HH <= 17)
step = "放松";
else if (HH <= 18)
step = "晚饭";
else if (HH <= 19)
step = "新闻";
else if (HH <= 20)
step = "洗漱";
else if (HH <= 21)
step = "上床";
else if (HH <= 22)
step = "晚安";
else if (HH <= 23)
step = "睡吧";
clock = clock + ':' + step;
return (clock);
}
function refreshCalendarClock() {
now = new Date();
var HH = now.getHours();
var mm = now.getMinutes();
var ss = now.getSeconds();
if (HH == 0 && mm == 0 && ss == 0)
ShowDate();
document.getElementById("sizong").innerHTML = GetTime();
}

// 有问题
function solarDay() {
var sDObj = new Date(SY, SM, SD);
var lDObj = new Lunar(sDObj);
var lDPOS = new Array(3);
var festival = '',
solarFestival = '',
lunarFestival = '',
solarTerms = '',
tmp1,tmp2;

//公历节日
for (i in sFtv)
if (sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)) {
tmp1 = Number(RegExp.$1) - (SM + 1)
tmp2 = Number(RegExp.$2) - SD
if (tmp1 == 0 && tmp2 == 0) solarFestival = RegExp.$4
}

//农历节日
for (i in lFtv)
if (lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
tmp1 = Number(RegExp.$1) - lDObj.month
tmp2 = Number(RegExp.$2) - lDObj.day
if (tmp1 == 0 && tmp2 == 0) lunarFestival = RegExp.$4
}

if (lunarFestival == '') {
if (solarFestival == '') {
tmp1 = new Date((31556925974.7 * (SY - 1900) + sTermInfo[SM * 2 + 1] * 60000) + Date.UTC(1900,0,6,2,5));
tmp2 = tmp1.getUTCDate();
if (tmp2 == SD) solarTerms = solarTerm[SM * 2 + 1];

tmp1 = new Date((31556925974.7 * (SY - 1900) + sTermInfo[SM * 2] * 60000) + Date.UTC(1900,0,6,2,5));
tmp2 = tmp1.getUTCDate();
if (tmp2 == SD) solarTerms = solarTerm[SM * 2]

if (solarTerms == '')
sFtv = '';
else sFtv = solarTerms
}
else sFtv = solarFestival
}
else sFtv = lunarFestival

var strYears = Animals[(lDObj.year - 4) % 12];
sTermInfo = '农历 ' + cDay(lDObj.month, lDObj.day) + ' ' + cyclical(lDObj.year - 1900 + 36) + strYears + '年';
if (sFtv != '')
sTermInfo += '<div id="sengri">'+sFtv+'</div>';
return (sTermInfo)
}

function cDay(m, d) {
var s = cmStr[m] + '月'
switch (d) {
case 10:
s += '初十';
break;
case 20:
s += '二十';
break;
case 30:
s += '三十';
break;
default:
s += nStr2[Math.floor(d / 10)];
s += nStr1[Math.round(d % 10)];
}
return (s);
}

function weekday() {
var getDay = '';
if (now.getDay() == 0);
if (now.getDay() == 1);
if (now.getDay() == 2);
if (now.getDay() == 3);
if (now.getDay() == 4);
if (now.getDay() == 5);
if (now.getDay() == 6);
return ('星期' + nStr1[now.getDay()]);
}
function YYMMDD() {
return ( + (SM + 1) + '月' + SD + '号 ' + weekday() + ' ' + SY + '年')
}

function ShowDate() {
now = new Date();
SM = now.getMonth();
SD = now.getDate();
SY = now.getFullYear();
var str = '<div id="sizong">' + GetTime() + '</div><div id="gongli">' + YYMMDD() + '</div><div id="yinli">' + solarDay() + '</div>'
document.getElementById("shijian").innerHTML = str;
return false;
}
function ShowTime() {
ShowDate();
setInterval('refreshCalendarClock()', 1000);
return false;
}
ShowTime();

// 主题
var colors=['light',''];
var colorIndex = -3;
var app=new(function() {
document.querySelector('#shijian').addEventListener('click', onThemeClick);
setTheme();
function onThemeClick() {
colorIndex=colorIndex < colors.length - 1 ? colorIndex + 1:0;
localStorage.shijian=colorIndex;
setTheme();
}
function setTheme() {
var shijian=localStorage.shijian > - 1 ? colors[localStorage.shijian]:'';
document.documentElement.setAttribute('miniweb', shijian);
}
return false;
})();
