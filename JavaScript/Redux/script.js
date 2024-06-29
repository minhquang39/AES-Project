// import { createStore } from "https://cdn.skypack.dev/redux";

function createStore(reducer) {
  let state = reducer(undefined, {});
  let subscribers = [];
  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      subscribers.forEach((subscriber) => subscriber());
    },
    subscribe(subscriber) {
      subscribers.push(subscriber);
    },
  };
}

const output = document.querySelector(".output");
const deposit = document.querySelector("#deposit");
const withdraw = document.querySelector("#withdraw");

var state;
function bankReducer(state = 0, option) {
  switch (option.type) {
    case "DEPOSIT":
      return state + 10;
    case "WITHDRAW":
      return state - 10;
    default:
      return state;
  }
}

const store = createStore(bankReducer);
// tính năng trong ES6, khi tên thuộc tính trùng tên biến, tên hàm thì sẽ tự gán giá trị
function actionDeposit(payload) {
  return {
    type: "DEPOSIT",
    payload,
  };
}
function actionWithdraw(payload) {
  return {
    type: "WITHDRAW",
    payload,
  };
}

deposit.onclick = function () {
  store.dispatch(actionDeposit(10));
};
withdraw.onclick = function () {
  store.dispatch(actionWithdraw(10));
};

store.subscribe(render);

function render() {
  output.innerHTML = store.getState();
}

render();
