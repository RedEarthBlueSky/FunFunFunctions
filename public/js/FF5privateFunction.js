const counter = (function () {
  this.privateCounter = 0;
  function changeBy(val) {
      this.privateCounter += val;
  }
  return {
    increment: () => changeBy(1),
    decrement: () => changeBy(-1),
    value: () => this.privateCounter
  };
})();

console.log(counter.value())
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
