import { formWidget } from "./widget";

const container = document.querySelector(".form");
const form = new formWidget(container);
form.bindToDOM();
