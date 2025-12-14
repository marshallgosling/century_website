$(function () {
  // 手风琴交互逻辑
  $(".accordion-item").hover(function () {
    $(".accordion-item").removeClass("active");
    $(this).addClass("active");
  });

  // 强制渲染圆角，避免兼容性问题
  $(document).ready(function () {
    $(".accordion-item, .accordion-img-wrap, .content").each(function () {
      $(this).css("border-radius", $(this).css("border-radius"));
    });
  });
  const video = document.getElementById('currentMedia');
  // 核心：等待页面+视频资源就绪后播放
  function initVideoPlay() {
    // 检查视频是否可播放（readyState>=2表示有足够数据）
    if (video.readyState < 2) {
      // 等待元数据加载完成
      video.addEventListener('loadedmetadata', initVideoPlay, { once: true });
      return;
    }
    // 尝试播放，失败则显示控件让用户手动操作
    video.play().catch(() => {
      video.controls = true;
      video.innerHTML += '<div style="text-align:center;">点击播放按钮开始播放</div>';
    });
  }

  // 页面加载完成后初始化
  window.addEventListener('load', initVideoPlay);
  // 标签页切回前台时重试播放
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && video.paused) {
      initVideoPlay();
    }
  });
  // 监听加载错误，提示资源问题
  video.addEventListener('error', () => {
    video.controls = false;
    video.innerHTML = '视频加载失败，请刷新重试';
  });
})