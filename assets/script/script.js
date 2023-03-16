
function displayPicture() {

    var displayPicture = document.getElementById("displayPicture");
    var myAudio = document.getElementById("myAudio");

    displayPicture.addEventListener("click", function () {
        var picture = document.getElementById("myPicture");
        if (picture.style.display === "none") {
            picture.style.display = "block";
            myAudio.play();
        } else {
            picture.style.display = "none";
            myAudio.pause();
        }
    }
    )
}