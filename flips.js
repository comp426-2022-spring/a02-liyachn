// Require minimist module (make sure you install this one via npm).
import minimist from 'minimist'
const args = minimist(process.argv.slice(2)) // splits, takes last input
args['number'] // define allowed argument
const number = args.number || 1

import { coinFlips, countFlips } from "./modules/coin.mjs"

// Call the coinFlip function and put the return into STDOUT
var array = coinFlips(number)
console.log(array)
console.log(countFlips(array))