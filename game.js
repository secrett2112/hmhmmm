let noClick = 0;

let giftOpened = 0;

function moveNoButton() {

    const cardRect = card.getBoundingClientRect();
    const rect = noBtn.getBoundingClientRect();

    
    if (noBtn.style.position !== "absolute") {

        noBtn.style.position = "absolute";

        
        noBtn.style.left = (rect.left - cardRect.left) + "px";
        noBtn.style.top = (rect.top - cardRect.top) + "px";

    }


    let currentX = parseFloat(noBtn.style.left);
    let currentY = parseFloat(noBtn.style.top);

    const moveDistance = 90;

    let newX =
        currentX + (Math.random() * moveDistance * 2 - moveDistance);

    let newY =
        currentY + (Math.random() * moveDistance * 2 - moveDistance);

    
    newX = Math.max(
        20,
        Math.min(newX, cardRect.width - noBtn.offsetWidth - 20)
    );

    newY = Math.max(
        20,
        Math.min(newY, cardRect.height - noBtn.offsetHeight - 20)
    );

    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";

}

function initMuseum() {

    /* =========================
       MUSEUM PHOTOS
    ========================= */

    const photos = [
        // "museum1.png",
        // "museum2.png",
        // "museum3.png",
        // "museum4.png",
        // "museum5.png",
        // "museum6.png"
    ];

    let currentIndex = 0;


    /* =========================
       ELEMENTS
    ========================= */

    const leftFrame = document.querySelector(".museum-left");
    const mainFrame = document.querySelector(".museum-main");
    const rightFrame = document.querySelector(".museum-right");

    const leftImage = leftFrame.querySelector("img");
    const mainImage = mainFrame.querySelector("img");
    const rightImage = rightFrame.querySelector("img");

    const prevBtn = document.querySelector(".museum-prev");
    const nextBtn = document.querySelector(".museum-next");

    const counter = document.getElementById("museumCurrent");


    /* =========================
       RENDER PHOTOS
    ========================= */

    function renderMuseum() {

        const total = photos.length;

        const leftIndex =
            (currentIndex - 1 + total) % total;

        const rightIndex =
            (currentIndex + 1) % total;


        /* LEFT */

        leftImage.src = photos[leftIndex];


        /* MAIN */

        mainImage.src = photos[currentIndex];


        /* RIGHT */

        rightImage.src = photos[rightIndex];


        /* COUNTER */

        counter.textContent = currentIndex + 1;
    }


    /* =========================
       NEXT
    ========================= */

    nextBtn.addEventListener("click", () => {

        currentIndex++;

        if (currentIndex >= photos.length) {
            currentIndex = 0;
        }

        renderMuseum();

    });


    /* =========================
       PREVIOUS
    ========================= */

    prevBtn.addEventListener("click", () => {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = photos.length - 1;
        }

        renderMuseum();

    });


    /* =========================
       MUSIC PLAYER
    ========================= */

    const audio = document.getElementById("museumAudio");

    const playBtn =
        document.getElementById("museumPlayBtn");

    const status =
        document.getElementById("museumMusicStatus");



    playBtn.addEventListener("click", async () => {

        try {

            if (audio.paused) {

                await audio.play();

                playBtn.textContent = "❚❚";

                status.textContent =
                    "Soundtrack playing";

            } else {

                audio.pause();

                playBtn.textContent = "▶";

                status.textContent =
                    "Soundtrack paused";

            }

        } catch (error) {

            console.error(
                "Audio gagal dimainkan:",
                error
            );

            status.textContent =
                "Music couldn't be played";

        }

    });


    audio.addEventListener("ended", () => {

        playBtn.textContent = "▶";

        status.textContent =
            "Soundtrack off";

    });


    audio.addEventListener("error", () => {

        console.error(
            "File audio tidak ditemukan atau tidak dapat dimainkan."
        );

        status.textContent =
            "Music unavailable";

    });

    renderMuseum();

}

function growYesButton() {

    yesBtn.style.transform =
        `scale(${1 + noClick * 0.2})`;

}


function shrinkNoButton() {

    if(noClick >= 3){

        const scale =
            Math.max(0.35,1-noClick*0.08);

        noBtn.style.transform =
            `scale(${scale})`;

    }

}


// ======================
// HANDLE NO
// ======================

function handleNoClick(){

    noClick++;

    growYesButton();

    shrinkNoButton();

    moveNoButton();

}


// ======================
// SUCCESS
// ======================

function showSuccess(){

    showSuccessPage();

    setTimeout(()=>{

        document.getElementById("gift1")
        .classList.add("show");

    },500);

    setTimeout(()=>{

        document.getElementById("gift2")
        .classList.add("show");

    },900);

    setTimeout(()=>{

        document.getElementById("gift3")
        .classList.add("show");

    },1300);

}


// ======================
// OPEN GIFT
// ======================

function openGift(number){

    showPage(giftPage);

    switch(number){

       case 1:

    giftContent.innerHTML = `

        <div class="museum">

            <h2 class="museum-title">
                MUSEUM OF USSSSSS WKWKWKWKWK
            </h2>


          <div class="museum-music">

    <audio
        id="museumAudio"
        preload="metadata">

        <source
            src="ily.mp3"
            type="audio/mpeg">

    </audio>

    <button
        id="museumPlayBtn"
        type="button">

        ▶

    </button>

    <span
        id="museumMusicStatus">

        Soundtrack off

    </span>

</div>


            <div class="museum-slider">

                <button
                    class="museum-nav museum-prev"
                    type="button">

                    ‹

                </button>


                <div class="museum-stage">

                    <div class="museum-frame museum-left">

                        <img
                            src="museum6.png"
                            alt="">

                    </div>


                    <div class="museum-frame museum-main">

                        <img
                            src="museum1.png"
                            alt="">

                    </div>


                    <div class="museum-frame museum-right">

                        <img
                            src="museum2.png"
                            alt="">

                    </div>

                </div>


                <button
                    class="museum-nav museum-next"
                    type="button">

                    ›

                </button>

            </div>


            <div class="museum-counter">

                <span id="museumCurrent">
                    1
                </span>

                /

                <span>
                    6
                </span>

            </div>

        </div>

    `;

    initMuseum();

break;

        case 2:
    giftContent.innerHTML = `

        <div class="music-section">

            <h5 class="music-description">
                a song that reminds me of us (gaada konteks tapi emang ini gasi yang selalu dibahas tuu wkwkwkwk)
            </h5>

            <div class="music-player">

                <img 
                    src="about you.png" 
                    alt="Titik Nadir"
                    class="music-cover"
                >

                <div class="music-info">
                    <h2>About You</h2>
                    <p>The 1975</p>
                </div>

                <audio id="musicAudio">
                    <source src="about you.mp3" type="audio/mpeg">
                </audio>

                <!-- PROGRESS BAR -->
                <div class="music-progress">

                    <span id="musicCurrentTime">0:00</span>

                    <input 
                        type="range" 
                        id="musicProgress"
                        min="0"
                        value="0"
                        step="0.1"
                    >

                    <span id="musicDuration">0:00</span>

                </div>

                <!-- PLAY / PAUSE -->
                <button id="musicPlayBtn" class="music-play-btn">
                    ▶
                </button>

            </div>

        </div>

    `;

    initMusicPlayer();
break;

      case 3:
    giftContent.innerHTML = `

        <div class="birthday-card">

            <div class="birthday-card-cover">

                <div class="birthday-card-bark"></div>

                <img
                    src="spider.jpeg"
                    alt="Birthday Card"
                >

            </div>


            <div class="birthday-card-details">

                <h4 class="birthday-color1">
                    just a letter
                </h4>

                <h4 class="birthday-color2">
                    for You
                </h4>


                <p>Pada akhirnya Ini hanyalah sebuah kisah yang amat panjang</p>

                <p>Tentang cinta yang menyadarkan kita bahwa, Manusia adalah budak bagi yang dicintainya</p>

                <p>Hiduplah bertahun-tahun. lupakan tentang diriku Hiduplah dengan bebas</p>

                <p></p>

                <p></p>

                <p>Kepadamu, 2000 tahun mulai sekarang</p>

                <p>Darimu, 2000 tahun yang lalu</p>

                <p class="birthday-text-right">
                    -.......
                </p>

            </div>

        </div>

    `;

break;

    }

    giftOpened++;

    checkGift();

}

function checkGift(){

    if(giftOpened>=3){

        lastBtn.style.display="block";

    }

}


// ======================
// BACK
// ======================

function backToSuccess(){

    showSuccessPage();

}


function openEnding(){

    showEndingPage();

}

yesBtn.addEventListener("click",()=>{

    showSuccess();

});

noBtn.addEventListener("click",()=>{

    handleNoClick();

});

noBtn.addEventListener("mousemove",()=>{

    if(noClick<5){

        moveNoButton();

    }

});

noBtn.addEventListener("touchstart",()=>{

    if(noClick<5){

        moveNoButton();

    }

});

// Gift
gift1.addEventListener("click",()=>{

    openGift(1);

});

gift2.addEventListener("click",()=>{

    openGift(2);

});

gift3.addEventListener("click",()=>{

    openGift(3);

});

// Back
backBtn.addEventListener("click",()=>{

    backToSuccess();

});

// Ending
lastBtn.addEventListener("click",()=>{

    openEnding();

});

function initMusicPlayer(){

    const musicAudio = document.getElementById("musicAudio");
    const musicPlayBtn = document.getElementById("musicPlayBtn");

    const musicProgress = document.getElementById("musicProgress");
    const musicCurrentTime = document.getElementById("musicCurrentTime");
    const musicDuration = document.getElementById("musicDuration");


    // =========================
    // PLAY / PAUSE
    // =========================

    musicPlayBtn.addEventListener("click", () => {

        if(musicAudio.paused){

            musicAudio.play();
            musicPlayBtn.textContent = "❚❚";

        } else {

            musicAudio.pause();
            musicPlayBtn.textContent = "▶";

        }

    });


    // =========================
    // LOAD DURASI LAGU
    // =========================

    musicAudio.addEventListener("loadedmetadata", () => {

        musicProgress.max = musicAudio.duration;

        musicDuration.textContent =
            formatMusicTime(musicAudio.duration);

    });


    // =========================
    // UPDATE PROGRESS BAR
    // =========================

    musicAudio.addEventListener("timeupdate", () => {

        musicProgress.value = musicAudio.currentTime;

        musicCurrentTime.textContent =
            formatMusicTime(musicAudio.currentTime);

    });


    // =========================
    // SEEK / SKIP LAGU
    // =========================

    musicProgress.addEventListener("input", () => {

        musicAudio.currentTime = musicProgress.value;

    });


    // =========================
    // LAGU SELESAI
    // =========================

    musicAudio.addEventListener("ended", () => {

        musicPlayBtn.textContent = "▶";

        musicProgress.value = 0;

    });


    // =========================
    // FORMAT WAKTU
    // =========================

    function formatMusicTime(seconds){

        if(!isFinite(seconds)){
            return "0:00";
        }

        const minutes = Math.floor(seconds / 60);

        const secs = Math.floor(seconds % 60)
            .toString()
            .padStart(2, "0");

        return `${minutes}:${secs}`;

    }

}
