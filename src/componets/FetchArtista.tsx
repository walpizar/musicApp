const URL_BASE = 'www.theaudiodb.com/api/v1/json/2/search.php?';

function URL(txtBusqueda: string) {
    const url = `${URL_BASE}s=coldplay`;
    console.log(url);
    return url;
}

function fetchArtista(txtBusqueda: string) {
    console.log(txtBusqueda);
    return fetch(URL('https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay'))
        .then(res => console.log(res.json()) )
        .then(resJSON => {
            return {  
                
            
                // idArtist: resJSON.artists[0].idArtist,
                // strArtist: resJSON.artists[0].strArtist,
                // strStyle: resJSON.artists[0].strStyle,
                // strGenre: resJSON.artists[0].strGenre,
                // strBiographyEN: resJSON.artists[0].strBiographyEN
            };
        }).catch(error => {
            console.log('errrr')
            console.error(error);
        });

}
export default { fetchArtista }