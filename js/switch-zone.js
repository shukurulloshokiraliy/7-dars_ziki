

import { elChooseZone, elStatusZone } from "./html-selection.js";

export function switchZone(boolean) {
  if (boolean) {
    // tanlash zonasi yopiladi
    elChooseZone.classList.add("hidden");
    // status zonasi ochiladi
    elStatusZone.classList.remove("hidden");
  } else {
    // aksincha bo'lsa
    elChooseZone.classList.remove("hidden");
    elStatusZone.classList.add("hidden");
  }
}
