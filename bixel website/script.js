let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>
{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.game-text', {delay:200, origin: 'top'});
sr.reveal('.game-img', {delay:450, origin: 'top'});
sr.reveal('.icons', {delay:500, origin: 'left'});
sr.reveal('.scroll-down', {delay:500, origin: 'right'});


var player;
var playerContainer = document.querySelector('.player-container');
var ctaButton = document.querySelector('.ctaa');

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'T_vTs_CKquo',
    events: {
      // Add any additional events or callbacks here if needed
    }
  });
}

ctaButton.addEventListener('click', function() {
  // Load the YouTube API script if it hasn't been loaded yet
  if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  } else {
    // If the API is already loaded, create the YouTube player
    createYouTubePlayer();
  }
});

function createYouTubePlayer() {
  playerContainer.classList.add('open');
  player.playVideo();
}
