
const selectedSeat = (state = [], action) => {
    switch(action.type){
        case "select_ghe" : {
            const index = state.map((item) => item.soGhe === action.data.soGhe)
            if(index !== -1){
                return state = state.filter(item => item.soGhe !== action.data.soGhe)
            } else {
                return [...state, action.data]
            }
        }
        
        default : return state
    }
}

export default selectedSeat;