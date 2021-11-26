

const apiKey = 'fom8J2Gk6HSbvB8qZ4FpKEJCiaZg7H0Q';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({data}) =>{
        const {url} = data.images.original; // Desestructuracion del url.

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);


    })
    .catch(console.warn);





