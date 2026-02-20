export class Progress {
  #percentage = 0;
  #element;
  #circle;
  #isActive;
  constructor(container) {
    this.#createElement(container);
  }

  #createElement(container) {
    const progressContainer = document.createElement("div");
    const progressHTML = `
        <svg class = "progress-ring" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle class = "progress-back" cx="50" cy="50" r="40" fill ="none" stroke="var(--primary-light-color)" stroke-width="10" />
            <circle class = "progress-bar" cx="50" cy="50" r="40" fill ="none" stroke="var(--primary-color)" stroke-width="10"/>
        </svg>`;
    progressContainer.innerHTML = progressHTML;

    this.#element = progressContainer.firstElementChild;
    container.insertAdjacentElement("afterbegin", this.#element);
    this.#circle = this.#element.querySelector(".progress-bar");

    this.circleLength = this.#circle.r.baseVal.value * Math.PI * 2 + 0.2;
    this.#circle.style.strokeDasharray = `${this.circleLength} ${this.circleLength}`;
    this.#circle.style.strokeDashoffset = `${this.circleLength}`;

  }

  setValue(perc) {
    this.#percentage = Math.min(Math.max(perc, 0), 100);
    const showLine = (this.#isActive && (this.#percentage === 0 || this.#percentage === 100))? 25: this.#percentage
    this.#circle.style.strokeDashoffset = `${this.circleLength - (showLine / 100) * this.circleLength}`;
  }

  setAnimate(isActive) {
    this.#isActive = isActive;
    if (isActive) {
      if (this.#percentage === 0 || this.#percentage === 100) {
        this.#circle.style.strokeDashoffset = `${this.circleLength - (25 / 100) * this.circleLength}`;
      }
      this.#element.classList.add("isActive");
    }else{
        this.#element.classList.remove("isActive");
        this.setValue(this.#percentage)
    }
  }

  setHide(isHide){
    this.#element.style.display = isHide ? "none" : "";
  }
}
