import { Sequence } from "tone"
import { synths, notes } from '../synths'

const cell1 = synths[1]
const synthCell1 = new Sequence(
  (time, note) => { cell1.triggerAttackRelease(note, "32n", time) },
  notes[1],
  "8n"
)

const cell2 = synths[2];
const synthCell2 = new Sequence(
  (time, note) => { cell2.triggerAttackRelease(note, "32n", time) },
  notes[2],
  "8n"
)

const cell3 = synths[3]
const synthCell3 = new Sequence(
  (time, note) => { cell3.triggerAttackRelease(note, "32n", time) },
  notes[3],
  "8n"
)

const cell4 = synths[4]
const synthCell4 = new Sequence(
  (time, note) => { cell4.triggerAttackRelease(note, "32n", time) },
  notes[4],
  "8n"
)

const cell5 = synths[5]
const synthCell5 = new Sequence(
  (time, note) => { cell4.triggerAttackRelease(note, "32n", time) },
  notes[5],
  "8n"
)

const cell6 = synths[6]
const synthCell6 = new Sequence(
  (time, note) => { cell6.triggerAttackRelease(note, "1n", time, 1) },
  notes[6],
  "1t"
)

const cell7 = synths[7]
const synthCell7 = new Sequence(
  (time, note) => { cell7.triggerAttackRelease(note, "32n", time, 1) },
  notes[7],
  "4n"
)

const cell8 = synths[8]
const synthCell8 = new Sequence(
  (time, note) => { cell8.triggerAttackRelease(note, "1n", time, 1) },
  notes[8],
  "1t"
)

const cell9 = synths[9]
const synthCell9 = new Sequence(
  (time, note) => { cell9.triggerAttackRelease(note, "32n", time) },
  notes[9],
  "4n"
)

const cell10 = synths[10]
const synthCell10 = new Sequence(
  (time, note) => { cell10.triggerAttackRelease(note, "32n", time) },
  notes[10],
  "4n"
)

const cell11 = synths[11]
const synthCell11 = new Sequence(
  (time, note) => { cell11.triggerAttackRelease(note, "32n", time) },
  notes[11],
  "2n"
)

const cell12 = synths[12]
const synthCell12 = new Sequence(
  (time, note) => { cell12.triggerAttackRelease(note, "1n", time, 1) },
  notes[12],
  "1n"
)

const cell13 = synths[13]
const synthCell13 = new Sequence(
  (time, note) => { cell13.triggerAttackRelease(note, "2n", time) },
  notes[13],
  "4n"
)

const cell14 = synths[14]
const synthCell14 = new Sequence(
  (time, note) => { cell14.triggerAttackRelease(note, "1n", time) },
  notes[14],
  "1t"
)

const cell15 = synths[15]
const synthCell15 = new Sequence(
  (time, note) => { cell15.triggerAttackRelease(note, "32n", time) },
  notes[15],
  "4n"
)

const cell16 = synths[16]
const synthCell16 = new Sequence(
  (time, note) => {
    cell16.triggerAttackRelease(note, "32n", time)
  },
  notes[16],
  "4n"
)

const cell17 = synths[17]
const synthCell17 = new Sequence(
  (time, note) => { cell17.triggerAttackRelease(note, "32n", time) },
  notes[17],
  "2t"
)

const cell18 = synths[18]
const synthCell18 = new Sequence(
  (time, note) => { cell18.triggerAttackRelease(note, "4n", time) },
  notes[18],
  "2t"
)

const cell19 = synths[19]
const synthCell19 = new Sequence(
  (time, note) => { cell19.triggerAttackRelease(note, "4n", time) },
  notes[19],
  "2t"
)

const cell20 = synths[20]
const synthCell20 = new Sequence(
  (time, note) => { cell20.triggerAttackRelease(note, "32n", time) },
  notes[20],
  "16n"
)

const cell21 = synths[21]
const synthCell21 = new Sequence(
  (time, note) => { cell21.triggerAttackRelease(note, "1t", time) },
  notes[21],
  "2n"
)

const cell22 = synths[22]
const synthCell22 = new Sequence(
  (time, note) => { cell22.triggerAttackRelease(note, "8n", time) },
  notes[22],
  "2t"
)

const cell23 = synths[23]
const synthCell23 = new Sequence(
  (time, note) => { cell23.triggerAttackRelease(note, "8n", time) },
  notes[23],
  "2t"
)

const cell24 = synths[24]
const synthCell24 = new Sequence(
  (time, note) => { cell24.triggerAttackRelease(note, "8n", time) },
  notes[24],
  "2t"
)

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
  synthCell19,
  synthCell20,
  synthCell21,
  synthCell22,
  synthCell23,
  synthCell24
]
