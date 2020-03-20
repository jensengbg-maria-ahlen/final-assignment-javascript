/*-------------------------Variables-------------------------*/
//The searchbutton
const searchButton = document.getElementById('search');

//The Images
let imagesElem = document.getElementById('images');


/*-------------------------Add images to HTML-------------------------*/
function showImages(images) {
    let elem = document.createElement('div');
    elem.innerHTML = images;
    imagesElem.append(elem);
}

function addImages(images) {
    imagesElem.innerHTML = '';
    for(let i = 0; i < images.photos.photo.length; i++) {
        showImages(images.photos.photo[i]);
        getInfo(images.photos.photo[i]);
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
    } catch(error) {
        console.error(error);
    }
}


/*-------------------------Get info in images-------------------------*/
function getInfo(images) {
    let infoURL = `https://farm${images.farm}.staticflickr.com/${images.server}/${images.id}_${images.secret}.jpg`;
    console.log(images);
    fetch(infoURL);
}


/*-------------------------Click on button-------------------------*/
searchButton.addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let numberOfImages = document.getElementById('numberOfImages').value;
    getImages(inputText, numberOfImages);
});
