var topRated = [];
let twiceRequest = new XMLHttpRequest();
twiceRequest.open("GET", "https://api.themoviedb.org/3/movie/top_rated?api_key=1ed824424ba92372fda5f9a9469d4875&language=en-US&page=2");
twiceRequest.send();
twiceRequest.addEventListener("readystatechange", function() {
    if (twiceRequest.readyState == 4 && twiceRequest.status == 200) {
        topRated = JSON.parse(twiceRequest.response).results
        displayTopRated();
    }

})

function displayTopRated() {
    let cartoona = ``;
    for (var i = 0; i < topRated.length; i++) {
        cartoona += `
                 <div class="col-md-3  col-sm-6 mb-4">
                    <div class="positioni-relative">
                            <div class="container-box">
                            <img src="https://image.tmdb.org/t/p/w500/${topRated[i].poster_path}" class="img-fluid w-100">
                            <!-- <img src="https://image.tmdb.org/t/p/w500/${topRated[i].backdrop_path}" class="img-fluid w-100"> -->
                            </div>
                        <span class="position-absolute rate text-white font-weight-bold">${topRated[i].vote_average}</span>
                        <div class="post">
                            <h5 class="title font-weight-bold text-info my-3">
                                ${topRated[i].original_title}  
                            </h5>
                            <p class="desc text-white">
                                ${topRated[i].release_date}
                            </p>
                        </div>
                    </div>
                </div>
                `
    }
    document.getElementById("topRated").innerHTML = cartoona;

}