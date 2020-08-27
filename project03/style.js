const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');



// Functions
/**
 * 1.   toggleVideo - play or pause vidoe
 * 2.   if video is playing, then pause,
 *      if vidoe is paused, then play.
 */
function toggleVideo()

{
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

/**
 * 2.   updatIcon - toggle between play and puase icons
 * 
 * if  vidoe is playing, then pause icon
 * if video is paused, then show play icon
 */


function updateIcon() {


};


// 3.  function updateProgress- update the position the progressbar

function updateProgress() {

    return true;
};


// 4.   stopVideo - stop vidoe playback reset time to zero

function stopVideo() {
    return true;
};


//  5.  setProgress - update vidoe playback time based on change in progress bar, manually

function setProgress() {
    return true;
};

// Event Listners....................................

// 1. Video Element - click to paly or pause video

video.addEventListener('click', toggleVideo);


// 2. video Element - pause to toggle play icon to pause icon

video.addEventListener('pause', updateIcon);
// video element - play to toggle pause icon back to play icon
video.addEventListener('play', upateIcon);

// 4.  video Elemenet- update progress bar and timestamp

video.addEventListener('timeupdate', updateProgress);
// 5. Play Button- Click to paly or pause vidoe

play.addEventListener('click', toggleVideo);

// 6. Stop button- click to reset video and pause video

stop.addEventListener('click', stopVideo);

// 7. Progress Bar - Change position to time of playback
progress.addEventListener('change', setProgress);