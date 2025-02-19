// Offer Showcase Animation
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.offer-track');
    if (!track) return;

    // 复制图片实现无缝滚动
    const items = Array.from(document.querySelectorAll('.offer-item'));
    
    // 确保有足够的克隆元素以实现流畅的无缝滚动
    const cloneCount = Math.ceil(window.innerWidth / (300 + 20)); // 300px是图片宽度，20px是间距
    
    for (let i = 0; i < cloneCount; i++) {
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }

    // 优化性能
    track.style.willChange = 'transform';

    // 检测可见性，当不可见时暂停动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.target === track) {
                if (entry.isIntersecting) {
                    track.style.animationPlayState = 'running';
                } else {
                    track.style.animationPlayState = 'paused';
                }
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(track);

    // 添加触摸事件支持
    let startX = 0;
    let scrollLeft = 0;
    let isDragging = false;

    track.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
        track.style.animationPlayState = 'paused';
    });

    track.addEventListener('touchend', () => {
        isDragging = false;
        track.style.animationPlayState = 'running';
    });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        track.scrollLeft = scrollLeft - walk;
    });
}); 