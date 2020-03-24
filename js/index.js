/*-------------------------Variables-------------------------*/
//The searchbutton
const searchButton = document.getElementById('search');

//The images
let imagesElem = document.getElementById('images');

//The modal
let modal = document.getElementById('modal');


/*-------------------------Show images-------------------------*/
function showImages(images) {
    let infoURL = `https://farm${images.farm}.staticflickr.com/${images.server}/${images.id}_${images.secret}.jpg`;
    let elem = document.createElement('section');
    elem.innerHTML = `<img class="modalImg" src="${infoURL}"></img>`;
    imagesElem.appendChild(elem);
    elem.addEventListener('click', () => {
        showModal(images);
        closeModal(images);
    });
}

/*-------------------------Add images to HTML-------------------------*/
function addImages(images) {
    imagesElem.innerHTML = '';
    for(let i = 0; i < images.photos.photo.length; i++) {
        getInfo(images.photos.photo[i]);
        showImages(images.photos.photo[i]);
    }
}


/*-------------------------Get images-------------------------*/
async function getImages(inputText, numberOfImages) {
    let searchUrl = `https://api.flickr.com/services/rest?&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&method=flickr.photos.search&text=${inputText}&per_page=${numberOfImages}&page=1&format=json&nojsoncallback=1`;
    let url = searchUrl;
    try {
        let response = await fetch(url);
        let data = await response.json();
        addImages(data);
        return url;
    } catch(error) {
        console.error(error);
    }
}


/*-------------------------Get info of images-------------------------*/
function getInfo(images) {
    let infoURL = `https://farm${images.farm}.staticflickr.com/${images.server}/${images.id}_${images.secret}.jpg`;
    return infoURL;
}


/*-------------------------Click on button-------------------------*/
searchButton.addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let numberOfImages = document.getElementById('numberOfImages').value;
    getImages(inputText, numberOfImages);
});


/*-------------------------Show modal-------------------------*/
function showModal() {
    console.log('hej');
    modal.classList.toggle('hide');
}

/*-------------------------Close modal-------------------------*/
function closeModal() {
    let close = document.querySelector('.close');
    close.addEventListener('click', () => {
        modal.classList.toggle('hide');
    });
}