/*-------------------------Variables-------------------------*/
//The searchbutton
const searchButton = document.getElementById('search');

//The Images
let imagesElem = document.getElementById('images');


/*-------------------------Get info of images-------------------------*/
function getInfo(images) {
    let infoURL = `https://farm${images.farm}.staticflickr.com/${images.server}/${images.id}_${images.secret}.jpg`;
    return infoURL;
}


/*-------------------------Show and add images to HTML-------------------------*/
function showImages(images) {
    let elem = document.createElement('div');
    let infoURL = `https://farm${images.farm}.staticflickr.com/${images.server}/${images.id}_${images.secret}.jpg`;
    elem.innerHTML = `<img src="${infoURL}"></img>`;
    imagesElem.appendChild(elem);
}

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



/*-------------------------Click on button-------------------------*/
searchButton.addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let numberOfImages = document.getElementById('numberOfImages').value;
    getImages(inputText, numberOfImages);
});


/*-------------------------Show Modal-------------------------*/
function showModal() {
    images.addEventListener('click', function() {
        let modal = document.querySelector('.modal');
        modal.classList.toggle('model');
    })
}

/*-------------------------Close Modal-------------------------*/
function closeModal() {
    document.querySelector('.close').addEventListener('click', function() {
        let modal = document.querySelector('.modal');
        modal.classList.toggle('model');
    })
}