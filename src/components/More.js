import React from 'react';
import { connect } from 'react-redux';

const More = ({ counter, onHandleMinus }) => {
    return (
        <div>
            More: {counter}
            <button onClick={onHandleMinus}>-</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleMinus: () => dispatch({type:'MINUS'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(More);