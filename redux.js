const redux = require('redux');

const initState = {
    counter: 0,
    age: 17
}

//Reducer
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'UPDATE_AGE':
            return {
                ...state,
                age: action.newAge
            }
        default:
            return state;
    }
    return state;
}

//Store
const createStore = redux.createStore;
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() =>{
    console.log('store change: ', store.getState());
});

//Dispatcher (Action)
store.dispatch({
    type: 'ADD_COUNTER'
});
store.dispatch({
    type: 'UPDATE_AGE',
    newAge: 20
});
console.log(store.getState());

