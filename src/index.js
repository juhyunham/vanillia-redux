import { createStore } from "redux";

const add = document.querySelector(`.add`)
const minus = document.querySelector(`.minus`)
const number = document.querySelector(`.number`)

const countModifer = (count = 0, action) => {
  if (action.type === `ADD`) {
    return count = count + 1;
  } else if (action.type === `MINUS`) {
    return count = count - 1;
  } else {
    return count;
  }
}

const countStore = createStore(countModifer)

countStore.dispatch({type: `ADD`});
countStore.dispatch({type: `ADD`});
countStore.dispatch({type: `ADD`});
countStore.dispatch({type: `ADD`});
countStore.dispatch({type: `MINUS`});

console.log(countStore.getState())