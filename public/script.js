// CONFIG — how long each image stays (ms)
const SLIDE_HOLD = 5000;

// FOLDERS TO SCAN
const folders = [
    "images",
    "images/backgrounds",
    "images/parishes"
];

// Allowed file types
const exts = [".jpg", ".jpeg", ".png", ".webp"];

// Final list of slide URLs
const slides = [];

// Fetch images automatically
async function loadImages() {
    for (const folder of folders) {
        try {
            const res = await fetch(folder);
            const text = await res.text();

            // Pull links out of directory listing
            const matches = [...text.matchAll(/href="([^"]+)"/g)];

            matches.forEach(m => {
                const url = m[1];
                if (exts.some(e => url.toLowerCase().endsWith(e))) {
                    slides.push(`${folder}/${url}`);
                }
            });
        } catch (err) {
            console.log(`Could not read folder: ${folder}`);
        }
    }

    startSlideshow();
}

// Slideshow logic
let current = 0;
function startSlideshow() {
    if (slides.length === 0) {
        console.log("No images found.");
        return;
    }

    const div = document.getElementById("slideshow");

    function next() {
        div.style.opacity = 0;

        setTimeout(() => {
            div.style.backgroundImage = `url('${slides[current]}')`;
            div.style.opacity = 1;
        }, 500);

        current = (current + 1) % slides.length;
    }

    next();
    setInterval(next, SLIDE_HOLD);
}

loadImages();
