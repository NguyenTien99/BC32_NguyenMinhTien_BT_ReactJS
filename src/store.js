import { createStore, combineReducers } from "redux";
// import dataSeats from "./reducers/dataSeatReducer";
// import selectedSeat from "./reducers/selectedSeatReducer";
import BtDatVeReducer from "./reducers/BT_DatVeReducer";

const reducer = combineReducers({
    datVeRedux : BtDatVeReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
