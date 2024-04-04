// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/

export async function getPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((json) => {
            let photoContainer = document.querySelector('.photoContainer')
            console.log(json.thumbnailUrl)
            for (let i = 0; i < 9; i++) {
                let image = document.createElement('img')
                image.setAttribute('src', json[i].thumbnailUrl)
                image.setAttribute('class', 'photo')
                photoContainer.appendChild(image)
                image.onclick = function() {
                    let rand = Math.floor(Math.random() * 4999)
                    image.setAttribute('src', json[rand].thumbnailUrl)
                }
            }
        });
}