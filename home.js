const thumbnails = document.querySelectorAll('.thumbnail');
const mainPhoto = document.querySelector('.main-photo');

function updatePhoto(index) {
    mainPhoto.src = thumbnails[index].src;
    mainPhoto.style.display = 'block';
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        updatePhoto(index);
    });
});