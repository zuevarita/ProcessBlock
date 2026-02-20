import "./style.css";
import { Progress } from "./progress.js";

const progressRing = new Progress(document.querySelector(".progress"))

document.querySelector(".normal-state").addEventListener("change", (e)=>{
  progressRing.setValue(e.target.value)
})
document.querySelector(".animate-state").addEventListener("change", (e)=>{
  progressRing.setAnimate(e.target.checked)
})
document.querySelector(".hide-state").addEventListener("change", (e)=>{
  progressRing.setHide(e.target.checked)
})

