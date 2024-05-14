export default function playSounds(ruta) {
  const contextoAudio = new (window.AudioContext || window.webkitAudioContext)();
  const fuente = contextoAudio.createBufferSource();

  fetch(ruta)
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => contextoAudio.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
      fuente.buffer = audioBuffer;
      fuente.connect(contextoAudio.destination);
      fuente.start();
  })
  .catch(error => console.error('Error al cargar el audio:', error));
}