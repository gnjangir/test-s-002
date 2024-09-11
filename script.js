const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});

// video view

// document.addEventListener('DOMContentLoaded', () => {
//   const video = document.getElementById('video');
//   const playPauseBtn = document.getElementById('playPauseBtn');

//   playPauseBtn.addEventListener('click', () => {
//       if (video.paused) {
//           video.play();
//           playPauseBtn.textContent = 'Pause';
//           playPauseBtn.classList.remove('play');
//           playPauseBtn.classList.add('pause');
//       } else {
//           video.pause();
//           playPauseBtn.textContent = 'Play';
//           playPauseBtn.classList.remove('pause');
//           playPauseBtn.classList.add('play');
//       }
//   });
// });
