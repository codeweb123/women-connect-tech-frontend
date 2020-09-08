
let initialState = {
    events: []
}

export default function eventsReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_EVENTS':
            console.log(action.payload)
            // const ap = (action.payload.sort(function(a, b) {
            //     const dateA = a.date
            //     const dateB = b.date
            //     if (dateA < dateB) {
            //         return -1
            //     }
            //     if (dateA > dateB) {
            //         return 1
            //     }
            //     return 0
            // }))
            return {events: action.payload}

        case 'ADD_EVENT':
            const event = action.payload
            return { ...state, events: [event, ...state.events] }

        case 'EDIT_EVENT':
            return { ...state, events: state.events.map(event => event.id === action.payload.id ? action.payload : event)}

        case 'DELETE_EVENT':
            const events = state.events.filter(event => event.id !== action.payload.id)
            return { events }

        default:
            return state;
    }
}

// .then( json => {
    // json.sort(function(a, b) {
    //     const nameA = a.name.toUpperCase()
    //     const nameB = b.name.toUpperCase()
    //     if (nameA < nameB) {
    //         return -1
    //     }
    //     if (nameA > nameB) {
    //         return 1
    //     }
    //     return 0
    // })