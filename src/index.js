import * as Tone from "tone";


//TEMPO SELECTOR
const select = document.getElementsByTagName('select')[0]

Tone.Transport.bpm.value = 100;
function pickTempo(event) {
  console.log(event.target.value, " is event.target.value")
  Tone.Transport.bpm.value = event.target.value;
}
select.addEventListener('change', pickTempo)




var synthA = new Tone.Synth({
  oscillator: {
    type: 'fmsquare'
  },
  envelope: {
    attack: 2,
    decay: 1,
    sustain: 0.4,
    release: 4
  }
}).toMaster()


const synths = [
  // DRONE
  new Tone.Synth(),
  // Cell 1
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth(),
  //Long 5
  new Tone.Synth(),
  new Tone.MembraneSynth(),
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth(),
  // 11
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.MembraneSynth(),
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth()
];

const notes = [
  //drone
  ["C5", "C5"],
  //cell 1
  [[null, [null, "C4"]], "E4"],
  [[null, [null, "C5"]], "E5", "F5", "E5"],
  [null, "E4", "F4", "E4"],
  //cell 4
  ["E4", "F4", "G4", null],
  ["C2", null, "C3", null, null],
  [null, [null, ["C7", "C7"]], "C7", null, null, null, null, [null, ["C6", "C6"]], "C6", null, null, null],
  //cell 7
  ["G3", "F3", "F3", null, null, null, [null], null],
  [null, ["B5", "G5"], null, null, null, [null, ["B4", "G4"]], null, null, null],
  [[null, "F4", "G4", "B4", "G4", "B4", "G4"], null, null, null, null, null],
  //cell 10
  [[null, ["F4", "G4"]], "B4", null, [[null, "C5", [null]], null], null, null],
  [null, [null, [null, "B5"]], "G5", [null, "G5", "F5", "G5"], null, null, null, "G5", null, null, null],
  ["C3", "B2", "G2", "Gb2"],
  //cell 13
  [["G2", "B2", "C3", "B2"], null, null, null, ["G4", "B4", "C5", "B4"], null, null, null, null, null],
  [["B2", "C3", "B2", "C3", "B2"], null, null, null, ["B3", "C4", "B3", "C4", "B3"], null],
  [["E3", "Gb3", "E3", "Gb3"], "E3", null, [null, "E3"], null, null],
  //cell 16
  [[null], "G5", null, null, null],
  [["E5", "Gb5", "E5", "Gb5"], "G4", [null, "E5", "Gb5", "E5", "Gb5", "E5"], null, null, null, null],
  ["E4", "E4", "E4", "E4", "E4", "Gb4", "G4", "A4", "B4", null, null, null, null, null]

];
// create a synth
//Hooks up each synth to speakers
synths.forEach(synth => synth.toMaster());

//DRONE SYNTH
const drone = synths[0];
// create an array of notes to be played
//const notes = ["C5", "C5"];
// create a new sequence with the synth and notes
const droner = new Tone.Sequence(

  function (time, note) {
    drone.triggerAttackRelease(note, "10hz", time);
  },
  notes[0],
  "8n"
);

const cell1 = synths[1];
const synthCell1 = new Tone.Sequence(
  function (time, note) {
    cell1.triggerAttackRelease(note, "10hz", time);
  },
  notes[1],
  "8n"
);

const cell2 = synths[2];
// create an array of notes to be played
// create a new sequence with the synth and notes
const synthCell2 = new Tone.Sequence(
  function (time, note) {
    cell2.triggerAttackRelease(note, "10hz", time);
  },
  notes[2],
  "8n"
);

const cell3 = synths[3];
// create a new sequence with the synth and notes
const synthCell3 = new Tone.Sequence(
  function (time, note) {
    cell3.triggerAttackRelease(note, "10hz", time);
  },
  notes[3],
  "8n"
);

const cell4 = synths[4];
const synthCell4 = new Tone.Sequence(
  function (time, note) {
    cell4.triggerAttackRelease(note, "10hz", time);

  },
  notes[4],
  "8n"
);

const cell5 = synthA//synths[5];
// create a new sequence with the synth and notes
const synthCell5 = new Tone.Sequence(
  function (time, note) {
    cell5.triggerAttackRelease(note, "1hz", time);
  },
  notes[5],
  "1t"
);

const cell6 = synths[6];
const synthCell6 = new Tone.Sequence(
  function (time, note) {
    cell6.triggerAttackRelease(note, "10hz", time);
  },
  notes[6],
  "4n"
);

const cell7 = synths[7];
const synthCell7 = new Tone.Sequence(
  function (time, note) {
    cell7.triggerAttackRelease(note, "1hz", time);
  },
  notes[7],
  "1t"
);

const cell8 = synths[8];
const synthCell8 = new Tone.Sequence(
  function (time, note) {
    cell8.triggerAttackRelease(note, "10hz", time);
  },
  notes[8],
  "8n"
);

const cell9 = synths[9];
const synthCell9 = new Tone.Sequence(
  function (time, note) {
    cell9.triggerAttackRelease(note, "10hz", time);
  },
  notes[9],
  "2n"
);

const cell10 = synths[10];
const synthCell10 = new Tone.Sequence(
  function (time, note) {
    cell10.triggerAttackRelease(note, "0.5hz", time);
  },
  notes[10],
  "1t"
);

const cell11 = synths[11];
const synthCell11 = new Tone.Sequence(
  function (time, note) {
    cell11.triggerAttackRelease(note, "10hz", time);
  },
  notes[11],
  "4n"
);

const cell12 = synths[12];
const synthCell12 = new Tone.Sequence(
  function (time, note) {
    cell12.triggerAttackRelease(note, "1hz", time);
  },
  notes[12],
  "1n"
);

const cell13 = synths[13];
const synthCell13 = new Tone.Sequence(
  function (time, note) {
    cell13.triggerAttackRelease(note, "10hz", time);
  },
  notes[13],
  "4n"
);

const cell14 = synths[14];
const synthCell14 = new Tone.Sequence(
  function (time, note) {
    cell14.triggerAttackRelease(note, "10hz", time);
  },
  notes[14],
  "2n"
);

const cell15 = synths[15];
const synthCell15 = new Tone.Sequence(
  function (time, note) {
    cell15.triggerAttackRelease(note, "10hz", time);
  },
  notes[15],
  "4n"
);

const cell16 = synths[16];
const synthCell16 = new Tone.Sequence(
  function (time, note) {
    cell16.triggerAttackRelease(note, "1hz", time);
  },
  notes[16],
  "2n"
);

const cell17 = synths[17];
const synthCell17 = new Tone.Sequence(
  function (time, note) {
    cell17.triggerAttackRelease(note, "10hz", time);
  },
  notes[17],
  "4n"
);

const cell18 = synths[18];
const synthCell18 = new Tone.Sequence(
  function (time, note) {
    cell18.triggerAttackRelease(note, "10hz", time);
  },
  notes[18],
  "2t"
);

let dronePlay = false;
let playing1 = false;
let playing2 = false;
let playing3 = false;
let playing4 = false;
let playing5 = false;
let playing6 = false;
let playing7 = false;
let playing8 = false;
let playing9 = false;
let playing10 = false;
let playing11 = false;
let playing12 = false;
let playing13 = false;
let playing14 = false;
let playing15 = false;
let playing16 = false;
let playing17 = false;
let playing18 = false;

// STOP BUTTON
document.getElementById("stop").addEventListener("click", function () {
  Tone.Transport.stop();
});

//DRONE
document.getElementById("drone").addEventListener("click", function () {
  //synths[0].triggerAttackRelease("C6", "16n");

  if (!dronePlay) {
    // if (Tone.context.state !== 'running') {
    //   console.log("here")
    //   Tone.context.resume();
    // }
    Tone.Transport.start("+0.1");
    droner.start()
    dronePlay = true;
  } else {
    droner.stop();
    dronePlay = false;
  }
});



document.getElementById("btn1").addEventListener("click", function () {
  console.log("pushed")
  if (!playing1) {
    synthCell1.start()
    playing1 = true;
    this.className = "active"
  } else {
    synthCell1.stop();
    this.className = ""
    playing1 = false;
  }
});

document.getElementById("btn2").addEventListener("click", function () {
  if (!playing2) {

    synthCell2.start()
    playing2 = true;
  } else {
    synthCell2.stop();
    playing2 = false;
  }
});

document.getElementById("btn3").addEventListener("click", function () {
  if (!playing3) {
    synthCell3.start();
    playing3 = true;
  } else {
    synthCell3.stop();
    playing3 = false;
  }
});

document.getElementById("btn4").addEventListener("click", function () {

  if (!playing4) {
    // Tone.Transport.start();
    synthCell4.start();
    playing4 = true;
  } else {
    synthCell4.stop();
    playing4 = false;
  }
});

document.getElementById("btn5").addEventListener("click", function () {
  if (!playing5) {
    synthCell5.start();
    playing5 = true;
  } else {
    synthCell5.stop();
    playing5 = false;
  }
});

document.getElementById("btn6").addEventListener("click", function () {

  if (!playing6) {
    synthCell6.start();
    playing6 = true;
  } else {
    synthCell6.stop();
    playing6 = false;
  }
});

document.getElementById("btn7").addEventListener("click", function () {
  if (!playing7) {
    synthCell7.start();
    playing7 = true;
  } else {
    synthCell7.stop();
    playing7 = false;
  }
});

document.getElementById("btn8").addEventListener("click", function () {
  if (!playing8) {
    synthCell8.start();
    playing8 = true;
  } else {
    synthCell8.stop();
    playing8 = false;
  }
});

document.getElementById("btn9").addEventListener("click", function () {
  if (!playing9) {
    synthCell9.start();
    playing9 = true;
  } else {
    synthCell9.stop();
    playing9 = false;
  }
});

document.getElementById("btn10").addEventListener("click", function () {
  if (!playing10) {
    synthCell10.start();
    playing10 = true;
  } else {
    synthCell10.stop();
    playing10 = false;
  }
});

document.getElementById("btn11").addEventListener("click", function () {
  if (!playing11) {
    synthCell11.start();
    playing11 = true;
  } else {
    synthCell11.stop();
    playing11 = false;
  }
});

document.getElementById("btn12").addEventListener("click", function () {
  if (!playing12) {
    synthCell12.start();
    playing12 = true;
  } else {
    synthCell12.stop();
    playing12 = false;
  }
});

document.getElementById("btn13").addEventListener("click", function () {
  if (!playing13) {
    synthCell13.start();
    playing13 = true;
  } else {
    synthCell13.stop();
    playing13 = false;
  }
});
document.getElementById("btn14").addEventListener("click", function () {
  if (!playing14) {
    synthCell14.start();
    playing14 = true;
  } else {
    synthCell14.stop();
    playing14 = false;
  }
});
document.getElementById("btn15").addEventListener("click", function () {
  if (!playing15) {
    synthCell15.start();
    playing15 = true;
  } else {
    synthCell15.stop();
    playing15 = false;
  }
});
document.getElementById("btn16").addEventListener("click", function () {
  if (!playing16) {
    synthCell16.start();
    playing16 = true;
  } else {
    synthCell16.stop();
    playing16 = false;
  }
});
document.getElementById("btn17").addEventListener("click", function () {
  if (!playing17) {
    synthCell17.start();
    playing17 = true;
  } else {
    synthCell17.stop();
    playing17 = false;
  }
});
document.getElementById("btn18").addEventListener("click", function () {
  if (!playing18) {
    synthCell18.start();
    playing18 = true;
  } else {
    synthCell18.stop();
    playing18 = false;
  }
});

