// 获取所有缩略图
const thumbnails = document.querySelectorAll('.thumbnail');

// 遍历每个缩略图，添加点击事件
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // 更新主图像的 src 属性为被点击的缩略图的 src
        const newSrc = thumbnail.src; // 获取缩略图的 src
        document.getElementById('main-image').src = newSrc; // 更新主图像
    });
});
