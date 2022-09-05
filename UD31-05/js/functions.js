
function changeImg(url, alt) {
    let imgPrincipal = document.getElementById("img-sel");
    let altImg = document.getElementById("img-alt");
    imgPrincipal.src=url;
    console.log(alt);
    altImg.innerHTML = alt;
}