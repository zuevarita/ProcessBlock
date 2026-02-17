import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <div class = "progress">
      <div class = "progress-ring"></div>
    </div>
    <div class="states-wrapper">
      <div class = "state normal-state">
        <input type="text" inputmode="numeric" id = "normal">
        <label for="normal">Value</label>
      </div>
      <div class = "state animate-state">
        <label class="switch">
          <input type="checkbox" id = "animate">
          <span class="slider"></span>
        </label>
        <label for="animate">Animate</label>
      </div>
      <div class = "state hide-state">
        <label class="switch">
          <input type="checkbox" id = "hide">
          <span class="slider"></span>
        </label>
        <label for="hide">Hide</label>
      </div>
    </div>
  </div>
`;

