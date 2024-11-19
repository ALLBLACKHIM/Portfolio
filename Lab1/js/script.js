// ad banner
let ads = {
    default: "/img/download.jpeg",
    hovered: "/img/download (1).jpeg",
    clicked: "/img/download (2).jpeg"
};
function loadAd(action) {
    let adImage = document.getElementById('adImage');

    if (action === 'hovered') {
        adImage.src = ads.hovered; // Load ad when hovered
    } else if (action === 'clicked') {
        adImage.src = ads.clicked; // Load ad when clicked
    }
}
// Reset back to default when mouse leaves the ad
document.getElementById('bannerAd').addEventListener('mouseleave', function() {
    document.getElementById('adImage').src = ads.default;
});

//
