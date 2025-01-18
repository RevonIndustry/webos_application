const imageDirectory = 'assets/images';
const imageElement = document.getElementById('slideshowImage');
const duration = 3000;

let images = [];
let currentIndex = 0;

fetch(imageDirectory + '/images.json')
    .then(response => response.json())
    .then(data => {
        images = data;
        if(images.length > 0) {
            setInterval(showNextImage, duration);
            showNextImage();
        }else{
            console.error('No images in the directory.');
        }
    })
    .catch(err=>console.error('Error loading images:', err));

function showNextImage(){
    imageElement.src = `${imageDirectory}/${images[currentIndex]}`;
    currentIndex = (currentIndex + 1)%images.length;
}