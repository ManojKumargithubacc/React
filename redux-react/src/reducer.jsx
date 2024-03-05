import { Buy_cake } from "./actionTypes";
const initailState = {
  numofCakes: 10,
};
export default function Cakereducer(state = initailState, action) {
  switch (action.type) {
    case Buy_cake:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };
    default:
      return state;
  }
}
