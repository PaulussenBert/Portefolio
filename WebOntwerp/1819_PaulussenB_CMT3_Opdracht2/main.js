// Tijden voor animaties
var letterTime = 1000;
var droptime = 800;

// VANS Letters tekenen
var lineDrawing = anime({
  targets: ".letter",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutCubic",
  duration: letterTime,
  delay: function(el, i) {
    return letterTime * i;
  },
  begin: function(anim) {
    var letters = document.querySelectorAll(".letter"),
      i;
    // Letters om de beurt tekenen
    for (i = 0; i < letters.length; ++i) {
      letters[i].setAttribute("stroke", "white");
      letters[i].setAttribute("fill", "none");
    }
  },
  // Vulling letters VANS-logo
  update: function(anim) {
    if (anim.currentTime >= letterTime) {
      document.querySelector(".letter-v").setAttribute("fill", "white");
    }
    if (anim.currentTime >= 2 * letterTime) {
      document.querySelector(".letter-a").setAttribute("fill", "white");
    }
    if (anim.currentTime >= 3 * letterTime) {
      document.querySelector(".letter-n").setAttribute("fill", "white");
    }
    if (anim.currentTime >= 4 * letterTime) {
      document.querySelector(".letter-s").setAttribute("fill", "white");
    }
  },
  autoplay: false
});

// Linkse foto droppen
var dropPictureL = anime({
    targets: ".PL",
    translateY: { value: 1300, duration:5000, delay: 500 },
    autoplay:true
})

// Center foto droppen
var dropPictureC = anime({
    targets: ".PC",
    translateY: { value: -1000, duration:4500, delay: 1000 },
    autoplay:true
})

// Rechtse foto droppen
var dropPictureR = anime({
    targets: ".PR",
    translateY: { value: 1000, duration:4000, delay: 1500 },
    autoplay:true
})


document.querySelector(".play-drawing").onclick = lineDrawing.restart;