document.addEventListener('DOMContentLoaded', () => {
    const albumDetailsContent = document.getElementById('album-details-content');

    // Album data with details, tracklists, and links
    const albums = {
        'i-2015': {
            name: 'I (2015)',
            image: 'photo/I.jpg',
            tracklist: ['I (feat. Verbal Jint)', 'U R', 'Gemini', 'Stress', 'Farewell'],
            appleMusic: 'https://music.apple.com/us/album/i-the-1st-mini-album-ep/1046202716',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mxDA010jLNlIH-3m6csiiKQ634VHdj0Fc',
            spotify: 'https://open.spotify.com/album/4e7kLQu7SKBUiMtV5WH3A1',
            copyright: '© 2015 S.M. ENTERTAINMENT Co., Ltd. 2015.10 DISTRIBUTED BY KT MUSIC Corp. KOREA. WARNING: ALL RIGHTS RESERVED. UNAUTHORIZED DUPLICATION & RENT IS PROHIBITED.'
        },
        'rain-2016': {
            name: 'Rain (2016)',
            image: 'photo/Rain.jpg',
            tracklist: ['Rain', 'Secret'],
            appleMusic: 'https://music.apple.com/us/album/rain/1080295545?i=1080296146',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_lpH5Yo0ct_RENq9-xS6jWtG8hHOg98yxs',
            spotify: 'https://open.spotify.com/album/5MgY1E2inbDcthAQEzwz8L',
            copyright: '© 2016 S.M. ENTERTAINMENT Co., Ltd. 2016.02 DISTRIBUTED BY KT MUSIC Corp. KOREA. WARNING: ALL RIGHTS RESERVED. UNAUTHORIZED DUPLICATION & RENT IS PROHIBITED.'
        },
        'why-2016': {
            name: 'Why (2016)',
            image: 'photo/Why.jpg',
            tracklist: ['Why', 'Starlight (feat. DEAN)', 'Fashion', 'Hands on Me', 'Up & Down (feat. Hyoyeon)', 'Good Thing', 'Night'],
            appleMusic: 'https://music.apple.com/us/album/why/1127320872?i=1127321299',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mqT1ebiyMezPDZbmY5ddQRP0ON73QfwVA',
            spotify: 'https://open.spotify.com/album/1ukBQWhQwWKqTGgs0YzRzU',
            copyright: '© 2016 S.M. ENTERTAINMENT Co., Ltd. 2016.06 DISTRIBUTED BY KT MUSIC Corp. KOREA. WARNING: ALL RIGHTS RESERVED. UNAUTHORIZED DUPLICATION & RENT IS PROHIBITED.'
        },
        'my-voice-2017': {
            name: 'My Voice (2017)',
            image: 'photo/MyVoice.jpg',
            tracklist: ['Fine', 'Cover Up', 'Feel So Fine', 'I Got Love', 'I’m OK', 'Time Lapse', 'Sweet Love', 'When I Was Young', 'Lonely Night', 'Love in Color'],
            appleMusic: 'https://music.apple.com/us/album/my-voice-the-1st-album-deluxe-edition/1222458971',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_kGimYp7zwTF05mru1_hjxRfP95bx9e7iE',
            spotify: 'https://open.spotify.com/album/7MG0bxf0ZFsAyej9W3XzTO',
            copyright: '© 2017 S.M. ENTERTAINMENT Co., Ltd. 2017.03 DISTRIBUTED BY KT MUSIC Corp. KOREA. WARNING: ALL RIGHTS RESERVED. UNAUTHORIZED DUPLICATION & RENT IS PROHIBITED.'
        },
        'this-christmas-2017': {
            name: 'This Christmas: Winter is Coming (2017)',
            image: 'photo/ThisChristmas.jpg',
            tracklist: ['The Magic of Christmas Time', 'This Christmas', 'Let It Snow', 'Candy Cane', 'Christmas Without You', 'Shhhh', 'I’m All Ears'],
            appleMusic: 'https://music.apple.com/us/album/this-christmas-winter-is-coming/1323945020',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mIqqg3wzFFSANZyn_LNiJo-ShOe8FIKVA',
            spotify: 'https://open.spotify.com/album/1U3KyC9Key12NSi9ETVExx',
            copyright: '© 2017 S.M. ENTERTAINMENT Co., Ltd. 2017.12 DISTRIBUTED BY KT MUSIC Corp. KOREA. WARNING: ALL RIGHTS RESERVED. UNAUTHORIZED DUPLICATION & RENT IS PROHIBITED.'
        },
        'something-new-2018': {
            name: 'Something New (2018)',
            image: 'photo/SN.jpg',
            tracklist: ['Something New', 'All Night Long', 'Baram X 3', 'One Day', 'Circus'],
            appleMusic: 'https://music.apple.com/us/album/something-new-the-3rd-mini-album-ep/1399531834',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_nHV42wMeqFAXkdhpZvm7nNcdysf2ol9Pk',
            spotify: 'https://open.spotify.com/album/0xYQcPVyEEegJlTXLttWUx',
            copyright: '© 2018 S.M. ENTERTAINMENT Co., Ltd. 2018.06 DISTRIBUTED BY KT MUSIC Corp. KOREA. WARNING: ALL RIGHTS RESERVED. UNAUTHORIZED DUPLICATION & RENT IS PROHIBITED.'
        },
        'four-seasons-2019': {
            name: 'Four Seasons (2019)',
            image: 'photo/FS.jpg',
            tracklist: ['Four Seasons', 'Blue'],
            appleMusic: 'https://music.apple.com/us/album/four-seasons/1457283867?i=1457283876',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mP4Z4pxzZzsiP2JWE9pOwq4W6URO_zWTA',
            spotify: 'https://open.spotify.com/album/3ublKZHu1qjU9ujf9A4zhH',
            copyright: '© 2019 S.M. ENTERTAINMENT Co., Ltd. 2019.03 DISTRIBUTED BY KT MUSIC Corp. KOREA. WARNING: ALL RIGHTS RESERVED. UNAUTHORIZED DUPLICATION & RENT IS PROHIBITED.'
        },
        'purpose-2019': {
            name: 'Purpose (2019)',
            image: 'photo/P.jpg',
            tracklist: ['Here I Am', 'Spark', 'Find Me', 'Love You Like Crazy', 'Haha', 'Better Babe', 'Gravity', 'City Love', 'I Do', 'Unlucky'],
            appleMusic: 'https://music.apple.com/us/album/spark/1484919750?i=1484919752',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_lq7PSqpKb7NnPgUFw8nRbVIIuKPc9k5Nc',
            spotify: 'https://open.spotify.com/album/0h6wCpdgpSOAbYDDYJVuwr',
            copyright: '© 2019 S.M. ENTERTAINMENT Co., Ltd. 2019.10 DISTRIBUTED BY KT MUSIC Corp. KOREA. WARNING: ALL RIGHTS RESERVED. UNAUTHORIZED DUPLICATION & RENT IS PROHIBITED.'
        },
        'what-do-i-call-you-2020': {
            name: 'What Do I Call You (2020)',
            image: 'photo/WDICY.jpg',
            tracklist: ['What Do I Call You', 'Playlist', 'To the Moon', 'Wildfire', 'Galaxy'],
            appleMusic: 'https://music.apple.com/us/album/what-do-i-call-you/1543866179?i=1543866180',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_k-LdAiVep6MVk0UIgoBitLuKjWFnAZiJ4',
            spotify: 'https://open.spotify.com/album/70XJeDlFe1LmZo1lyFKyq3',
            copyright: '© 2020 S.M. ENTERTAINMENT Co., Ltd. 2020.12 DISTRIBUTED BY KT MUSIC Corp. KOREA. WARNING: ALL RIGHTS RESERVED. UNAUTHORIZED DUPLICATION & RENT IS PROHIBITED.'
        },
        'invu-2022': {
            name: 'INVU (2022)',
            image: 'photo/INVU.jpg',
            tracklist: ['INVU', 'Some Nights', 'Can’t Control Myself', 'Set Myself on Fire', 'Toddler', 'Siren', 'Cold As Hell', 'Timeless', 'Heart', 'No Love Again', 'You Better Not', 'Ending Credits'],
            appleMusic: 'https://music.apple.com/us/album/invu/1609049611?i=1609049613',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_npH0Zud2yY3xbQwAZeoYPTMEPY9NHaqY0',
            spotify: 'https://open.spotify.com/album/7i2YLTVQ0dyngRuUqtGmr9',
            copyright: '© 2022 S.M. ENTERTAINMENT Co., Ltd. 2022.02 DISTRIBUTED BY KT MUSIC Corp. KOREA. WARNING: ALL RIGHTS RESERVED. UNAUTHORIZED DUPLICATION & RENT IS PROHIBITED.'
        },
        'to-x-2023': {
            name: 'To. X (2023)',
            image: 'photo/TX.jpg',
            tracklist: ['To. X', 'Melt Away', 'Burn It Down', 'Nightmare', 'All About You', 'Fabulous'],
            appleMusic: 'https://music.apple.com/us/album/to-x/1717568641?i=1717568642',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mnNutYGXK80XhnGgNPf3h_CgdXDlfwCvA',
            spotify: 'https://open.spotify.com/album/0VciVDVU6NoqtQ0WAIlTmD',
            copyright: '© 2023 S.M. ENTERTAINMENT Co., Ltd. 2023.11 DISTRIBUTED BY KT MUSIC Corp. KOREA. WARNING: ALL RIGHTS RESERVED. UNAUTHORIZED DUPLICATION & RENT IS PROHIBITED.'
        },
        'letter-to-myself-2024': {
            name: 'Letter to Myself (2024)',
            image: 'photo/letter.png',
            tracklist: ['Letter to Myself', 'Echoes', 'Reflections', 'Silent Promise', 'Through the Years'],
            appleMusic: 'https://music.apple.com/us/album/letter-to-myself/1779015074?i=1779015075',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_nYpVBBJQP2PpESIgG3t_xefrW_P8ZOrAg',
            spotify: 'https://open.spotify.com/album/47f7hcYu2nGCYcRx5d8zCM',
            copyright: '© 2024 S.M. ENTERTAINMENT Co., Ltd. 2024.03 DISTRIBUTED BY KT MUSIC Corp. KOREA. WARNING: ALL RIGHTS RESERVED. UNAUTHORIZED DUPLICATION & RENT IS PROHIBITED.'
        }
    };

    // Get the album ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('album');

    // Function to render album details based on the current language
    const renderAlbumDetails = () => {
        // Detect the user's language (default to 'zh' if not set)
        const userLang = localStorage.getItem('language') || 'zh';

        if (albumId && albums[albumId]) {
            const album = albums[albumId];
            document.title = `${album.name} - 太妍專輯詳情`;
            albumDetailsContent.innerHTML = `
                <a href="music.html" class="back-link">←</a>
                <img src="${album.image}" alt="${album.name} Album Cover">
                <h1>${album.name}</h1>
                <p>${translations[userLang]['listen-now']}</p>
                <div class="music-links">
                    <a href="${album.appleMusic}" target="_blank" rel="noopener noreferrer" class="music-link apple-music-link" aria-label="Listen to ${album.name} on Apple Music">
                        <img src="photo/Apple_Music_icon.png" alt="Apple Music Icon">
                    </a>
                    <a href="${album.youtube}" target="_blank" rel="noopener noreferrer" class="music-link youtube-link" aria-label="Listen to ${album.name} on YouTube Music">
                        <img src="photo/Youtube_Music_icon.png" alt="YouTube Icon">
                    </a>
                    <a href="${album.spotify}" target="_blank" rel="noopener noreferrer" class="music-link spotify-link" aria-label="Listen to ${album.name} on Spotify">
                        <img src="photo/Spotify_icon.png" alt="Spotify Icon">
                    </a>
                </div>
                <div class="tracklist">
                    <h2>${translations[userLang]['tracklist-heading']}</h2>
                    <ul>
                        ${album.tracklist.map(track => `<li>${track}</li>`).join('')}
                    </ul>
                </div>
                <p class="copyright">${album.copyright}</p>
            `;
            console.log(`Loaded details for album: ${album.name}`);
        } else {
            albumDetailsContent.innerHTML = `
                <a href="music.html" class="back-link">←</a>
                <h1>${translations[userLang]['error-heading']}</h1>
                <p>${translations[userLang]['error-description']}</p>
            `;
            console.error(`Album not found: ${albumId}`);
        }
    };

    // Initial render on page load
    renderAlbumDetails();

    // Listen for language change events
    document.addEventListener('languageChanged', () => {
        renderAlbumDetails();
    });

    console.log("Album details page scripts loaded successfully!");
});