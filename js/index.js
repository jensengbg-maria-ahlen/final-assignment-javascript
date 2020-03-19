/*-------------------------Variables-------------------------*/

//URL to Flickr with API-Key
const url = `https://api.flickr.com/services/rest?&api_key=19d3e6e0acfe9c438f368e2c2bab1&method=flickr.photos.search`;

//URL searching via input fields
const urlSearchInputText = `&text${inputText}`;

//URL searching via format and how many images
const urlSearchFormat = `&per_page${numberOfImages}&page=1&format=json`;

//The searchbutton
const searchButton = document.getElementById('search');

//The Images
let images = document.getElementById('images');

//Module to function getImages
//import {getImages} from "modules/getImages";



/*-------------------------Click on button-------------------------*/
searchButton.addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    //let numberOfImages = document.getElementById('numberOfImages').value;
    getImages(inputText);
});


/*-------------------------Get images-------------------------*/
function getImages(inputText) {
    let url = `https://api.flickr.com/services/rest?&api_key=19d3e6e0acfe9c438f368e2c2bab1&method=flickr.photos.search&text${inputText}`;
    fetch(url, {method:'GET'} ).then ( (response) =>  { 
        return response.json();	
	}).then( (data) => {
		console.log(data);
	}).catch( (error => console.log('ERROR IN FETCH: ', error)));
}

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