var swiper = new Swiper(".swiper", {
// 循环
loop:true,
// 每个视图的幻灯片
slidesPerView:'auto',
// 可视滑道数
/* loopedSlides:1, */
// 观看幻灯片进度
watchSlidesProgress:true,

// 自由模式
freeMode:true,
// 关闭动量 停止不会滑动
freeModeMomentum:false,
// 动量值 移动惯量 值越大 滑动距离越大
freeModeMomentumRatio:0,
// 惯性速度 值越大 抬手后滑的越快
freeModeMomentumVelocityRatio:0,

// 鼠标滚轮
mousewheel:true,

// 居中幻灯片
/* centeredSlides:true, */

// 间距
/* spaceBetween:0, */
});