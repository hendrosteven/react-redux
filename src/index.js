import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//initial state
const initState = {
    counter: 10
}

//Reducer
const rootReducer = (state = initState, action) => {
    switch (action.type){
        case 'PLUS' :
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'MINUS' :
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

//Store
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
