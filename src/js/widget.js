import isValide from "./validator";

export class formWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onSubmit = this.onSubmit.bind(this);
  }
  static get selector() {
    return ".form";
  }
  static get inputSelector() {
    return ".formCard";
  }

  static get submitSelector() {
    return ".btn";
  }
  bindToDOM() {
    this.element = this.parentEl.querySelector(formWidget.selector);
    this.submit = this.parentEl.querySelector(formWidget.submitSelector);
    this.input = this.parentEl.querySelector(formWidget.inputSelector);
    this.parentEl.addEventListener("submit", this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();

    const value = this.input.value;

    if (isValide(value)) {
      console.log(value[0]);
    } else {
      alert("wrong number");
    }
  }
}
