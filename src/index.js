import * as Tone from "tone";
import { synths, notes } from './synths'
import { synthCells } from './utils/synthCells'
import { isPlaying } from './utils/playing'
//TEMPO SELECTOR
const select = document.getElementsByTagName('select')[0]

Tone.Transport.bpm.value = 100;
function pickTempo(event) {
  Tone.Transport.bpm.value = event.target.value;
}
select.addEventListener('change', pickTempo)


//Hooks up each synth to speakers
synths.forEach(synth => synth.toMaster());

let dronePlay = false;

//DRONE SYNTH
const drone = synths[0];
// create a new sequence with the synth and notes
const droner = new Tone.Sequence(

  function (time, note) {
    drone.triggerAttackRelease(note, "10hz", time);
  },
  notes[0],
  "8n"
);


const activeButtons = document.getElementsByClassName("active")

const deactivate = (HTMLColl) => {
  const arrayed = Array.from(HTMLColl)
  if (Array.isArray(arrayed))
    arrayed.forEach(element => element.className = "")
  if (dronePlay) {
    droner.stop()
    droneButton.className = "inactive-drone"
    dronePlay = false
  }
  synthCells.forEach(synthCell => synthCell.stop())

}
// STOP BUTTON
document.getElementById("stop").addEventListener("click", function () {
  deactivate(activeButtons)
  if (dronePlay) {
    dronePlay = false
  }
  Tone.Transport.stop()

});

//DRONE
const droneButton = document.getElementById("drone")

droneButton.addEventListener("click", function () {
  if (!dronePlay) {
    this.className = "active-drone"
    droner.start()
    Tone.Transport.start("+0.1");
    dronePlay = true;
  } else {
    droner.stop();
    this.className = "inactive-drone"
    dronePlay = false;

  }
});

document.getElementById("1").addEventListener("click", function () {
  console.log("???????", this.id)
  if (!dronePlay) {
    Tone.Transport.start("+0.1");
  }
  if (!isPlaying[0]) {
    synthCells[0].start()
    isPlaying[0] = true;
    this.className = "active"
  } else {
    synthCells[0].stop();
    this.className = ""
    isPlaying[0] = false;
  }
});


//========= PLAYER FOR EACH CELL ===========\\

const player = (e) => {
  if (e.target.id !== "drone" && e.target.id !== "stop" && e.target.id !== "1") {
    console.log(e.target.id)
    let id = e.target.id - 1
    console.log("in player", e.srcElement)
    if (!isPlaying[id]) {
      synthCells[id].start()
      isPlaying[id] = true;
      e.srcElement.className = "active"
    } else {
      synthCells[id].stop();
      e.srcElement.className = ""
      isPlaying[id] = false;
    }
  }
}

const buttons = document.getElementsByTagName("button")
const buttonArr = Array.from(buttons)
buttonArr.forEach(button => button.addEventListener("click", player));

