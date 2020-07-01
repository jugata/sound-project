import { Sequence } from "tone";
import { synths, notes } from '../synths'



const cell1 = synths[1];
const synthCell1 = new Sequence(
  function (time, note) {
    cell1.triggerAttackRelease(note, "10hz", time);
  },
  notes[1],
  "8n"
);

const cell2 = synths[2];
// create an array of notes to be played
// create a new sequence with the synth and notes
const synthCell2 = new Sequence(
  function (time, note) {
    cell2.triggerAttackRelease(note, "10hz", time);
  },
  notes[2],
  "8n"
);

const cell3 = synths[3];
// create a new sequence with the synth and notes
const synthCell3 = new Sequence(
  function (time, note) {
    cell3.triggerAttackRelease(note, "10hz", time);
  },
  notes[3],
  "8n"
);


const cell4 = synths[4];
const synthCell4 = new Sequence(
  function (time, note) {
    cell4.triggerAttackRelease(note, "10hz", time);

  },
  notes[4],
  "8n"
);

const cell5 = synths[5];
// create a new sequence with the synth and notes
const synthCell5 = new Sequence(
  function (time, note) {
    cell5.triggerAttackRelease(note, "1hz", time);
  },
  notes[5],
  "1t"
);

const cell6 = synths[6];
const synthCell6 = new Sequence(
  function (time, note) {
    cell6.triggerAttackRelease(note, "10hz", time);
  },
  notes[6],
  "4n"
);

const cell7 = synths[7];
const synthCell7 = new Sequence(
  function (time, note) {
    cell7.triggerAttackRelease(note, "1hz", time);
  },
  notes[7],
  "1t"
);

const cell8 = synths[8];
const synthCell8 = new Sequence(
  function (time, note) {
    cell8.triggerAttackRelease(note, "10hz", time);
  },
  notes[8],
  "8n"
);

const cell9 = synths[9];
const synthCell9 = new Sequence(
  function (time, note) {
    cell9.triggerAttackRelease(note, "10hz", time);
  },
  notes[9],
  "2n"
);

const cell10 = synths[10];
const synthCell10 = new Sequence(
  function (time, note) {
    cell10.triggerAttackRelease(note, "0.5hz", time);
  },
  notes[10],
  "1t"
);

const cell11 = synths[11];
const synthCell11 = new Sequence(
  function (time, note) {
    cell11.triggerAttackRelease(note, "10hz", time);
  },
  notes[11],
  "4n"
);

const cell12 = synths[12];
const synthCell12 = new Sequence(
  function (time, note) {
    cell12.triggerAttackRelease(note, "1hz", time);
  },
  notes[12],
  "1n"
);

const cell13 = synths[13];
const synthCell13 = new Sequence(
  function (time, note) {
    cell13.triggerAttackRelease(note, "10hz", time);
  },
  notes[13],
  "4n"
);

const cell14 = synths[14];
const synthCell14 = new Sequence(
  function (time, note) {
    cell14.triggerAttackRelease(note, "10hz", time);
  },
  notes[14],
  "2n"
);

const cell15 = synths[15];
const synthCell15 = new Sequence(
  function (time, note) {
    cell15.triggerAttackRelease(note, "10hz", time);
  },
  notes[15],
  "4n"
);

const cell16 = synths[16];
const synthCell16 = new Sequence(
  function (time, note) {
    cell16.triggerAttackRelease(note, "1hz", time);
  },
  notes[16],
  "2n"
);

const cell17 = synths[17];
const synthCell17 = new Sequence(
  function (time, note) {
    cell17.triggerAttackRelease(note, "10hz", time);
  },
  notes[17],
  "4n"
);

const cell18 = synths[18];
const synthCell18 = new Sequence(
  function (time, note) {
    cell18.triggerAttackRelease(note, "10hz", time);
  },
  notes[18],
  "2t"
);


export const synthCells = [
  synthCell1,
  synthCell2,
  synthCell3,
  synthCell4,
  synthCell5,
  synthCell6,
  synthCell7,
  synthCell8,
  synthCell9,
  synthCell10,
  synthCell11,
  synthCell12,
  synthCell13,
  synthCell14,
  synthCell15,
  synthCell16,
  synthCell17,
  synthCell18,
]
