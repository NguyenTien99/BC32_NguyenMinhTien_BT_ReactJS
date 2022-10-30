import data from "../BT_ReactJS_DatVe/data.json";
import { CALC_TOTAL, PAYMENT, REMOVE_SEAT, SELECT_SEAT } from "../constans/datVeConstans";

const initialState = {
  seats: data,
  selectedSeat: [],
  totalCost: 0,
};

const BtDatVeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SEAT: {
      const selectedSeat = [...state.selectedSeat, action.payload];
      return { ...state, selectedSeat };
    }

    case REMOVE_SEAT: {
      const selectedSeat = state.selectedSeat.filter(
        (item) => item.soGhe !== action.payload.soGhe
      );
      return { ...state, selectedSeat };
    }

    case CALC_TOTAL : {
      const totalCost = state.selectedSeat.reduce((total, item) => {
        return (total += item.gia);
      }, 0);

      return { ...state, totalCost };
    }
    case PAYMENT: {
      return { ...state, selectedSeat: [] };
    }

    default:
      return state;
  }
};

export default BtDatVeReducer;
