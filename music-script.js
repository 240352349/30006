document.addEventListener('DOMContentLoaded', () => {
    const albumItems = document.querySelectorAll('.album-item');
    const albumDetails = document.getElementById('album-details');

    // Album data with details and links
    const albums = {
        'i-2015': {
            name: 'I (2015)',
            description: '太妍的首張個人迷你專輯，包含主打歌《I》。',
            appleMusic: 'https://music.apple.com/us/album/i-the-1st-mini-album-ep/1046202716',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mxDA010jLNlIH-3m6csiiKQ634VHdj0Fc',
            spotify: 'https://open.spotify.com/album/4e7kLQu7SKBUiMtV5WH3A1'
        },
        'rain-2016': {
            name: 'Rain (2016)',
            description: 'SM Station計劃單曲，展現太妍的情感嗓音。',
            appleMusic: 'https://music.apple.com/us/album/rain/1080295545?i=1080296146',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_lpH5Yo0ct_RENq9-xS6jWtG8hHOg98yxs',
            spotify: 'https://open.spotify.com/album/5MgY1E2inbDcthAQEzwz8L'
        },
        'why-2016': {
            name: 'Why (2016)',
            description: '迷你專輯，主打歌《Why》融合熱帶浩室風格。',
            appleMusic: 'https://music.apple.com/us/album/why/1127320872?i=1127321299',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mqT1ebiyMezPDZbmY5ddQRP0ON73QfwVA',
            spotify: 'https://open.spotify.com/album/1ukBQWhQwWKqTGgs0YzRzU'
        },
        'my-voice-2017': {
            name: 'My Voice (2017)',
            description: '首張正規專輯，包含《Fine》等熱門歌曲。',
            appleMusic: 'https://music.apple.com/us/album/my-voice-the-1st-album-deluxe-edition/1222458971',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_kGimYp7zwTF05mru1_hjxRfP95bx9e7iE',
            spotify: 'https://open.spotify.com/album/7MG0bxf0ZFsAyej9W3XzTO'
        },
        'this-christmas-2017': {
            name: 'This Christmas: Winter is Coming (2017)',
            description: '冬季特別專輯，包含《This Christmas》等溫暖歌曲。',
            appleMusic: 'https://music.apple.com/us/album/this-christmas-winter-is-coming/1323945020',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mIqqg3wzFFSANZyn_LNiJo-ShOe8FIKVA',
            spotify: 'https://open.spotify.com/album/1U3KyC9Key12NSi9ETVExx'
        },
        'something-new-2018': {
            name: 'Something New (2018)',
            description: '迷你專輯，主打歌《Something New》展現全新風格。',
            appleMusic: 'https://music.apple.com/us/album/something-new-the-3rd-mini-album-ep/1399531834',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_nHV42wMeqFAXkdhpZvm7nNcdysf2ol9Pk',
            spotify: 'https://open.spotify.com/album/0xYQcPVyEEegJlTXLttWUx'
        },
        'four-seasons-2019': {
            name: 'Four Seasons (2019)',
            description: '單曲《四季》以抒情風格打動人心。',
            appleMusic: 'https://music.apple.com/us/album/four-seasons/1457283867?i=1457283876',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mP4Z4pxzZzsiP2JWE9pOwq4W6URO_zWTA',
            spotify: 'https://open.spotify.com/album/3ublKZHu1qjU9ujf9A4zhH'
        },
        'purpose-2019': {
            name: 'Purpose (2019)',
            description: '第二張正規專輯，包含《Gravity》等熱門歌曲。',
            appleMusic: 'https://music.apple.com/us/album/spark/1484919750?i=1484919752',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_lq7PSqpKb7NnPgUFw8nRbVIIuKPc9k5Nc',
            spotify: 'https://open.spotify.com/album/0h6wCpdgpSOAbYDDYJVuwr'
        },
        'what-do-i-call-you-2020': {
            name: 'What Do I Call You (2020)',
            description: '迷你專輯，主打歌《What Do I Call You》風格清新。',
            appleMusic: 'https://music.apple.com/us/album/what-do-i-call-you/1543866179?i=1543866180',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_k-LdAiVep6MVk0UIgoBitLuKjWFnAZiJ4',
            spotify: 'https://open.spotify.com/album/70XJeDlFe1LmZo1lyFKyq3'
        },
        'invu-2022': {
            name: 'INVU (2022)',
            description: '第三張正規專輯，主打歌《INVU》大獲成功。',
            appleMusic: 'https://music.apple.com/us/album/invu/1609049611?i=1609049613',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_npH0Zud2yY3xbQwAZeoYPTMEPY9NHaqY0',
            spotify: 'https://open.spotify.com/album/7i2YLTVQ0dyngRuUqtGmr9'
        },
        'to-x-2023': {
            name: 'To. X (2023)',
            description: '迷你專輯，主打歌《To. X》展現成熟魅力。',
            appleMusic: 'https://music.apple.com/us/album/to-x/1717568641?i=1717568642',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mnNutYGXK80XhnGgNPf3h_CgdXDlfwCvA',
            spotify: 'https://open.spotify.com/album/0VciVDVU6NoqtQ0WAIlTmD'
        },
        'letter-to-myself-2024': {
            name: 'Letter to Myself (2024)',
            description: '最新專輯，展現太妍的成長與反思。',
            appleMusic: 'https://music.apple.com/us/album/letter-to-myself/1779015074?i=1779015075',
            youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_nYpVBBJQP2PpESIgG3t_xefrW_P8ZOrAg',
            spotify: 'https://open.spotify.com/album/47f7hcYu2nGCYcRx5d8zCM'
        }
    };

    console.log("Music page scripts loaded successfully!");
});