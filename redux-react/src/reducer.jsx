import Buycake from "./Action";
import { BUYCAKE } from "./actionTypes";
const initailState = {
  numofCakes: 10,
};
export default function Cakereducer(state = initailState, action) {
  switch (action.type) {
    case BUYCAKE:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };
    default:
      return state;
  }
}
