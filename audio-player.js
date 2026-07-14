document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const audio = document.getElementById('background-audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const togglePlayerBtn = document.getElementById('toggle-player');
    const expandPlayerBtn = document.getElementById('expand-player');
    const audioPlayerBody = document.getElementById('audio-player-body');
    const audioPlayerCollapsed = document.getElementById('audio-player-collapsed');
    const audioPlayerHeader = document.getElementById('audio-player-header');

    // 恢復播放器位置
    const savedPosition = JSON.parse(localStorage.getItem('audioPlayerPosition'));
    if (savedPosition) {
        audioPlayer.style.left = savedPosition.left + 'px';
        audioPlayer.style.top = savedPosition.top + 'px';
        audioPlayer.style.right = 'auto';
        audioPlayer.style.transform = 'none';
    }

    // 恢復音樂進度和播放狀態
    const savedAudioState = JSON.parse(localStorage.getItem('audioState'));
    if (savedAudioState) {
        audio.currentTime = savedAudioState.currentTime || 0;
        if (savedAudioState.isPlaying) {
            audio.play().catch(error => {
                console.log('自動播放失敗:', error);
            });
            playPauseBtn.textContent = '暫停';
        } else {
            playPauseBtn.textContent = '播放';
        }
    } else {
        // 首次載入，自動播放
        audio.play().catch(error => {
            console.log('自動播放失敗:', error);
        });
        playPauseBtn.textContent = '暫停';
    }

    // 播放/暫停切換
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = '暫停';
        } else {
            audio.pause();
            playPauseBtn.textContent = '播放';
        }
        saveAudioState();
    });

    // 每秒儲存一次音樂進度
    audio.addEventListener('timeupdate', () => {
        saveAudioState();
    });

    // 儲存音樂狀態
    function saveAudioState() {
        const audioState = {
            currentTime: audio.currentTime,
            isPlaying: !audio.paused
        };
        localStorage.setItem('audioState', JSON.stringify(audioState));
    }

    // 頁面卸載時儲存音樂狀態
    window.addEventListener('beforeunload', () => {
        saveAudioState();
    });

    // 收起/展開播放器
    togglePlayerBtn.addEventListener('click', () => {
        audioPlayerBody.style.display = 'none';
        audioPlayerCollapsed.style.display = 'block';
        togglePlayerBtn.style.display = 'none';
    });

    expandPlayerBtn.addEventListener('click', () => {
        audioPlayerBody.style.display = 'flex';
        audioPlayerCollapsed.style.display = 'none';
        togglePlayerBtn.style.display = 'block';
    });

    // 拖動播放器
    let isDragging = false;
    let currentX;
    let currentY;

    audioPlayerHeader.addEventListener('mousedown', (e) => {
        isDragging = true;
        currentX = e.clientX - parseFloat(audioPlayer.style.left || 0);
        currentY = e.clientY - parseFloat(audioPlayer.style.top || 0);
        audioPlayer.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            let newX = e.clientX - currentX;
            let newY = e.clientY - currentY;

            // 限制播放器在視窗範圍內
            const playerRect = audioPlayer.getBoundingClientRect();
            const maxX = window.innerWidth - playerRect.width;
            const maxY = window.innerHeight - playerRect.height;

            newX = Math.max(0, Math.min(newX, maxX));
            newY = Math.max(0, Math.min(newY, maxY));

            audioPlayer.style.left = newX + 'px';
            audioPlayer.style.top = newY + 'px';
            audioPlayer.style.right = 'auto';
            audioPlayer.style.transform = 'none';

            // 儲存位置
            const position = {
                left: newX,
                top: newY
            };
            localStorage.setItem('audioPlayerPosition', JSON.stringify(position));
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        audioPlayer.style.cursor = 'move';
    });
});