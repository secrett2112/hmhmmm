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
        "img/museum1.png",
        "img/museum2.png",
        "img/museum3.png",
        "img/museum4.png",
        "img/museum5.png",
        "img/museum6.png"
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
            src="img/ily.mp3"
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
                            src="img/museum6.png"
                            alt="">

                    </div>


                    <div class="museum-frame museum-main">

                        <img
                            src="img/museum1.png"
                            alt="">

                    </div>


                    <div class="museum-frame museum-right">

                        <img
                            src="img/museum2.png"
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
                    src="img/ttkndr.jpeg" 
                    alt="Titik Nadir"
                    class="music-cover"
                >

                <div class="music-info">
                    <h2>Titik Nadir</h2>
                    <p>Kahitna, Monita Tahalea</p>
                </div>

                <audio id="musicAudio">
                    <source src="img/titik nadir.mp3" type="audio/mpeg">
                </audio>

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
                    src="img/spider.jpeg"
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

    musicPlayBtn.addEventListener("click", () => {

        if(musicAudio.paused){

            musicAudio.play();

            musicPlayBtn.textContent = "❚❚";

        } else {

            musicAudio.pause();

            musicPlayBtn.textContent = "▶";

        }

    });

    musicAudio.addEventListener("ended", () => {

        musicPlayBtn.textContent = "▶";

    });

}