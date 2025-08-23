import { aiChoose } from "./ai-choose.js";
import { checkWinner } from "./check-winner.js";

let ai = aiChoose();
let result = checkWinner(ai, "rock");
console.log(ai, result);
