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



document.getElementById("btn1").addEventListener("click", function () {
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

document.getElementById("btn2").addEventListener("click", function () {
  if (!isPlaying[1]) {
    synthCells[1].start()
    isPlaying[1] = true;
    this.className = "active"
  } else {
    synthCells[1].stop();
    this.className = ""
    isPlaying[1] = false;
  }
});

document.getElementById("btn3").addEventListener("click", function () {
  if (!isPlaying[2]) {
    synthCells[2].start();
    isPlaying[2] = true;
    this.className = "active"
  } else {
    synthCells[2].stop();
    this.className = ""
    isPlaying[2] = false;
  }
});

document.getElementById("btn4").addEventListener("click", function () {

  if (!isPlaying[3]) {
    // Tone.Transport.start();
    synthCells[3].start();
    isPlaying[3] = true;
    this.className = "active"
  } else {
    synthCells[3].stop();
    this.className = ""
    isPlaying[3] = false;
  }
});

document.getElementById("btn5").addEventListener("click", function () {
  if (!isPlaying[4]) {
    synthCells[4].start();
    isPlaying[4] = true;
    this.className = "active"
  } else {
    synthCells[4].stop();
    this.className = ""
    isPlaying[4] = false;
  }
});

document.getElementById("btn6").addEventListener("click", function () {

  if (!isPlaying[5]) {
    synthCells[5].start();
    isPlaying[5] = true;
    this.className = "active"
  } else {
    synthCells[5].stop();
    this.className = ""
    isPlaying[5] = false;
  }
});

document.getElementById("btn7").addEventListener("click", function () {
  if (!isPlaying[6]) {
    synthCells[6].start();
    isPlaying[6] = true;
    this.className = "active"
  } else {
    synthCells[6].stop();
    this.className = ""
    isPlaying[6] = false;
  }
});

document.getElementById("btn8").addEventListener("click", function () {
  if (!isPlaying[7]) {
    synthCells[7].start();
    isPlaying[7] = true;
    this.className = "active"
  } else {
    synthCells[7].stop();
    this.className = ""
    isPlaying[7] = false;
  }
});

document.getElementById("btn9").addEventListener("click", function () {
  if (!isPlaying[8]) {
    synthCells[8].start();
    isPlaying[8] = true;
    this.className = "active"
  } else {
    synthCells[8].stop();
    this.className = ""
    isPlaying[8] = false;
  }
});

document.getElementById("btn10").addEventListener("click", function () {
  if (!isPlaying[9]) {
    synthCells[9].start();
    isPlaying[9] = true;
    this.className = "active"
  } else {
    synthCells[9].stop();
    this.className = ""
    isPlaying[9] = false;
  }
});

document.getElementById("btn11").addEventListener("click", function () {
  if (!isPlaying[10]) {
    synthCells[10].start();
    isPlaying[10] = true;
    this.className = "active"
  } else {
    synthCells[10].stop();
    this.className = ""
    isPlaying[10] = false;
  }
});

document.getElementById("btn12").addEventListener("click", function () {
  if (!isPlaying[11]) {
    synthCells[11].start();
    isPlaying[11] = true;
    this.className = "active"
  } else {
    synthCells[11].stop();
    this.className = ""
    isPlaying[11] = false;
  }
});

document.getElementById("btn13").addEventListener("click", function () {
  if (!isPlaying[12]) {
    synthCells[12].start();
    isPlaying[12] = true;
    this.className = "active"
  } else {
    synthCells[12].stop();
    this.className = ""
    isPlaying[12] = false;
  }
});
document.getElementById("btn14").addEventListener("click", function () {
  if (!isPlaying[13]) {
    synthCells[13].start();
    isPlaying[13] = true;
    this.className = "active"
  } else {
    synthCells[13].stop();
    this.className = ""
    isPlaying[13] = false;
  }
});
document.getElementById("btn15").addEventListener("click", function () {
  if (!isPlaying[14]) {
    synthCells[14].start();
    isPlaying[14] = true;
    this.className = "active"
  } else {
    synthCells[14].stop();
    this.className = ""
    isPlaying[14] = false;
  }
});
document.getElementById("btn16").addEventListener("click", function () {
  if (!isPlaying[15]) {
    synthCells[15].start();
    isPlaying[15] = true;
    this.className = "active"
  } else {
    synthCells[15].stop();
    this.className = ""
    isPlaying[15] = false;
  }
});
document.getElementById("btn17").addEventListener("click", function () {
  if (!isPlaying[16]) {
    synthCells[16].start();
    isPlaying[16] = true;
    this.className = "active"
  } else {
    synthCells[16].stop();
    this.className = ""
    isPlaying[16] = false;
  }
});
document.getElementById("btn18").addEventListener("click", function () {
  if (!isPlaying[17]) {
    synthCells[17].start();
    isPlaying[17] = true;
    this.className = "active"
  } else {
    synthCells[17].stop();
    this.className = ""
    isPlaying[17] = false;
  }
});

