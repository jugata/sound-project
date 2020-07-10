import { Transport, Sequence } from "tone"
import { synths, notes } from './synths'
import { synthCells } from './utils/synthCells'
import { isPlaying } from './utils/playing'

synths.forEach(synth => synth.toMaster())

//=================TEMPO SELECTOR===================\\
const select = document.getElementsByTagName('select')[0]

Transport.bpm.value = 100
function pickTempo(event) {
  Transport.bpm.value = event.target.value
}
select.addEventListener('change', pickTempo)

//==================CLASS TOGGLING===================\\
let dronePlay = false
const activeButtons = document.getElementsByClassName("active")

const deactivate = (HTMLColl) => {
  const arrayed = Array.from(HTMLColl)
  if (Array.isArray(arrayed)) {
    arrayed.forEach(element => element.className = "")
    synthCells.forEach(synthCell => synthCell.stop())
    for (let i = 0; i < isPlaying.length; i++) {
      if (isPlaying[i]) isPlaying[i] = false
    }
  }
  if (droneButton.className === "active-drone") {
    droner.stop()
    droneButton.className = "inactive-drone"
    dronePlay = false
  }
}

//=====================STOP=======================\\
document.getElementById("stop").addEventListener("click", function () {
  deactivate(activeButtons)
})

//==================DRONE===================\\
const drone = synths[0]
const droner = new Sequence(
  function (time, note) {
    drone.triggerAttackRelease(note, "32n", time)
  },
  notes[0],
  "8n"
)

const droneButton = document.getElementById("drone")

droneButton.addEventListener("click", function () {
  if (!dronePlay) {
    Transport.start("+0.1")
    droner.start()
    this.className = "active-drone"
    dronePlay = true
  } else {
    droner.stop()
    this.className = "inactive-drone"
    dronePlay = false
  }
})
//==================CELL 1==================\\
document.getElementById("1").addEventListener("click", function () {
  if (!dronePlay) {
    Transport.start("+0.1")
  }
  if (!isPlaying[0]) {
    synthCells[0].start()
    isPlaying[0] = true
    this.className = "active"
  } else {
    synthCells[0].stop()
    this.className = ""
    isPlaying[0] = false
  }
})

//======================REMAINING CELLS=======================\\

const player = (e) => {
  if (e.target.id !== "drone" && e.target.id !== "stop" && e.target.id !== "1") {
    let id = e.target.id - 1
    if (id >= 0) {
      if (!isPlaying[id]) {
        synthCells[id].start()
        isPlaying[id] = true
        e.srcElement.className = "active"
      } else {
        synthCells[id].stop()
        e.srcElement.className = ""
        isPlaying[id] = false
      }
    }
  }
}

const buttons = document.getElementsByTagName("button")
const buttonArr = Array.from(buttons)
buttonArr.forEach(button => button.addEventListener("click", player))

