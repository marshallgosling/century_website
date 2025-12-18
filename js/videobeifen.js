$(function () {
  const video = document.getElementById('introduceVideo');
  let isInteracted = false; // 标记是否有用户交互

  // 监听任意用户交互（点击/触摸/键盘）
  const enableAudioPlay = () => {
    if (!isInteracted) {
      video.muted = false; // 取消静音
      video.play().catch(err => console.error('播放失败：', err));
      isInteracted = true;
      // 移除监听，避免重复触发
      document.removeEventListener('click', enableAudioPlay);
      document.removeEventListener('touchstart', enableAudioPlay);
    }
  };

  // 绑定交互事件（覆盖PC/移动端）
  document.addEventListener('click', enableAudioPlay);
  document.addEventListener('touchstart', enableAudioPlay);

  // 可选：播放后提示
  video.addEventListener('play', () => {
    console.log('视频已非静音播放');
  });



})