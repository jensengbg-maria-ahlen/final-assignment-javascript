/*-------------------------Variables-------------------------*/

//URL to Flickr with API-Key
const url = `https://api.flickr.com/services/rest?&api_key=19d3e6e0acfe9c438f368e2c2bab1`;

//URL searching for images
const urlSearchImg = `&method=flickr.photos.search`;

//URL searching via input fields
const urlSearchInputText = `&text${inputText}`;

//URL searching via format and how many images
const urlSearchFormat = `&per_page${numberOfImages}&page=1&format=json`;

//The searchbutton
const searchButton = document.getElementById('search');

//The Images
let img = document.getElementById('img');



/*-------------------------Click on button-------------------------*/
searchButton.addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let numberOfImages = document.getElementById('numberOfImages').value;
    getImages(inputText, numberOfImages);
});



/*-------------------------Get images-------------------------*/
function getImages(inputText, numberOfImages) {
    let url = `https://api.flickr.com/services/rest?&api_key=19d3e6e0acfe9c438f368e2c2bab1&method=flickr.photos.search&text${inputText}&per_page${numberOfImages}&page=1&format=json`;
    fetch(url, {method:'GET'} ).then ( (response) =>  { 
        return response.json();	
	}).then( (data) => {
		console.log(data);
	}).catch(function(error) {
		console.error('ERROR IN FETCH: ', error);
	})
}



/*-------------------------Show images-------------------------*/
/*function showImages(data) {
    console.log('insultObj:', characters);
}*/