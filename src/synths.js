import { MembraneSynth, Synth, Chorus } from "tone"

const chorus = new Chorus(4, 2.5, 0.5)
const choralSynth = new Synth(4, Synth).connect(chorus)
const longSynth = new Synth({
  envelope: {
    attack: 0,
    decay: 0.1,
    sustain: 0.8,
    release: 1
  }
})
const synths = [
  // DRONE
  new Synth(),
  //Cell 1
  new Synth(),
  new Synth(),
  choralSynth,
  new Synth(),
  //Cell 5
  new Synth(),
  new Synth(),
  choralSynth,
  longSynth,
  //Cell 9
  new MembraneSynth(),
  new Synth(),
  new Synth(),
  new Synth(),
  //Cell 13
  new Synth(),
  longSynth,
  new Synth(),
  new Synth(),
  //Cell 17
  new MembraneSynth(),
  new Synth(),
  new Synth(),
  new Synth(),
  //Cell 21
  choralSynth,
  new Synth(),
  choralSynth,
  choralSynth
]

const notes = [
  //drone
  ["C5", "C5"],
  //cell 1
  [[null, [null, "C4"]], "E4"],
  [[null, [null, "C5"]], "E5", "F5", "E5"],
  [null, "E4", "F4", "E4"],
  //cell 4
  [null, "E4", "F4", "G4"],
  ["E4", "F4", "G4", null],
  ["C2", null, null, [null], "C3", null, [null]],
  //cell 7
  [null, [null, ["C7", "C7"]], "C7", null, null, null, null, [null, ["C6", "C6"]], "C6", null, null, null],
  ["G3", "G3", "G3", "F3", "F3", "F3", "F3", null, null, null, [null]],
  [[null, ["B5", "G5"]], null, null, null, [null, ["B4", "G4"]], null, null, null],
  //10
  [[null, ["B6", "G6"]], null, [null, ["B4", "G4"]]],
  [[null, "F4", "G4", "B4", "G4", "B4", "G4"], null, null, null, null, [null, "F5", "G5", "B5", "G5", "B5", "G5"]],
  [[null, [null, ["F4", "G4"]]], "B4", [["C5", [null]], null]],
  //13
  [null, [null, [null, "B5"]], "G5", [null, "G5", "F5", "G5"], null, null, null, "G5", null, null, null],
  ["C3", "C3", "B2", "B2", "G2", "G2", "Gb2", "Gb2", [null]],
  [[["G5"], null], null, null, null, [["G7"], null], null, [["G3"], null], null, null],
  //16
  [["G2", "B2", "C3", "B2"], null, null, null, ["G4", "B4", "C5", "B4"], null, null, null, null, null],
  [["B4", "C5", "B4", "C5", "B4"], null, null, null, ["B3", "C4", "B3", "C4", "B3"], null],
  [["E3", "Gb3", "E3", "Gb3"], "E3", null, [null, "E3"], null, null],
  //19
  [[null], "G5", null, null, null],
  ["E5", "Gb5", "E5", "Gb5", "G4", null, null, "E5", "Gb5", "E5", "Gb5", "E5", null, null, null, null, null, null, null, null, null, null, null],
  ["Gb2", "Gb2", "Gb2", null, null, null, null, null],
  //22
  ["E4", "E4", "E4", "E4", "E4", "Gb4", "G4", "A4", "B4", null, null, null, null, null],
  [[null, null, "E4"], "Gb4", "Gb4", "Gb4", "Gb4", "Gb4", "G4", "A4", "B4", null, null, null, null, null, [null, null, "E3"], "Gb3", "Gb3", "Gb3", "Gb3", "Gb3", "G3", "A3", "B3", null, null, null, null, null],
  [[null, "E4", "Gb4"], "G4", "G4", "G4", "G4", "G4", "A4", "B4", null, null, null, null, null]
]


export {
  synths,
  notes,
}
