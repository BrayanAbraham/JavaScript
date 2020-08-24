class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`Subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(function (func) {
      if (func !== fn) {
        return func;
      }
    });
    console.log(`You are now Unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function (item) {
      item.call();
    });
  }
}

const click = new EventObserver();

document.querySelector(".sub-ms").addEventListener("click", function () {
  click.subscribe(getCurrMilliSeconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function () {
  click.unsubscribe(getCurrMilliSeconds);
});

document.querySelector(".sub-s").addEventListener("click", function () {
  click.subscribe(getCurrSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", function () {
  click.unsubscribe(getCurrSeconds);
});

document.querySelector(".fire").addEventListener("click", function () {
  click.fire();
});

const getCurrMilliSeconds = function () {
  console.log(`Current Milliseconds ${new Date().getMilliseconds()}`);
};

const getCurrSeconds = function () {
  console.log(`Current seconds ${new Date().getSeconds()}`);
};
