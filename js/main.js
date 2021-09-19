var posts = [];
var myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.themoviedb.org/3/trending/all/day?api_key=1ed824424ba92372fda5f9a9469d4875");
myRequest.send();
myRequest.addEventListener("readystatechange", function() {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        posts = JSON.parse(myRequest.response).results
        displayPosts();
    }

})

function displayPosts() {
    let cartoona = ``;
    for (var i = 0; i < posts.length; i++) {
        cartoona += `
                 
                 <div class="col-md-3 mb-4 col-sm-6">
                    <div class="positioni-relative">
                            <div class="container-box">
                            <img src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}" class="img-fluid w-100">
                            <!-- <img src="https://image.tmdb.org/t/p/w500/${posts[i].backdrop_path}" class="img-fluid w-100"> -->
                            </div>
                        <span class="position-absolute rate text-white font-weight-bold">${posts[i].vote_average}</span>
                        <div class="post">
                            <h5 class="title font-weight-bold text-info my-3">
                                ${posts[i].original_title}  
                            </h5>
                            <p class="desc text-white">
                                ${posts[i].release_date}
                            </p>
                        </div>
                    </div>
                </div>
                `
    }
    document.getElementById("postsRow").innerHTML = cartoona;

}