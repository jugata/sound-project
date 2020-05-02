//import { Synth, Transport } from "tone";
// const axios = require("axios");

import * as Tone from "tone";
//Tone.Transport.start();

//TEMPO SELECTOR
const select = document.getElementsByTagName('select')[0]

Tone.Transport.bpm.value = 100;
function pickTempo(event) {
  console.log(event.target.value, " is event.target.value")
  Tone.Transport.bpm.value = event.target.value;
}
select.addEventListener('change', pickTempo)


const synths = [
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth()
];

const notes = [
  //drone
  ["C5", "C5"],
  //cell1
  [[null, [null, "C4"]], "E4"],
  ["E4", "F4", "E4", null],
  ["E4", "F4", "G4", null],
  //cell4
  ["C2", null, null, "C3", null, null, null],
  [null, [null, ["C6", "C6"]], "C6", null, null, null, null, null],
  ["G4", null, null, "G4", null, null, "F4", null]


];
// create a synth
//Hooks up each synth to speakers
synths.forEach(synth => synth.toDestination());

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
    console.log("cell 1 triggered>>>>>")
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
    console.log("cell 4 triggered>>>>>")
  },
  notes[4],
  "2n"
);
/*
const cell4 = synths[4];
const synthCell4 = new Tone.Sequence(
  function (time, note) {
    cell4.triggerAttackRelease(note, "10hz", time);
    console.log("cell 4 triggered>>>>>")
  },
  notes[4],
  "2n"
);
*/

const cell5 = synths[5];
// create a new sequence with the synth and notes
const synthCell5 = new Tone.Sequence(
  function (time, note) {
    cell5.triggerAttackRelease(note, "10hz", time);
  },
  notes[5],
  "4n"
);

const cell6 = synths[6];
// create a new sequence with the synth and notes
const synthCell6 = new Tone.Sequence(
  function (time, note) {
    cell6.triggerAttackRelease(note, "10hz", time);
  },
  notes[6],
  "2n"
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

// STOP BUTTON
document.getElementById("stop").addEventListener("click", function () {
  Tone.Transport.stop();
});

//DRONE
document.getElementById("drone").addEventListener("click", function () {
  //synths[0].triggerAttackRelease("C6", "16n");
  if (!dronePlay) {
    Tone.Transport.start();
    droner.start()
    dronePlay = true;
  } else {
    droner.stop();
    dronePlay = false;
  }

});

document.getElementById("btn1").addEventListener("click", function () {
  // Tone.Transport.start();
  // synthCell1.start()

  if (!playing1) {
    Tone.Transport.start();
    synthCell1.start()
    playing1 = true;
  } else {
    synthCell1.stop();
    playing1 = false;
  }

  //fetchData()
  // fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))
  //document.getElementById("demo").innerHTML = fetchFunc;
});

document.getElementById("btn2").addEventListener("click", function () {

  if (!playing2) {
    Tone.Transport.start();
    synthCell2.start()
    playing2 = true;
  } else {
    synthCell2.stop();
    playing2 = false;
  }

});

document.getElementById("btn3").addEventListener("click", function () {
  //synths[0].triggerAttackRelease("C6", "16n");
  if (!playing3) {
    Tone.Transport.start();
    synthCell3.start();
    playing3 = true;
  } else {
    synthCell3.stop();
    playing3 = false;
  }
});

document.getElementById("btn4").addEventListener("click", function () {

  if (!playing4) {
    Tone.Transport.start();
    synthCell4.start();
    playing4 = true;
  } else {
    synthCell4.stop();
    playing4 = false;
  }
});

document.getElementById("btn5").addEventListener("click", function () {
  //synths[0].triggerAttackRelease("C6", "16n");
  if (!playing5) {
    Tone.Transport.start();
    synthCell5.start();
    playing5 = true;
  } else {
    synthCell5.stop();
    playing5 = false;
  }
});

document.getElementById("btn6").addEventListener("click", function () {
  //synths[0].triggerAttackRelease("C6", "16n");
  if (!playing6) {
    Tone.Transport.start();
    synthCell6.start();
    playing6 = true;
  } else {
    synthCell6.stop();
    playing6 = false;
  }
});


//synth.triggerAttackRelease("E4", "8n");
// fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))

// const synth = new Tone.Synth().toDestination();
// new Tone.DuoSynth()
// new Tone.PluckSynth()

/*
if (!playing) {
  Tone.Transport.start();
  synthCell1.start()
  playing = true;
} else {
  Tone.Transport.stop();
  playing = false;
}
*/

// Setup the synth to be ready to play on beat 1
// synthPart.start();
// Note that if you pass a time into the start method
// you can specify when the synth part starts
// e.g. .start('8n') will start after 1 eighth note
// start the transport which controls the main timeline
//Tone.Transport.start();







// Tone.Transport.scheduleRepeat(repeat, '8n')
// Tone.Transport.start();
//play a note every quarter-note
// const loop = new Tone.Loop(time => {
//   synth.triggerAttackRelease("C2", "8n", time);
// }, "4n");

// function fetchData() {
//   fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))
// }
/* AXIOS CALL
function fetchData() {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
      console.log('hi', response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
*/
/*
let loopBeat;
let bassSynth;

function setup() {
  bassSynth = new Tone.MembraneSynth().toMaster();

  loopBeat = new Tone.Loop(song, '4n');

  Tone.Transport.bpm.value = 140;
  Tone.Transport.start();
  loopBeat.start(0);

}
function song(time) {
  bass.synth.triggerAttackRelease('G', '8n', time)
  console.log(time)
}
*/



/*
document.querySelector('button').addEventListener('click', async () => {
  await Tone.start()
  console.log('audio is ready first')
})
*/
