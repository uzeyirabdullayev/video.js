// var links = ["videoplayback.mp4", "video2.mp4"];
// var active = 0;

// var btn = document.getElementById("change");

// btn.addEventListener("click", function () {
//     var video = document.getElementById("video");
//     video.src = links[active];
//     active++;
//     if (active >= links.length) {
//         active = 0;
//     }

// });

var videos = document.getElementsByTagName('video');

for (var i = 0; i < videos.length; i++) {
    videos[i].addEventListener('click', function () {
        if (this.paused) {
            for (var j = 0; j < videos.length; j++) {
                if (!videos[j].paused) {
                    videos[j].pause();
                }


            }
            this.play();
        }

        else {
            this.pause();
        }
    })
}