const loadAudio = function (fileMp3) {
  return new Howl({
    src: `./audio/${fileMp3}.mp3`,
    html5: true,
    volume: 0.2
  })
}

const audio = {
  Map: loadAudio('map'),
  initBattle: loadAudio('initBattle'),
  battle: loadAudio('battle'),
  tackleHit: loadAudio('tackleHit'),
  fireballHit: loadAudio('fireballHit'),
  initFireball: loadAudio('initFireball'),
  victory: loadAudio('victory')
}
