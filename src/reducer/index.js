const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return {
                ...state,
                result: action.payload,
            }
        case 'SET_PAGINACION_COUNT':
            return {
                ...state,
                resultCard: state.result.slice(action.payload.start, action.payload.end)
            }
        case 'NUM_PAGE':
            return {
                ...state,
                page: action.payload,
            }
        case 'SET_MODALS':
            return {
                ...state,
                statusModal: action.payload,
            }
        case 'SET_ID_EDIT':
            return {
                ...state,
                infoPersonaje: state.result.filter(item => item.id === action.payload)[0],
            }
        case 'SET_DATA_EDIT':
            return {
                ...state,
                result: state.result.filter(item => {
                    if ( item.id === action.payload.id){
                        item.name = action.payload.name;
                        item.species = action.payload.species;
                    }
                   return item;
                }),
            }
        case 'SET_DATA_ELIMINAR':
            return {
                ...state,
                result: state.result.filter(item => item.id !== action.payload),
            }
        case 'SET_NEW_PERSON':
            return {
                ...state,
                result: state.result.concat(action.payload),
            }
        default:
            return state;
    }
};

export default reducer;
