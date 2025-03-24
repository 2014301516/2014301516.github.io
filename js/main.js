// 页面滚动动画效果
const sections = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // 限制最大隐藏距离为 80px
    const hideDistance = Math.min(scrollTop, 80);
    header.style.top = `-${hideDistance}px`;
  });

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // 限制最大隐藏距离为 80px
    const hideDistance = Math.min(scrollTop, 80);
    header.style.top = `-${hideDistance}px`;
  });
  
// 回到顶部按钮
const topBtn = document.getElementById('topBtn');
topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // 向下滚动，隐藏导航栏
        header.style.top = '-80px'; // 根据导航栏高度调整
    } else {
        // 向上滚动，显示导航栏
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
