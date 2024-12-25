document.body.style.height = `${window.innerHeight}px`;


//for page 2
const urlParams = new URLSearchParams(window.location.search);

const videoId = urlParams.get('video');

const videoLinks = {
    1: "https://www.youtube.com/embed/rz7h9Dmu4i8?si=mALaTxY-9xhlazcW",
    2: "https://www.youtube.com/embed/lZssUhN7zgc?si=osuT2pyz7l0fIidz",
    3: "https://www.youtube.com/embed/6WL1uKnLQNs?si=xcAdu9ysv5m-5fRb",
    4: "https://www.youtube.com/embed/wrCkcFoY1tM?si=oPwNqCnX7h0BdX9f",
}

const iframe = document.getElementById('videoIframe');
iframe.src = videoLinks[videoId]

//menu
const menu = getElementById('ableMenu');
