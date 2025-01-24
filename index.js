const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

// 波動関数のシミュレーションパラメータ
const waveAmplitude = 100; // 波の振幅
const waveFrequency = 0.01; // 波の周波数
const particleCount = 100; // 粒子の数

// 粒子を生成
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    // 初期位置をランダムに設定
    const x = Math.random() * canvasWidth;
    const y = Math.random() * canvasHeight;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    return { element: particle, x, y, phase: Math.random() * Math.PI * 2 };
}

// 粒子を更新
function updateParticle(particle, time) {
    const x = particle.x + waveAmplitude * Math.sin(particle.phase + waveFrequency * time);
    const y = particle.y + waveAmplitude * Math.cos(particle.phase + waveFrequency * time);
    particle.element.style.transform = `translate(${x - particle.x}px, ${y - particle.y}px)`;
}

// 粒子を複数生成して動かす
const particles = Array.from({ length: particleCount }, createParticle);

let time = 0;
function animate() {
    time += 1;

    // 各粒子の動きを更新
    particles.forEach((particle) => updateParticle(particle, time));

    requestAnimationFrame(animate);
}

animate();
