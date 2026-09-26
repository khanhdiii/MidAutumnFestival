/* =========================================================
   MID-AUTUMN FESTIVAL 2026 - LOGIC
   ========================================================= */

/* ---- WISHES DATA (with images) ---- */
const wishes = [
    { img: 'img/tho.png', wish: 'Chúc bạn đêm Rằm Tháng Tám luôn toả sáng rực rỡ! Thỏ Ngọc mang đến may mắn và niềm vui ngọt ngào cho bạn và gia đình!' },
    { img: 'img/co hang.png', wish: 'Cô Hằng gửi lời chúc phúc! Nguyện ước gia đình bạn luôn sum vầy, hạnh phúc tràn đầy dưới ánh trăng rằm!' },
    { img: 'img/cay.png', wish: 'Dưới tán cây cổ thụ lung linh, chúc bạn gặt hái mùa vàng thành công, sự nghiệp thăng tiến vượt bậc!' },
    { img: 'img/tho.png', wish: 'Cá chép hoá rồng! Chúc bạn sự nghiệp thăng tiến, vượt qua mọi khó khăn và gặt hái thành công rực rỡ!' },
    { img: 'img/co hang.png', wish: 'Trăng tròn vành vạnh đêm Trung Thu, chúc cho mọi điều ước nguyện trong lòng bạn sớm trở thành hiện thực tươi đẹp!' },
    { img: 'img/tho.png', wish: 'Chúc bạn luôn giữ nét hồn nhiên dễ thương, tâm hồn bình yên và tràn ngập niềm vui ngọt ngào như chú Thỏ Ngọc dưới trăng!' },
    { img: 'img/co hang.png', wish: 'Cuộc sống là chuỗi những khoảnh khắc đẹp. Chúc bạn mỗi ngày trôi qua đều là một kỷ niệm đáng nhớ và tràn đầy hạnh phúc!' },
    { img: 'img/cay.png', wish: 'Chúc bạn tâm mộc như sen, thanh tao và bình yên giữa cuộc sống xôn xao. Mọi muộn phiền tan biến dưới ánh trăng rằm.' },
    { img: 'img/tho.png', wish: 'Chúc bạn tự do bay cao, tự tin toả sáng với ước mơ và luôn đón nhận những may mắn bất ngờ trên hành trình phía trước.' },
    { img: 'img/co hang.png', wish: 'Nguyện ước Trung Thu đoàn viên ấm áp. Chúc gia đình bạn luôn sum vầy, tràn ngập tiếng cười và tình yêu thương mãi mãi.' },
    { img: 'img/cay.png', wish: 'Chúc bạn và gia đình phước lộc dồi dào, sức khoẻ tràn đầy và vạn sự an khang thịnh vượng mỗi mùa trăng tròn!' },
    { img: 'img/tho.png', wish: 'Chúc bạn tài lộc sung túc, công danh rộng mở, làm ăn phát tài và luôn may mắn trên mọi con đường mình chọn!' },
];

// Chinese characters for lanterns
const lanternChars = ['福', '月', '秋', '團', '圓', '喜', '樂', '安', '吉', '祥', '壽', '財'];

/* =========================================================
   INTRO SCREEN - MOONCAKE OPENING
   ========================================================= */
const introScreen = document.getElementById('introScreen');
const mooncakeContainer = document.getElementById('mooncakeContainer');
const introTitle = document.getElementById('introTitle');
const introSubtitle = document.getElementById('introSubtitle');
const mainScene = document.getElementById('mainScene');

let introClicked = false;

introScreen.addEventListener('click', () => {
    if (introClicked) return;
    introClicked = true;

    // Hide the subtitle
    introSubtitle.classList.add('hide');

    // Open the mooncake
    mooncakeContainer.classList.add('opened');

    // Show the title
    setTimeout(() => {
        introTitle.classList.add('show');
    }, 800);

    // Transition to main scene
    setTimeout(() => {
        mainScene.classList.add('active');
    }, 2000);

    setTimeout(() => {
        introScreen.classList.add('hidden');
    }, 2800);

    // Remove intro from DOM after animation
    setTimeout(() => {
        introScreen.style.display = 'none';
    }, 4500);
});


/* =========================================================
   CANVAS 1: BACKGROUND STARS
   ========================================================= */
const skyCanvas = document.getElementById('skyCanvas');
const skyCtx = skyCanvas.getContext('2d', { alpha: false });
let stars = [];
let shootingStars = [];

/* =========================================================
   CANVAS 2: FOREGROUND PARTICLES (fireflies / gold dust)
   ========================================================= */
const particleCanvas = document.getElementById('particleCanvas');
const pCtx = particleCanvas.getContext('2d');
let particles = [];

let W = window.innerWidth;
let H = window.innerHeight;

function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    skyCanvas.width = W; skyCanvas.height = H;
    particleCanvas.width = W; particleCanvas.height = H;
    initStars();
    initParticles();
}

function initStars() {
    stars = [];
    const num = Math.floor((W * H) / 2500);
    for (let i = 0; i < num; i++) {
        stars.push({
            x: Math.random() * W, y: Math.random() * H,
            r: Math.random() * 1.5,
            a: Math.random(),
            da: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1)
        });
    }
}

function initParticles() {
    particles = [];
    const num = Math.floor(W / 20);
    for (let i = 0; i < num; i++) {
        particles.push({
            x: Math.random() * W, y: Math.random() * H,
            r: Math.random() * 2 + 0.5,
            vx: Math.random() * 0.8 - 0.4,
            vy: Math.random() * -0.8 - 0.3,
            color: `rgba(255, ${150 + Math.floor(Math.random()*80)}, ${Math.floor(Math.random()*50)}, ${0.3 + Math.random()*0.4})`
        });
    }
}

function renderCanvas() {
    // 1. Sky
    skyCtx.fillStyle = '#030614';
    skyCtx.fillRect(0, 0, W, H);

    stars.forEach(s => {
        s.a += s.da;
        if (s.a > 1 || s.a < 0.1) s.da *= -1;
        skyCtx.beginPath();
        skyCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        skyCtx.fillStyle = `rgba(255, 255, 255, ${s.a})`;
        skyCtx.fill();
    });

    // Shooting stars
    if (Math.random() < 0.008 && shootingStars.length < 2) {
        shootingStars.push({
            x: Math.random() * W, y: 0,
            len: Math.random() * 80 + 20,
            vx: Math.random() * -10 - 5, vy: Math.random() * 10 + 5,
            life: 1
        });
    }
    for (let i = shootingStars.length - 1; i >= 0; i--) {
        let ss = shootingStars[i];
        ss.x += ss.vx; ss.y += ss.vy; ss.life -= 0.02;
        if (ss.life <= 0) { shootingStars.splice(i, 1); continue; }
        skyCtx.beginPath();
        skyCtx.moveTo(ss.x, ss.y);
        skyCtx.lineTo(ss.x - ss.vx * 3, ss.y - ss.vy * 3);
        skyCtx.strokeStyle = `rgba(255,255,255,${ss.life})`;
        skyCtx.lineWidth = 1.5;
        skyCtx.stroke();
    }

    // 2. Particles (golden dust)
    pCtx.clearRect(0, 0, W, H);
    particles.forEach(p => {
        p.x += p.vx + Math.sin(Date.now() / 1500 + p.y) * 0.3;
        p.y += p.vy;
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;

        pCtx.beginPath();
        pCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        pCtx.fillStyle = p.color;
        pCtx.fill();
    });

    requestAnimationFrame(renderCanvas);
}

window.addEventListener('resize', resize);
resize();
renderCanvas();


/* =========================================================
   LANTERNS - GOLDEN ORANGE DESIGN
   ========================================================= */
const lanternContainer = document.getElementById('lanternsContainer');
let lanternElements = [];
const NUM_LANTERNS = 12;

function createLanternHTML(charIndex) {
    const char = lanternChars[charIndex % lanternChars.length];
    return `
        <div class="lantern-float-anim" style="animation-delay: -${Math.random() * 4}s; animation-duration: ${3 + Math.random() * 3}s">
            <div class="lantern-wire"></div>
            <div class="lantern-body">
                <div class="lantern-cap"></div>
                <div class="lantern-main">
                    <span class="lantern-char">${char}</span>
                </div>
                <div class="lantern-bottom-cap"></div>
            </div>
            <div class="lantern-tassel">
                <div class="tassel-string"></div>
                <div class="tassel-knot"></div>
                <div class="tassel-threads">
                    <div class="tassel-thread"></div>
                    <div class="tassel-thread"></div>
                    <div class="tassel-thread"></div>
                    <div class="tassel-thread"></div>
                    <div class="tassel-thread"></div>
                </div>
            </div>
        </div>
    `;
}

function getRandomLanternPos() {
    let x, y, valid = false;
    while (!valid) {
        x = 5 + Math.random() * 90;
        y = 5 + Math.random() * 75;
        // Avoid tree area center-bottom
        const inTreeArea = (x > 35 && x < 65 && y > 50);
        if (!inTreeArea) valid = true;
    }
    return { x, y };
}

function initLanterns() {
    lanternContainer.innerHTML = '';
    lanternElements = [];

    for (let i = 0; i < NUM_LANTERNS; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'premium-lantern';

        const pos = getRandomLanternPos();
        wrapper.style.left = `${pos.x}vw`;
        wrapper.style.top = `${pos.y}vh`;

        wrapper.innerHTML = createLanternHTML(i);

        // Click => open modal with random wish
        wrapper.addEventListener('click', () => {
            const wishData = wishes[Math.floor(Math.random() * wishes.length)];
            openModal(wishData);
        });

        lanternContainer.appendChild(wrapper);
        lanternElements.push(wrapper);
    }

    // Start drifting
    setInterval(updateLanternPositions, 10000);
    setTimeout(updateLanternPositions, 1000);
}

function updateLanternPositions() {
    lanternElements.forEach(wrapper => {
        const pos = getRandomLanternPos();
        wrapper.style.left = `${pos.x}vw`;
        wrapper.style.top = `${pos.y}vh`;
    });
}

initLanterns();


/* =========================================================
   RABBIT HOPPING AROUND THE TREE
   ========================================================= */
const rabbitWrapper = document.getElementById('rabbitWrapper');

// Define hop points around the tree (relative to viewport)
// Tree is centered at 50vw
const hopPositions = [
    { left: '30vw', scaleX: 1 },    // left of tree
    { left: '35vw', scaleX: 1 },    // approaching tree from left
    { left: '42vw', scaleX: 1 },    // near tree left
    { left: '52vw', scaleX: -1 },   // past tree center, facing left
    { left: '58vw', scaleX: -1 },   // right of tree
    { left: '63vw', scaleX: -1 },   // far right
    { left: '58vw', scaleX: 1 },    // turning back
    { left: '50vw', scaleX: 1 },    // back to center
    { left: '38vw', scaleX: 1 },    // left again
    { left: '28vw', scaleX: 1 },    // far left
];

let currentHopIndex = 0;

function hopRabbit() {
    const pos = hopPositions[currentHopIndex];

    // Apply hopping animation class
    rabbitWrapper.classList.add('hopping');

    // Hop up
    rabbitWrapper.style.bottom = '17vh';

    setTimeout(() => {
        // Move to new position
        rabbitWrapper.style.left = pos.left;
        rabbitWrapper.style.transform = `scaleX(${pos.scaleX})`;
    }, 200);

    setTimeout(() => {
        // Land
        rabbitWrapper.style.bottom = '12vh';
        rabbitWrapper.classList.remove('hopping');
    }, 800);

    currentHopIndex = (currentHopIndex + 1) % hopPositions.length;

    // Schedule next hop with some randomness
    const nextDelay = 1500 + Math.random() * 2000;
    setTimeout(hopRabbit, nextDelay);
}

// Start hopping after intro
setTimeout(() => {
    rabbitWrapper.style.left = '30vw';
    hopRabbit();
}, 3500);


/* =========================================================
   MODAL LOGIC
   ========================================================= */
const modal = document.getElementById('wishModal');
const closeBtn = document.getElementById('closeBtn');
const acceptBtn = document.getElementById('acceptBtn');
const modalImage = document.getElementById('modalImage');
const modalMessage = document.getElementById('modalMessage');

function openModal(data) {
    modalImage.src = data.img;
    modalImage.alt = 'Lời chúc Trung Thu';
    modalMessage.textContent = data.wish;
    modal.classList.add('active');
    playMagicalChime();
}

function closeModal() {
    modal.classList.remove('active');
}

closeBtn.addEventListener('click', closeModal);
acceptBtn.addEventListener('click', closeModal);

// Close on background click
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});


/* =========================================================
   AUDIO
   ========================================================= */
const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
let audioCtx;
let isPlaying = false;
let musicInterval;

function initAudio() {
    if (!audioCtx) audioCtx = new AudioCtxClass();
}

function playNote(freq, dur = 1.0, type = 'sine') {
    if (!audioCtx) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.035, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + dur);
    } catch (e) {}
}

function playMagicalChime() {
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const notes = [1046.50, 1318.51, 1567.98];
    notes.forEach((f, i) => setTimeout(() => playNote(f, 2, 'triangle'), i * 80));
}

document.getElementById('bgmBtn').addEventListener('click', () => {
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const btnText = document.querySelector('#bgmBtn .text');
    const btnIcon = document.querySelector('#bgmBtn .icon');

    if (isPlaying) {
        clearInterval(musicInterval);
        isPlaying = false;
        btnIcon.textContent = '🎵';
        btnText.textContent = 'Bật Nhạc';
    } else {
        isPlaying = true;
        btnIcon.textContent = '🔇';
        btnText.textContent = 'Tắt Nhạc';

        const pentatonic = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
        musicInterval = setInterval(() => {
            playNote(pentatonic[Math.floor(Math.random() * pentatonic.length)], 2.5);
            if (Math.random() < 0.2) playNote(130.81, 4, 'sine');
        }, 800);
    }
});
