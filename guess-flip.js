// Require minimist module (make sure you install this one via npm).
import minimist from 'minimist'
const args = minimist(process.argv.slice(2)) // splits, takes last input
args['call'] // define allowed argument
const call = args.call || 1

import { flipACoin } from "./modules/coin.mjs"

if (args.call == undefined)
{
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]")
}
else if (args.call == 'heads' || args.call == 'tails')
{
    console.log(flipACoin(call))
}
else
{
    console.log("Error: invalid input.\nUsage: node guess-flip --call=[heads|tails]")
}