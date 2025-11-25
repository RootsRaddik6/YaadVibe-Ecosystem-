function openTon() {
    window.location.href = "https://ton.org/en/wallets";
}

function openWalletConnect() {
    window.location.href = "https://walletconnect.com/";
}
// 3D holographic tilt for flag
const flagWrapper = document.querySelector('.flag-3d-wrapper');
const holoLayer = document.querySelector('.flag.holo-layer');

if (flagWrapper && holoLayer) {
    flagWrapper.addEventListener('mousemove', (e) => {
        const rect = flagWrapper.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;

        holoLayer.style.transform = `translateZ(40px) rotateY(${x * 16}deg)`;
    });
}
