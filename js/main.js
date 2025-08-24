import { switchZone } from "./switch-zone.js";
import { elHands, elPlayer,elrefresh,elAI,elstatusText} from "./html-selection.js";
import { aiChoose } from "./ai-choose.js";
import { checkWinner } from "./check-winner.js";


elHands.forEach((el) => {
    el.addEventListener("click", (e) => {
      const player = e.target.alt;
      const playerSrc = e.target.src;
      elPlayer.src = playerSrc;
      switchZone(true);
  
      setTimeout(() => {
        const ai = aiChoose();   // avval AI tanlansin
        elAI.src = `images/${ai}.svg`;
  
        const winner = checkWinner(ai, player); // keyin g‘olib tekshiriladi
        elstatusText.textContent = winner;
      }, 1000);
  
      console.log(player);
    });
  });
  
  elrefresh.addEventListener("click", () => {
    switchZone(false);
  });
  