
const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u','ı', 'o', 'p', 'ğ', 'ü','a', 's', 'd', 'f', 'g', 'h', 'j','k', 'k', 'l', 'ş', 'i', ',', '<','z', 'x', 'c', 'v', 'b', 'n', 'm','ö', 'ç']
const BLACK_KEYS = ['1', '2', '4', '5', '7','8', '9']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
	
})



document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})


function playNote(key) {
	console.log(document.getElementById(key.dataset.note))
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}