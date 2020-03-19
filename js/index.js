/*-------------------------Variables-------------------------*/

//URL to Flickr with API-Key
const basicUrl = `https://api.flickr.com/services/rest?&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&method=flickr.photos.search`;

//URL searching via input fields
const urlSearchInputText = `&text=${inputText}`;

//URL searching via format and how many images
const urlSearchFormat = `&per_page=${numberOfImages}&page=1&format=json`;

//The searchbutton
const searchButton = document.getElementById('search');

//The Images
let imagesElem = document.getElementById('images');

//Module to function getImages
//import {getImages} from "modules/getImages";


/*-------------------------Show images-------------------------*/
function showImages(images) {
    let elem = document.createElement('div');
    elem.innerHTML = images;
    imagesElem.append(elem);
}

function loopImages(images) {
    imagesElem.innerHTML = '';
    for(let i = 0; i < images.length; i++) {
        showImages(images[i]);
    }
}

/*-------------------------Get images-------------------------*/
async function getImages(inputText, numberOfImages) {
    let searchUrl = `https://api.flickr.com/services/rest?&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&method=flickr.photos.search&text=${inputText}&per_page=${numberOfImages}&page=1&format=json`;
    let url = searchUrl;
    
    try {
        let response = await fetch(url);
        let data = await response.json();
        loopImages(data);
        console.log(response.json());
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
