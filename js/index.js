/*-------------------------Variables-------------------------*/
//The searchbutton
const searchButton = document.querySelector('button');

//The images
let imagesElem = document.getElementById('images');
let bigImg = document.getElementById('bigImg');

//The modal
let modal = document.getElementById('modal');


/*-------------------------Show small images-------------------------*/
function showImages(images) {
    let elem = document.createElement('img');
    elem.setAttribute('src', getInfo(images, 'm'));
    imagesElem.appendChild(elem);
    
    elem.addEventListener('click', () => {
        showModal(images);
        closeModal(images);
    });
}

/*-------------------------Show big images in modal-------------------------*/
function getBig(images) {
    let img = document.createElement('img');
    img.setAttribute('src', getInfo(images, 'z'));
    bigImg.appendChild(img);
}


/*-------------------------Add images to HTML-------------------------*/ 
function addImages(images) {
    imagesElem.innerHTML = '';    

    for(let i = 0; i < images.photos.photo.length; i++) {
        getInfo(images.photos.photo[i]);
        showImages(images.photos.photo[i]);
        console.log(images.photos.photo[i]);
    }
}



/*-------------------------Get images from API-------------------------*/
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


/*-------------------------Get info from images-------------------------*/
function getInfo(images, size) {
    return `https://farm${images.farm}.staticflickr.com/${images.server}/${images.id}_${images.secret}_${size}.jpg`;
}


/*-------------------------Click on button-------------------------*/
searchButton.addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let numberOfImages = document.getElementById('numberOfImages').value;
    getImages(inputText, numberOfImages);
});


/*-------------------------Show modal-------------------------*/
function showModal(images) {
    modal.classList.toggle('hide');
    getBig(images);
}


/*-------------------------Close modal-------------------------*/
function closeModal() {
    let close = document.querySelector('.close');
    close.addEventListener('click', () => {
        modal.classList.add('hide');
        bigImg.innerHTML = '';
    });
}