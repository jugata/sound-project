import * as Tone from "tone";


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

const synthA = new Tone.Synth({
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

export {
  synths,
  notes,
  synthA
}