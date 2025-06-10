const giftContainer = document.getElementById('gift');
const jijiContainer = document.getElementById('jiji');
const clickHere = document.getElementById('click-here');
const meowSound = document.getElementById('meow-sound');

const giftAnimation = lottie.loadAnimation({
  container: giftContainer,
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'assets/gift.json'
});

const jijiAnimation = lottie.loadAnimation({
  container: jijiContainer,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/jiji.json'
});

clickHere.addEventListener('click', () => {
  clickHere.style.display = 'none';
  giftAnimation.playSegments([0, 60], true);
  giftAnimation.addEventListener('complete', () => {
    giftContainer.style.display = 'none';
    jijiContainer.style.display = 'block';
    jijiAnimation.play();
    meowSound.play();
  });
});
