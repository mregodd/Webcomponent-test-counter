import Counter from "./components/Counter.js";

customElements.define("counter-components", Counter);

const myCounter = document.getElementById("myCounter");

setTimeout(() => console.log(myCounter.value), 2000);