const artworkImages = [
  "starry_night.webp",
  "fall_roman_empire.jpeg",
  "napolean.jpg",
  "odyssseus.jpg",
  "gladiator.jpg",
  "algren.jpg"

];

function assignArtworkImages(imagePaths = artworkImages, className = 'card__img', baseUrl = './artwork/') {
    const imgElements = document.querySelectorAll(`img.${className}`);

    imagePaths.forEach((imagePath, index) => {
        if (index < imgElements.length) {
            const fullPath = baseUrl + imagePath;
            imgElements[index].src = fullPath;

            // Extract filename for alt text
            const filename = imagePath.split('/').pop().split('.')[0];
            imgElements[index].alt = filename.replace(/[-_]/g, ' ');

            console.log(`Assigned ${imagePath} to img element ${index + 1}`);
        }
    });

    if (imagePaths.length > imgElements.length) {
        console.warn(`Warning: ${imagePaths.length - imgElements.length} images couldn't be assigned (not enough img elements)`);
    } else if (imgElements.length > imagePaths.length) {
        console.warn(`Warning: ${imgElements.length - imagePaths.length} img elements don't have images assigned`);
    }

    console.log(`Successfully assigned ${Math.min(imagePaths.length, imgElements.length)} images`);
}

console.log("Hello, i'm from artwork.js");

document.addEventListener('DOMContentLoaded', () => {
    assignArtworkImages();
});
