/*-------------------------Get images-------------------------*/
export function getImages(inputText, numberOfImages) {
    let url = `https://api.flickr.com/services/rest?&api_key=19d3e6e0acfe9c438f368e2c2bab1&method=flickr.photos.search&text${inputText}&per_page${numberOfImages}&page=1&format=json`;
    fetch(url, {method:'GET'} ).then ( (response) =>  { 
        return response.json();	
	}).then( (data) => {
		console.log(data);
	})/*.catch(error) {
		console.error('ERROR IN FETCH: ', error);
	}*/
}