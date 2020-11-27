import React from 'react';
import Other from './Other';
import { connect } from 'react-redux';

class App extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                App: {this.props.counter}
                <button onClick={this.props.onHandlePlus}>+</button>
                <button onClick={this.props.onHandleMinus}>-</button>
                <Other counter={this.props.counter}/>
            </div >
        );
    }
}


const mapStateToProps = (state) => {
    return{
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandlePlus: () => dispatch({type:'PLUS'}),
        onHandleMinus: () => dispatch({type:'MINUS'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);