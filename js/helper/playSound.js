export default function playSound() {
  const audio = new Audio('../../sounds/start.mp3');
  return {
    play: function() {
      audio.play();
    }
  };
}