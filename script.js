/* ═══════════════════════════════════════════════════
   MID-AUTUMN FESTIVAL 2026 — SCRIPT v3
═══════════════════════════════════════════════════ */

/* ---- Lời chúc ---- */
const wishes = [
    { img:'img/chuc1.png',      wish:'Chúc em bé đêm rằm Tháng Tám luôn tỏa sáng rực rỡ! Mong chú Thỏ Ngọc mang đến thật nhiều may mắn, điểm số như ý và niềm vui ngọt ngào! 🐰🌕' },
    { img:'img/chuc2.png',      wish:'Chị Hằng gửi ngàn lời chúc phúc tràn đầy năng lượng tích cực cho kỳ học mới! 🌙✨' },
    { img:'img/chuc3.jpg',      wish:'Như gốc đa vươn cao vững chãi, chúc em luôn kiên trì tích lũy tri thức, sự nghiệp tương lai thăng tiến và vững bước theo thời gian! 🌿💛' },
    { img:'img/chuc4.jpg',      wish:'Như cá chép hóa rồng vượt sóng, chúc em vượt qua mọi kỳ thi, hoàn thành xuất sắc đồ án và gặt hái thành công rực rỡ! 🐠✨' },
    { img:'img/chuc5.jpg',      wish:'Trăng tròn vành vạnh đêm Trung thu, chúc cho mọi mục tiêu học tập và dự định tương lai của em sớm trở thành hiện thực! 🌕💫' },
    { img:'img/chuc1.png',      wish:'Chúc em luôn giữ trọn ngọn lửa nhiệt huyết tuổi trẻ, tâm hồn bình yên và tràn ngập niềm vui bên em bè, người thân! 🐰💛' },
    { img:'img/chuc2.png',      wish:'Mỗi mùa trăng là một quãng thời gian thanh xuân đáng nhớ. Chúc quãng đời sinh viên của em luôn đong đầy kỷ niệm đẹp và thành công! ✨🌺' },
    { img:'img/chuc3.jpg',      wish:'Chúc em giữ đầu óc luôn minh mẫn, tâm tĩnh lặng giữa áp lực deadline. Mọi mỏi mệt đều nhẹ nhàng tan biến dưới ánh trăng! 🌿🌙' },
    { img:'img/chuc4.jpg',      wish:'Chúc em luôn tự tin tỏa sáng với đam mê, thỏa sức vươn xa và đón nhận vô vàn cơ hội tốt trên hành trình phát triển bản thân! 🌟💛' },
    { img:'img/chuc5.jpg',      wish:'Đêm Trung thu đoàn viên ấm áp, chúc em và gia đình luôn quây quần bên nhau, tràn ngập tiếng cười và trọn vẹn tình yêu thương! 🌕🏮' },
    { img:'img/chuc1.png',      wish:'Chúc em và gia đình dồi dào sức khỏe, luôn vững tin và gặt hái nhiều phước lộc, may mắn trên con đường học tập, rèn luyện! 🌳💛' },
    { img:'img/chuc2.png',      wish:'Chúc em học tập xuất sắc, công danh rộng mở, nắm bắt trọn vẹn cơ hội và thành công trên mọi chặng đường phía trước! 🐰🌟' }
];

const lanternChars = ['福','月','秋','團','圓','喜','樂','安','吉','祥','壽','財'];
const NUM_LANTERNS = 12;
const SPECIAL_IDX  = NUM_LANTERNS - 1;


/* ═══════════════════════════════════════════
   INTRO STARS
═══════════════════════════════════════════ */
(function spawnIntroStars() {
    const c = document.getElementById('introStars');
    for (let i = 0; i < 90; i++) {
        const s = document.createElement('div');
        s.className = 'i-star';
        const sz = Math.random() * 2.4 + 0.5;
        s.style.cssText = `
            width:${sz}px; height:${sz}px;
            left:${Math.random()*100}%; top:${Math.random()*100}%;
            --d:${1.5+Math.random()*3}s; --dl:${Math.random()*4}s;
            opacity:${Math.random()*.6+.15};
        `;
        c.appendChild(s);
    }
})();

/* ═══════════════════════════════════════════
   BÁNH BỤI VÀNG
═══════════════════════════════════════════ */
(function spawnDust() {
    const c = document.getElementById('mcDust');
    for (let i = 0; i < 28; i++) {
        const p = document.createElement('div');
        p.className = 'mc-p';
        const a = (i / 28) * 360;
        const dist = 75 + Math.random() * 55;
        const tx = Math.cos(a * Math.PI / 180) * dist;
        const ty = Math.sin(a * Math.PI / 180) * dist - 90;
        const sz = 3 + Math.random() * 5;
        p.style.cssText = `
            width:${sz}px; height:${sz}px;
            left:${50+Math.cos(a*Math.PI/180)*28}%;
            top:${50+Math.sin(a*Math.PI/180)*28}%;
            --tx:${tx}px; --ty:${ty}px;
            --d:${2+Math.random()*2.5}s; --dl:${Math.random()*3.5}s;
        `;
        c.appendChild(p);
    }
})();


/* ═══════════════════════════════════════════
   INTRO — MỞ BÁNH
═══════════════════════════════════════════ */
const introScreen  = document.getElementById('introScreen');
const mcLid        = document.getElementById('mcLid');
const mcFilling    = document.getElementById('mcFillingReveal');
const introTitle   = document.getElementById('introTitle');
const introHint    = document.getElementById('introHint');
const mainScene    = document.getElementById('mainScene');

let introClicked = false;

introScreen.addEventListener('click', () => {
    if (introClicked) return;
    introClicked = true;

    introHint.classList.add('hide');
    mcLid.classList.add('open');

    setTimeout(() => mcFilling.classList.add('show'), 650);
    setTimeout(() => introTitle.classList.add('show'), 950);
    setTimeout(() => mainScene.classList.add('active'), 2300);
    setTimeout(() => introScreen.classList.add('hidden'), 3100);
    setTimeout(() => { introScreen.style.display = 'none'; }, 4600);
});


/* ═══════════════════════════════════════════
   CANVAS 1 — BẦU TRỜI SAO
═══════════════════════════════════════════ */
const skyCanvas = document.getElementById('skyCanvas');
const skyCtx    = skyCanvas.getContext('2d', { alpha: false });
let stars = [], shootingStars = [];

/* ═══════════════════════════════════════════
   CANVAS 2 — HẠT BỤI VÀNG NỀN
═══════════════════════════════════════════ */
const pCanvas = document.getElementById('particleCanvas');
const pCtx    = pCanvas.getContext('2d');
let particles = [];

let W = innerWidth, H = innerHeight;

function resize() {
    W = innerWidth; H = innerHeight;
    skyCanvas.width  = W; skyCanvas.height  = H;
    pCanvas.width    = W; pCanvas.height    = H;
    initStars(); initParticles();
}

function initStars() {
    stars = [];
    const n = Math.floor(W * H / 2400);
    for (let i = 0; i < n; i++) {
        stars.push({
            x: Math.random()*W, y: Math.random()*H,
            r: Math.random()*1.6,
            a: Math.random(),
            da: (Math.random()*.016+.005) * (Math.random()>.5 ? 1 : -1)
        });
    }
}
function initParticles() {
    particles = [];
    const n = Math.floor(W / 17);
    for (let i = 0; i < n; i++) {
        particles.push({
            x: Math.random()*W, y: Math.random()*H,
            r: Math.random()*2+.5,
            vx: Math.random()*.8-.4,
            vy: Math.random()*-.85-.25,
            color: `rgba(255,${150+Math.floor(Math.random()*80)},${Math.floor(Math.random()*50)},${.28+Math.random()*.38})`
        });
    }
}

function renderBg() {
    // Sky
    skyCtx.fillStyle = '#020310';
    skyCtx.fillRect(0, 0, W, H);

    stars.forEach(s => {
        s.a += s.da;
        if (s.a > 1 || s.a < .08) s.da *= -1;
        skyCtx.beginPath();
        skyCtx.arc(s.x, s.y, s.r, 0, Math.PI*2);
        skyCtx.fillStyle = `rgba(255,255,255,${s.a})`;
        skyCtx.fill();
    });

    // Shooting stars
    if (Math.random() < .007 && shootingStars.length < 2) {
        shootingStars.push({
            x: Math.random()*W, y: 0,
            vx: Math.random()*-10-4, vy: Math.random()*10+4,
            life: 1
        });
    }
    for (let i = shootingStars.length-1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.vx; ss.y += ss.vy; ss.life -= .022;
        if (ss.life <= 0) { shootingStars.splice(i,1); continue; }
        skyCtx.beginPath();
        skyCtx.moveTo(ss.x, ss.y);
        skyCtx.lineTo(ss.x - ss.vx*3, ss.y - ss.vy*3);
        skyCtx.strokeStyle = `rgba(255,255,255,${ss.life})`;
        skyCtx.lineWidth = 1.4;
        skyCtx.stroke();
    }

    // Particles
    pCtx.clearRect(0, 0, W, H);
    particles.forEach(p => {
        p.x += p.vx + Math.sin(Date.now()/1600 + p.y) * .3;
        p.y += p.vy;
        if (p.y < -10) { p.y = H+10; p.x = Math.random()*W; }
        if (p.x < -10)   p.x = W+10;
        if (p.x > W+10)  p.x = -10;
        pCtx.beginPath();
        pCtx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        pCtx.fillStyle = p.color;
        pCtx.fill();
    });

    requestAnimationFrame(renderBg);
}

addEventListener('resize', resize);
resize();
renderBg();


/* ═══════════════════════════════════════════
   LỒNG ĐÈN CỔ ĐIỂN ĐỎ VÀNG
═══════════════════════════════════════════ */
const lanternLayer = document.getElementById('lanternLayer');
let lanternEls = [];

function buildLantern(idx) {
    const char     = lanternChars[idx % lanternChars.length];
    const isSpecial = (idx === SPECIAL_IDX);
    const swDur    = 3.5 + Math.random() * 2.5;
    const swDl     = Math.random() * -4;

    /* Màu chỉ tua rua:
       - Đèn thường: đỏ
       - Đèn đặc biệt: hồng   */
    const tc  = isSpecial ? '#ff60a0' : '#dd2200';
    const tc2 = isSpecial ? '#cc0060' : '#aa0000';

    return `
      <div class="lf-anim" style="--sw-dur:${swDur}s; --sw-dl:${swDl}s">
        <div class="ln-cord"></div>
        <div class="ln-body">
          <div class="ln-top-hook"></div>
          <div class="ln-top-rim"></div>
          <div class="ln-main">
            <span class="ln-char">${char}</span>
          </div>
          <div class="ln-bot-rim"></div>
        </div>
        <div class="ln-tassel">
          <div class="lnt-string"></div>
          <div class="lnt-knot"></div>
          <div class="lnt-threads">
            <div class="lnt-thread" style="--tc:${tc};--tc2:${tc2}"></div>
            <div class="lnt-thread" style="--tc:${tc};--tc2:${tc2}"></div>
            <div class="lnt-thread" style="--tc:${tc};--tc2:${tc2}"></div>
            <div class="lnt-thread" style="--tc:${tc};--tc2:${tc2}"></div>
            <div class="lnt-thread" style="--tc:${tc};--tc2:${tc2}"></div>
          </div>
        </div>
      </div>`;
}

function randPos() {
    let x, y, ok = false;
    while (!ok) {
        x = 6 + Math.random() * 88;
        y = 5 + Math.random() * 70;
        ok = !(x > 36 && x < 64 && y > 50);
    }
    return { x, y };
}

function initLanterns() {
    lanternLayer.innerHTML = '';
    lanternEls = [];

    for (let i = 0; i < NUM_LANTERNS; i++) {
        const wrap = document.createElement('div');
        wrap.className = 'lantern-el' + (i === SPECIAL_IDX ? ' special' : '');

        const p = randPos();
        wrap.style.left = `${p.x}vw`;
        wrap.style.top  = `${p.y}vh`;
        wrap.innerHTML  = buildLantern(i);

        if (i === SPECIAL_IDX) {
            wrap.addEventListener('click', openHeartScreen);
        } else {
            wrap.addEventListener('click', () => {
                openWishModal(wishes[Math.floor(Math.random() * wishes.length)]);
            });
        }

        lanternLayer.appendChild(wrap);
        lanternEls.push(wrap);
    }

    setInterval(driftLanterns, 10000);
    setTimeout(driftLanterns, 1400);
}

function driftLanterns() {
    lanternEls.forEach(el => {
        const p = randPos();
        el.style.left = `${p.x}vw`;
        el.style.top  = `${p.y}vh`;
    });
}

initLanterns();


/* ═══════════════════════════════════════════
   THỎ NHẢY XUNG QUANH CÂY
═══════════════════════════════════════════ */
const rabbitWrap = document.getElementById('rabbitWrap');
const hopPts = [
    { left:'30vw', sx:1  },
    { left:'36vw', sx:1  },
    { left:'43vw', sx:1  },
    { left:'53vw', sx:-1 },
    { left:'59vw', sx:-1 },
    { left:'64vw', sx:-1 },
    { left:'57vw', sx:1  },
    { left:'49vw', sx:1  },
    { left:'38vw', sx:1  },
    { left:'28vw', sx:1  },
];
let hopIdx = 0;

function hopRabbit() {
    const pt = hopPts[hopIdx];
    rabbitWrap.style.bottom = '17vh';
    setTimeout(() => {
        rabbitWrap.style.left = pt.left;
        rabbitWrap.style.transform = `scaleX(${pt.sx})`;
    }, 220);
    setTimeout(() => { rabbitWrap.style.bottom = '12vh'; }, 820);
    hopIdx = (hopIdx + 1) % hopPts.length;
    setTimeout(hopRabbit, 1600 + Math.random() * 2000);
}
setTimeout(() => { rabbitWrap.style.left = '30vw'; hopRabbit(); }, 3600);


/* ═══════════════════════════════════════════
   MODAL LỜI CHÚC
═══════════════════════════════════════════ */
const wishModal = document.getElementById('wishModal');
const wmClose   = document.getElementById('wmClose');
const wmAccept  = document.getElementById('wmAccept');
const wmImg     = document.getElementById('wmImg');
const wmText    = document.getElementById('wmText');

function openWishModal(data) {
    wmImg.src = data.img;
    wmText.textContent = data.wish;
    wishModal.classList.add('active');
    chime([1046.5, 1318.5, 1568], 'triangle');
}
function closeWishModal() { wishModal.classList.remove('active'); }

wmClose.addEventListener('click', closeWishModal);
wmAccept.addEventListener('click', closeWishModal);
wishModal.addEventListener('click', e => { if (e.target === wishModal) closeWishModal(); });


/* ═══════════════════════════════════════════
   HEART 3D SCREEN — CANVAS DOTS
═══════════════════════════════════════════ */
const heartScreen  = document.getElementById('heartScreen');
const heartCanvas  = document.getElementById('heartCanvas');
const heartTextObj = document.getElementById('heartTextObj');
const heartHint    = document.getElementById('heartHint');
const hCtx         = heartCanvas.getContext('2d');

let hDots = [], hTime = 0, hRaf = null, hReady = false;

// Variables for love words
let loveWordsInterval = null;

const loveWords = [
    // Tên & Danh xưng ngọt ngào
    "Đặng Mỹ Hạnh ❤️", 
    "Ôm em thật chặt 🫂",
    "Nắm lấy tay em 🤝",
    "Mỹ Hạnh <3", 
    "thich HANH 💖", 
    "Top 1 người tôi tin tưởng nhất 💕",
    "Mỹ Hạnh xinh đẹp 🌸",
    "Mỹ Hạnh của anh 💖", 
    "Cục cưnggg 🌸", 
    "Bảo bối 🧸", 
    "Em bé xinh đẹp ✨", 
    "Công chúa nhỏ 👑",
    "My Love 💘", 
    "My Everything 🌎", 
    "The BEST ✨", 
    "Thiên thần của anh 👼",

    // Bày tỏ nỗi nhớ & Sự cần thiết
    "Anh nhớ em ❤️", 
    "Anh cần em 💖", 
    "Nhớ em rất nhiều 💕", 
    "Nhớ em 🥺", 
    "Lúc nào cũng nhớ em 💭", 
    "Nhớ nụ cười của em ☺️",
    "Muốn ôm em quá 🫂", 
    "Không ngừng nghĩ về em 🧠💓",
      "Nắm lấy tay em 🤝",

    // Tình yêu & Hứa hẹn
    "Mãi yêu 💞", 
    "Yêu em nhất trên đời 🌍❤️", 
    "Thương em nhiều lắm 🥺💗", 
    "Yêu Mỹ Hạnh vô cùng 💌", 
    "Chỉ yêu mình em thôi 🔒❤️", 
    "Cảm ơn vì em đã đến 🎁", 
    "Mỗi ngày đều yêu em hơn 📈💖", 
    "Hạnh phúc là có em 🍀", 
    "Trái tim này là của em 💓",
    "Đặng Mỹ Hạnh ❤️", 
    "Mỹ Hạnh <3", 
    "thich HANH 💖", 
    "Top 1 người tôi tin tưởng nhất 💕",
    "Mỹ Hạnh xinh đẹp 🌸",
    "Mỹ Hạnh của anh 💖", 
    "Cục cưnggg 🌸", 
    "Bảo bối 🧸", 
    "Em bé xinh đẹp ✨", 
    "Công chúa nhỏ 👑",
    "My Love 💘", 
    "My Everything 🌎", 
    "The BEST ✨", 
    "Thiên thần của anh 👼",

    // Bày tỏ nỗi nhớ & Sự cần thiết
    "Anh nhớ em ❤️", 
    "Anh cần em 💖", 
    "Nhớ em rất nhiều 💕", 
    "Nhớ em 🥺", 
    "Lúc nào cũng nhớ em 💭", 
    "Nhớ nụ cười của em ☺️",
    "Muốn ôm em quá 🫂", 
    "Không ngừng nghĩ về em 🧠💓",

    // Tình yêu & Hứa hẹn
    "Mãi yêu 💞", 
    "Yêu em nhất trên đời 🌍❤️", 
    "Thương em nhiều lắm 🥺💗", 
    "Yêu Mỹ Hạnh vô cùng 💌", 
    "Chỉ yêu mình em thôi 🔒❤️", 
    "Cảm ơn vì em đã đến 🎁", 
    "Mỗi ngày đều yêu em hơn 📈💖", 
    "Hạnh phúc là có em 🍀", 
    "Trái tim này là của em 💓",
    "Đặng Mỹ Hạnh ❤️", 
    "Mỹ Hạnh <3", 
    "thich HANH 💖", 
    "Top 1 người tôi tin tưởng nhất 💕",
    "Mỹ Hạnh xinh đẹp 🌸",
    "Mỹ Hạnh của anh 💖", 
    "Cục cưnggg 🌸", 
    "Bảo bối 🧸", 
    "Em bé xinh đẹp ✨", 
    "Công chúa nhỏ 👑",
    "My Love 💘", 
    "My Everything 🌎", 
    "The BEST ✨", 
    "Thiên thần của anh 👼",
    "lỳ mà cưng xinh đẹp 🥰",
    "Cô gái vừa xinh vừa lỳ 🫶",
        "lỳ mà cưng xinh đẹp 🥰",
    "Cô gái vừa xinh vừa lỳ 🫶",    "lỳ mà cưng xinh đẹp 🥰",
    "Cô gái vừa xinh vừa lỳ 🫶",    "lỳ mà cưng xinh đẹp 🥰",
    "Cô gái vừa xinh vừa lỳ 🫶",    "lỳ mà cưng xinh đẹp 🥰",
    "Cô gái vừa xinh vừa lỳ 🫶",

    // Bày tỏ nỗi nhớ & Sự cần thiết
    "Anh nhớ em ❤️", 
    "Anh cần em 💖", 
    "Nhớ em rất nhiều 💕", 
    "Nhớ em 🥺", 
    "Lúc nào cũng nhớ em 💭", 
    "Nhớ nụ cười của em ☺️",
    "Muốn ôm em quá 🫂", 
    "Không ngừng nghĩ về em 🧠💓",

    // Tình yêu & Hứa hẹn
    "Mãi yêu 💞", 
    "Yêu em nhất trên đời 🌍❤️", 
    "Thương em nhiều lắm 🥺💗", 
    "Yêu Mỹ Hạnh vô cùng 💌", 
    "Chỉ yêu mình em thôi 🔒❤️", 
    "Cảm ơn vì em đã đến 🎁", 
    "Mỗi ngày đều nhớ 📈💖", 
    "Hạnh phúc là có em 🍀", 
    "Trái tim này là của em 💓"
];

const loveColors = [
    // Bảng màu Hồng (Romance & Sweetness)
    "#ad7390"
];

const loveFonts = [
    // Font cổ điển, sang trọng
    "'Playfair Display', serif",
    "'Cormorant Garamond', serif"
];


/* Phương trình tim tham số */
const hx = t => 16 * Math.pow(Math.sin(t), 3);
const hy = t => -(13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t));

function buildHeartDots() {
    hDots = [];
    const CURVE = 2500;   // viền
    const FILL  = 2200;   // lấp đầy

    // Đường viền tim
    for (let i = 0; i < CURVE; i++) {
        const t = (i / CURVE) * Math.PI * 2;
        const noise = Math.random() * 2.2;
        const na    = Math.random() * Math.PI * 2;
        hDots.push({
            tx: hx(t) + Math.cos(na)*noise,
            ty: hy(t) + Math.sin(na)*noise,
            tz: (Math.random() - 0.5) * 15 * Math.abs(Math.sin(t)),
            x: (Math.random()-.5)*50,
            y: (Math.random()-.5)*50,
            z: (Math.random()-.5)*50,
            vx:0, vy:0, vz:0,
            r:  1.6 + Math.random()*2,
            phase: Math.random()*Math.PI*2,
            cp:   Math.random()*Math.PI*2,
        });
    }
    // Lấp đầy bên trong
    for (let i = 0; i < FILL; i++) {
        const t    = Math.random()*Math.PI*2;
        const frac = Math.sqrt(Math.random()); // phân bố đều
        hDots.push({
            tx: hx(t)*frac,
            ty: hy(t)*frac,
            tz: (Math.random() - 0.5) * 20 * (1 - frac),
            x: (Math.random()-.5)*60,
            y: (Math.random()-.5)*60,
            z: (Math.random()-.5)*60,
            vx:0, vy:0, vz:0,
            r:  .9 + Math.random()*1.6,
            phase: Math.random()*Math.PI*2,
            cp:   Math.random()*Math.PI*2,
        });
    }
}

function drawHeartFrame() {
    if (!hReady) return;

    const CW = heartCanvas.width  = innerWidth;
    const CH = heartCanvas.height = innerHeight;
    const cx = CW / 2, cy = CH / 2;
    const sc = Math.min(CW, CH) / 42;

    hTime += .018;
    const pulse = 1 + .065 * Math.sin(hTime*2);
    
    // Sort dots by depth (Z-index) to draw from back to front
    const angle = hTime * 0.8; // Rotation speed
    const sinA = Math.sin(angle);
    const cosA = Math.cos(angle);

    // Calculate 3D projected positions before sorting
    hDots.forEach(d => {
        // Kéo về vị trí đích
        d.vx += (d.tx - d.x) * .042;
        d.vy += (d.ty - d.y) * .042;
        d.vz += (d.tz - d.z) * .042;
        d.vx *= .84; d.vy *= .84; d.vz *= .84;
        d.x  += d.vx; d.y  += d.vy; d.z  += d.vz;

        // Rotate around Y axis
        d.rx = d.x * cosA - d.z * sinA;
        d.ry = d.y;
        d.rz = d.x * sinA + d.z * cosA;
    });

    hDots.sort((a, b) => a.rz - b.rz);

    hCtx.clearRect(0, 0, CW, CH);

    hDots.forEach(d => {
        // Perspective projection
        const fov = 350;
        const scale = fov / (fov + d.rz + 150);

        // Màu sắc đổi theo thời gian
        const cp  = d.cp + hTime * .55;
        const rr  = 255;
        const rg  = Math.round(10  + 100 * (.5 + .5 * Math.sin(cp)));
        const rb  = Math.round(60  + 140 * (.5 + .5 * Math.sin(cp + 2)));
        const ra  = .55 + .45 * Math.sin(d.phase + hTime);

        const px = cx + d.rx * sc * pulse * scale;
        const py = cy + d.ry * sc * pulse * scale;
        const pr = Math.max(0.1, d.r * (.8 + .28 * Math.sin(d.phase + hTime*1.6)) * scale);

        hCtx.beginPath();
        hCtx.arc(px, py, pr, 0, Math.PI*2);
        hCtx.fillStyle = `rgba(${rr},${rg},${rb},${ra})`;
        hCtx.fill();
    });

    // Hào quang trung tâm tim
    const grd = hCtx.createRadialGradient(cx, cy, 0, cx, cy, sc*20);
    grd.addColorStop(0, `rgba(255,0,70,${.06+.04*Math.sin(hTime)})`);
    grd.addColorStop(1, 'transparent');
    hCtx.fillStyle = grd;
    hCtx.fillRect(0, 0, CW, CH);

    hRaf = requestAnimationFrame(drawHeartFrame);
}

function openHeartScreen() {
    heartScreen.classList.add('active');
    hReady = true;
    buildHeartDots();
    if (hRaf) cancelAnimationFrame(hRaf);
    drawHeartFrame();

    // Spawn floating love words
    if (loveWordsInterval) clearInterval(loveWordsInterval);
    loveWordsInterval = setInterval(() => {
        if (!hReady) return;
        const el = document.createElement('div');
        el.className = 'love-word';
        el.textContent = loveWords[Math.floor(Math.random() * loveWords.length)];
        el.style.left = (10 + Math.random() * 80) + '%';
        el.style.color = loveColors[Math.floor(Math.random() * loveColors.length)];
        el.style.fontFamily = loveFonts[Math.floor(Math.random() * loveFonts.length)];
        el.style.fontSize = (1.2 + Math.random() * 2) + 'rem';
        el.style.animationDuration = (3.5 + Math.random() * 3.5) + 's';
        heartScreen.appendChild(el);
        setTimeout(() => el.remove(), 8000);
    }, 350);

    // Chữ nổi lên sau 1s (ẩn chữ cũ đi hoặc giữ nguyên, ta giữ nguyên cho phong phú)
    setTimeout(() => {
        heartTextObj.classList.add('visible', 'rise');
    }, 900);

    // Hint sau 2.5s
    setTimeout(() => heartHint.classList.add('show'), 2500);

    chime([523.25, 659.25, 783.99, 1046.5, 1318.5], 'sine', .04, 130);
}

// Bấm vào canvas trái tim → mở thư
heartCanvas.addEventListener('click', openLetterScreen);


/* ═══════════════════════════════════════════
   LETTER SCREEN — THƯ TRUNG THU
═══════════════════════════════════════════ */
const letterScreen  = document.getElementById('letterScreen');
const heartHalves   = document.getElementById('heartHalves');
const letterLight   = document.getElementById('letterLight');
const letterWrap    = document.getElementById('letterWrap');
const letterBackBtn = document.getElementById('letterBackBtn');

function openLetterScreen() {
    letterScreen.classList.add('active');

    // Dừng animation tim
    if (hRaf) { cancelAnimationFrame(hRaf); hRaf = null; hReady = false; }

    // Hiện tim xẻ đôi
    heartHalves.classList.add('show');
    setTimeout(() => heartHalves.classList.add('open'), 120);

    // Ánh sáng tỏa
    setTimeout(() => letterLight.classList.add('show'), 500);

    // Hiện lá thư
    setTimeout(() => letterWrap.classList.add('show'), 680);

    chime([392, 440, 523.25, 659.25], 'triangle', .032, 220);
}

letterBackBtn.addEventListener('click', () => {
    letterScreen.classList.remove('active');
    letterWrap.classList.remove('show');
    letterLight.classList.remove('show');
    heartHalves.classList.remove('open');
    setTimeout(() => heartHalves.classList.remove('show'), 400);

    // Khởi động lại tim
    hReady = true;
    buildHeartDots();
    drawHeartFrame();

    // Reset chữ cuộn
    heartTextObj.classList.remove('rise', 'visible');
    void heartTextObj.offsetWidth; // reflow
    setTimeout(() => {
        heartTextObj.classList.add('visible', 'rise');
    }, 600);
});


/* ═══════════════════════════════════════════
   AUDIO ENGINE
═══════════════════════════════════════════ */
const AC = window.AudioContext || window.webkitAudioContext;
let audioCtx, isPlaying = false, bgInterval;

function initAudio() {
    if (!audioCtx) audioCtx = new AC();
}
function playNote(freq, dur = 1.2, type = 'sine', vol = .035) {
    if (!audioCtx) return;
    try {
        const osc = audioCtx.createOscillator();
        const g   = audioCtx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        g.gain.setValueAtTime(vol, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(.001, audioCtx.currentTime + dur);
        osc.connect(g); g.connect(audioCtx.destination);
        osc.start(); osc.stop(audioCtx.currentTime + dur);
    } catch(e) {}
}
function chime(notes, type = 'triangle', vol = .035, gap = 85) {
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    notes.forEach((f, i) => setTimeout(() => playNote(f, 2.2, type, vol), i * gap));
}

document.getElementById('bgmBtn').addEventListener('click', () => {
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const btnTxt = document.querySelector('#bgmBtn .text');
    const btnIco = document.querySelector('#bgmBtn .icon');

    if (isPlaying) {
        clearInterval(bgInterval);
        isPlaying = false;
        btnIco.textContent = '🎵';
        btnTxt.textContent = 'Bật Nhạc';
    } else {
        isPlaying = true;
        btnIco.textContent = '🔇';
        btnTxt.textContent = 'Tắt Nhạc';
        const penta = [261.63, 293.66, 329.63, 392, 440, 523.25];
        bgInterval = setInterval(() => {
            playNote(penta[Math.floor(Math.random()*penta.length)], 2.6);
            if (Math.random() < .22) playNote(130.81, 4, 'sine', .028);
        }, 820);
    }
});
