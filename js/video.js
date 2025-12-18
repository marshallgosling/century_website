// 兼容DOMContentLoaded（旧版浏览器）
document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('introduceVideo');
  const soundBtn = document.getElementById('videoSoundBtn');
  const controlBtn = document.getElementById('videoControlBtn');

  // 兼容视频播放事件（前缀）
  const playEvent = 'play' in video ? 'play' : 'webkitplay';
  const pauseEvent = 'pause' in video ? 'pause' : 'webkitpause';

  // 1. 声音控制：兼容静音/取消静音
  soundBtn.addEventListener('click', function () {
    if (video.muted) {
      video.muted = false;
      soundBtn.textContent = '关闭声音';
    } else {
      video.muted = true;
      soundBtn.textContent = '开启声音';
    }
    // 修复部分浏览器点击后需手动触发播放
    if (video.paused) {
      video.play().catch(function (e) {
        console.log('播放失败（浏览器限制）：', e);
        // 兜底提示
        alert('请点击视频区域手动播放');
      });
    }
  });

  // 2. 播放/暂停控制
  controlBtn.addEventListener('click', function () {
    if (video.paused) {
      video.play().catch(function (e) {
        console.log('播放失败：', e);
      });
      controlBtn.textContent = '暂停播放';
    } else {
      video.pause();
      controlBtn.textContent = '继续播放';
    }
  });

  // 3. 兼容视频加载失败：显示降级内容
  video.addEventListener('error', function () {
    const fallback = document.querySelector('.video-fallback');
    if (fallback) {
      fallback.style.display = 'flex';
    }
    console.log('视频加载失败，已切换到降级方案');
  });

  // 4. 兼容自动播放失败：提示用户手动播放
  video.addEventListener('loadeddata', function () {
    if (video.paused) {
      console.log('自动播放失败，等待用户交互');
      // 可选：显示提示文案
      const tip = document.createElement('div');
      tip.style.cssText = 'position:absolute;bottom:60px;left:50%;transform:translateX(-50%);color:#fff;background:rgba(0,0,0,0.5);padding:8px 16px;border-radius:4px;font-size:12px';
      tip.textContent = '点击视频或按钮开始播放';
      document.querySelector('.video-content').appendChild(tip);
    }
  });

  // 5. 兼容旧版浏览器的play/pause事件
  video.addEventListener(playEvent, function () {
    controlBtn.textContent = '暂停播放';
  });
  video.addEventListener(pauseEvent, function () {
    controlBtn.textContent = '继续播放';
  });
});