


const getImagen = async () => {

    try {
        const apiKey = 'fom8J2Gk6HSbvB8qZ4FpKEJCiaZg7H0Q';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (err) {
        // Manejo del error
        console.error(err);
    }


}

getImagen();

